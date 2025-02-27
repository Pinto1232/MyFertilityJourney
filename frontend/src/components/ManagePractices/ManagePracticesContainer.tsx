import React, { useEffect, useState } from 'react';
import ManagePracticesPresentational from './ManagePracticesPresentational';
import ManagePracticesModal from './ManagePracticesModal';
import { fetchPractices, savePractice, updatePractice } from '../../api/services/api';
import { Practice } from './ManagePracticesTypes';
import { Snackbar, Alert } from '@mui/material';

const ManagePracticesContainer: React.FC = () => {
    const [practices, setPractices] = useState<Practice[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentPractice, setCurrentPractice] = useState<Practice | undefined>(undefined);
    const [categories, setCategories] = useState<string[]>([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

    const getPractices = async () => {
        try {
            const response = await fetchPractices();
            console.log('Fetched Practices data on Manage practice:', response);
            setPractices(response);
            const uniqueCategories: string[] = Array.from(new Set(response.map((practice: Practice) => practice.category)));
            setCategories(uniqueCategories);
        } catch (error) {
            console.error('Error fetching practices:', error);
        }
    };

    useEffect(() => {
        getPractices();
    }, []);

    const handleAddPractice = () => {
        setCurrentPractice(undefined);
        setModalOpen(true);
    };

    const handleEditPractice = (practice: Practice) => {
        setCurrentPractice(practice);
        setModalOpen(true);
    };

    const handleSavePractice = async (practice: Practice) => {
        console.log('Saved Practice:', practice);
        try {
            if (practice.id === 0) {
                await savePractice(practice);
            } else {
                await updatePractice(practice);
            }
            await getPractices();
            setSnackbarMessage('Practice saved successfully!');
            setSnackbarSeverity('success');
        } catch (error) {
            console.error('Error saving practice:', error);
            setSnackbarMessage('Error saving practice.');
            setSnackbarSeverity('error');
        } finally {
            setSnackbarOpen(true);
        }
    };

    const handleDeletePractice = (id: number) => {
        setPractices(practices.filter(practice => practice.id !== id));
    };

    const handleTogglePractice = (id: number) => {
        setPractices(practices.map(practice =>
            practice.id === id ? { ...practice, status: practice.status === 'active' ? 'inactive' : 'active' } : practice
        ));
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <>
            <ManagePracticesPresentational
                practices={practices}
                onAddPractice={handleAddPractice}
                onDeletePractice={handleDeletePractice}
                onTogglePractice={handleTogglePractice}
                onEditPractice={handleEditPractice}
            />
            <ManagePracticesModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSavePractice}
                practice={currentPractice}
                categories={categories}
            />
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default ManagePracticesContainer;

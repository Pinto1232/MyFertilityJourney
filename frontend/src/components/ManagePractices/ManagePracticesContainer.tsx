import React, { useEffect, useState } from 'react';
import ManagePracticesPresentational from './ManagePracticesPresentational';
import ManagePracticesModal from './ManagePracticesModal';
import { fetchPractices, savePractice, updatePractice } from '../../api/services/api';
import { Practice } from './ManagePracticesTypes';

const ManagePracticesContainer: React.FC = () => {
    const [practices, setPractices] = useState<Practice[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentPractice, setCurrentPractice] = useState<Practice | undefined>(undefined);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
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
            let savedPractice: Practice;
            if (practice.id === 0) {
                savedPractice = await savePractice(practice);
                setPractices([...practices, savedPractice]);
            } else {
                savedPractice = await updatePractice(practice);
                setPractices(practices.map(p => (p.id === practice.id ? savedPractice : p)));
            }
        } catch (error) {
            console.error('Error saving practice:', error);
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
        </>
    );
};

export default ManagePracticesContainer;

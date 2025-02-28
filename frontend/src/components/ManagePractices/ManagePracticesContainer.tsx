import React, { useEffect, useState, useCallback } from 'react';
import ManagePracticesPresentational from './ManagePracticesPresentational';
import ManagePracticesModal from './ManagePracticesModal';
import useApi from '../../api/services/api';
import { Practice } from './ManagePracticesTypes';
import { Snackbar, Alert } from '@mui/material';
import { useGlobalState } from '../../hooks/useGlobalState';
import Spinner from '../Spinner/Spinner';

const ManagePracticesContainer: React.FC = () => {
  const { fetchPractices, savePractice, updatePractice } = useApi();
  const [practices, setPractices] = useState<Practice[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPractice, setCurrentPractice] = useState<Practice | undefined>(undefined);
  const [categories, setCategories] = useState<string[]>([]);
  const { loading, setLoading, error, setError } = useGlobalState();

  const getPractices = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchPractices();
      console.log('Fetched Practices data on Manage practice:', response);
      setPractices(response);
      const uniqueCategories: string[] = Array.from(new Set(response.map((practice: Practice) => practice.category)));
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching practices:', error);
    } finally {
      setLoading(false);
    }
  }, [fetchPractices, setLoading]);

  useEffect(() => {
    getPractices();
  }, [getPractices]);

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
      setError(null);
    } catch (error) {
      console.error('Error saving practice:', error);
      setError('Error saving practice.');
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
      {loading && <Spinner />}
      {error && (
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setError(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setError(null)} severity="error" sx={{ minWidth: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default ManagePracticesContainer;

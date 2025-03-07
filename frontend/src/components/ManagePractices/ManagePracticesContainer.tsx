import React, { useEffect, useState, useCallback } from 'react';
import ManagePracticesPresentational from './ManagePracticesPresentational';
import ManagePracticesModal from './ManagePracticesModal';
import useApi from '../../api/services/api';
import { Practice } from './ManagePracticesTypes';
import { useGlobalStateContext } from '../../hooks/useGlobalStateContext';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ManagePracticesContainer: React.FC = () => {
  const { fetchPractices, savePractice, updatePractice } = useApi();
  const [practices, setPractices] = useState<Practice[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPractice, setCurrentPractice] = useState<Practice | undefined>(undefined);
  const [categories, setCategories] = useState<string[]>([]);
  const { loading, setLoading, error, setError } = useGlobalStateContext();
  const [showSpinner, setShowSpinner] = useState(false);

  // Fetch practices data from the API
  const getPractices = useCallback(async () => {
    setLoading(true);
    setShowSpinner(false);
    const spinnerTimeout = setTimeout(() => setShowSpinner(true), 500);
    try {
      const response = await fetchPractices();
      console.log('Fetched Practices data on Manage practice:', response);
      setPractices(response);
      const uniqueCategories: string[] = Array.from(new Set(response.map((practice: Practice) => practice.category)));
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching practices:', error);
    } finally {
      clearTimeout(spinnerTimeout);
      setLoading(false);
      setShowSpinner(false);
    }
  }, [fetchPractices, setLoading]);

  // Fetch practices data on component mount
  useEffect(() => {
    getPractices();
    const interval = setInterval(getPractices, 60000);
    return () => clearInterval(interval);
  }, [getPractices]);

  // Handle adding a new practice
  const handleAddPractice = () => {
    setCurrentPractice(undefined);
    setModalOpen(true);
  };

  // Handle editing an existing practice
  const handleEditPractice = (practice: Practice) => {
    setCurrentPractice(practice);
    setModalOpen(true);
  };

  // Handle saving a practice (either new or updated)
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

  // Handle deleting a practice
  const handleDeletePractice = (id: number) => {
    setPractices(practices.filter(practice => practice.id !== id));
  };

  // Handle toggling the status of a practice
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
      {showSpinner && loading && <Spinner />}
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
    </>
  );
};

export default ManagePracticesContainer;

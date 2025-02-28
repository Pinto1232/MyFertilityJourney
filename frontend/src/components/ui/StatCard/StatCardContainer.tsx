import React, { useEffect, useState, useCallback } from 'react';
import useApi from '../../../api/services/api';
import { AxiosError } from 'axios';
import StatCardPresentational from './StatCardPresentational';
import { UserProfile, Metrics, Practice } from './StatCard.types';

const StatCardContainer: React.FC = () => {
  const { fetchMetrics, fetchPractices, registerUser } = useApi();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [practices, setPractices] = useState<Practice[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    confirmPassword: '',
  });

  const fetchData = useCallback(async () => {
    try {
      const metricsData = await fetchMetrics();
      const practicesData = await fetchPractices();
      setMetrics(metricsData);
      setPractices(practicesData);
      console.log('Metrics data on stat card:', metricsData);
      console.log('Practices data on stat card:', practicesData);
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        console.error('Error response data:', err.response.data);
        console.error('Error response status:', err.response.status);
        console.error('Error response headers:', err.response.headers);
      } else if (err.request) {
        console.error('Error request data:', err.request);
      } else {
        console.error('Error message:', err.message);
      }
      console.error('Error config:', err.config);
    }
  }, [fetchMetrics, fetchPractices]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await registerUser(formData);
      setUserProfile(userData);
      console.log('User data on stat card:', userData);
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        const responseData = err.response.data as { message: string };
        if (responseData.message === 'Email is already taken') {
          console.error('The email address is already in use.');
        } else {
          console.error('Error response data:', responseData);
        }
        console.error('Error response status:', err.response.status);
        console.error('Error response headers:', err.response.headers);
      } else if (err.request) {
        console.error('Error request data:', err.request);
      } else {
        console.error('Error message:', err.message);
      }
      console.error('Error config:', err.config);
    }
  };

  return (
    <StatCardPresentational
      userProfile={userProfile}
      metrics={metrics}
      practices={practices}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default StatCardContainer;

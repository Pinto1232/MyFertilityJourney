import axios from 'axios';
import { Practice } from '../../components/ManagePractices/ManagePracticesTypes';
import { UserProfile } from '../../components/Profile/ProfileTypes';
import { useGlobalState } from '../../hooks/useGlobalState';

interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  phoneNumber: string;
  address: string;
}

const API_URL = 'http://localhost:5006/api';

const useApi = () => {
  const { setLoading, setError } = useGlobalState();

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      console.log('Login API Request:', { email, password });
      const response = await axios.post(`${API_URL}/User/login`, { email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        console.log('Token stored:', response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (formData: AuthFormData) => {
    setLoading(true);
    setError(null);
    try {
      console.log('Register API Request:', formData);
      const response = await axios.post(`${API_URL}/User/register`, formData);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchMetrics = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/Metrics`, {
        headers: {
          Accept: 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      console.log('Fetched Metrics:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching metrics:', error);
      setError('Error fetching metrics.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchLogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/Logs`, {
        headers: {
          Accept: 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      console.log('Fetched Logs:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching logs:', error);
      setError('Error fetching logs.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchPractices = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/Practice`, {
        headers: {
          Accept: 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      console.log('Fetched Practices:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching practices:', error);
      setError('Error fetching practices.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.get(`${API_URL}/User/profile`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Fetched User Profile:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setError('Error fetching user profile.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (userProfile: UserProfile) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.put(`${API_URL}/User/profile/${userProfile.id}`, userProfile, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Updated User Profile:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating user profile:', error);
      setError('Error updating user profile.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const savePractice = async (practice: Practice) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${API_URL}/Practice`, practice, {
        headers: {
          Accept: 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      console.log('Saved Practice to database:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error saving practice:', error);
      setError('Error saving practice.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updatePractice = async (practice: Practice) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${API_URL}/Practice/${practice.id}`, practice, {
        headers: {
          Accept: 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      console.log('Updated Practice in database:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating practice:', error);
      setError('Error updating practice.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loginUser,
    registerUser,
    fetchMetrics,
    fetchLogs,
    fetchPractices,
    fetchUserProfile,
    updateUserProfile,
    savePractice,
    updatePractice,
  };
};

export default useApi;

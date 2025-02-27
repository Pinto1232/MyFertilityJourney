import axios from 'axios';

interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

const API_URL = 'http://localhost:5006/api';

// Login function
export const loginUser = async (email: string, password: string) => {
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
    throw error;
  }
};

// Register function
export const registerUser = async (formData: AuthFormData) => {
  try {
    console.log('Register API Request:', formData);
    const response = await axios.post(`${API_URL}/User/register`, formData);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Fetch Metrics function (existing)
export const fetchMetrics = async () => {
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
    throw error;
  }
};

// Fetch Logs function
export const fetchLogs = async () => {
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
    throw error;
  }
};

// Fetch Practices function
export const fetchPractices = async () => {
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
    throw error;
  }
};

export const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/User/profile`, {
      headers: {
        Accept: 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
    console.log('Fetched Profile:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

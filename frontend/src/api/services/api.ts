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
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import { AuthFormData } from './types';
import useApi from '../../api/services/api';
import axios from 'axios';
import useSnackbar from '../../hooks/useSnackbar';
import { Alert, Snackbar } from '@mui/material';
import { useGlobalStateContext } from '../../hooks/useGlobalStateContext';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const AuthContainer: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phoneNumber: '',
    address: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();
  const { snackbar, showSnackbar, hideSnackbar } = useSnackbar();
  const { loginUser, registerUser} = useApi();
  const { loading, setLoading, error, setError } = useGlobalStateContext();

  const validate = (name: string, value: string) => {
    switch (name) {
      case 'email':
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return 'Invalid email address';
        }
        break;
      case 'password':
        if (value.length < 6) {
          return 'Password must be at least 6 characters';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          return 'Passwords do not match';
        }
        break;
      default:
        return '';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const mutation = useMutation({
    mutationFn: async (data: AuthFormData) => {
      setLoading(true);
      try {
        return isLogin ? loginUser(data.email, data.password) : registerUser(data);
      } finally {
        setLoading(false);
      }
    },
    onSuccess: (data) => {
      console.log(isLogin ? 'Login Success:' : 'Registration Success:', data);
      showSnackbar(isLogin ? 'Login successful!' : 'Registration successful!', 'success');

      if (isLogin) {
        // Pass formData (user data) via navigation state to Dashboard
        navigate('/dashboard', { state: { user: formData } });
      } else {
        setIsLogin(true); 
        showSnackbar('Account created! Please log in.', 'info');
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data?.message || 'An error occurred. Please try again.';
        showSnackbar(message, 'error');
      } else {
        showSnackbar('Network error or server unreachable.', 'error');
      }
      console.error('Error:', error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted!');

    const emailError = validate('email', formData.email);
    const passwordError = validate('password', formData.password);
    const confirmPasswordError = isLogin ? '' : validate('confirmPassword', formData.confirmPassword || '');

    if (emailError || passwordError || confirmPasswordError) {
      setErrors({ email: emailError, password: passwordError, confirmPassword: confirmPasswordError });
      console.log('Validation errors:', { emailError, passwordError, confirmPasswordError });
      return;
    }

    console.log('Form Data Sent to API:', formData);
    mutation.mutate(formData);
  };

  return (
    <>
      <AuthForm
        isLogin={isLogin}
        formData={formData}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onSwitchAuth={() => setIsLogin(!isLogin)}
      />
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={hideSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={hideSnackbar} severity={snackbar.severity} sx={{ minWidth: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AuthContainer;

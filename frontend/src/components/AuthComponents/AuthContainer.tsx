import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { AuthFormData } from './types';

const AuthContainer: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState<AuthFormData>({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailError = validate('email', formData.email);
        const passwordError = validate('password', formData.password);
        const confirmPasswordError = validate('confirmPassword', formData.confirmPassword || '');
        
        if (emailError || passwordError || confirmPasswordError) {
            setErrors({
                email: emailError,
                password: passwordError,
                confirmPassword: confirmPasswordError,
            });
            return;
        }
        console.log(isLogin ? 'Login data:' : 'Register data:', formData);
    };

    return (
        <AuthForm
            isLogin={isLogin}
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onSwitchAuth={() => setIsLogin(!isLogin)}
        />
    );
};

export default AuthContainer;

import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { AuthFormData } from './types';
import {
    PageContainer,
    LeftPanel,
    RightPanel,
    AuthLayout,
    Header,
    SubmitButton,
    SwitchAuthButton,
    StyledImage,
    DescriptionText,
} from './styles';

const AuthContainer: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState<AuthFormData>({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(isLogin ? 'Login data:' : 'Register data:', formData);
    };

    return (
        <PageContainer>
            <LeftPanel>
                <Typography variant="h4" gutterBottom>
                    My Fertility Journey
                </Typography>
                <Typography variant="body1" align="center">
                    Please sign into your account
                </Typography>
                <DescriptionText>
                    Access your personalized dashboard to track your fertility journey, view reports, and manage your account settings.
                </DescriptionText>
                <Box mt={4}>
                    <StyledImage
                        src="/assets/baby.jpg"
                        alt="Chart Placeholder"
                    />
                </Box>
            </LeftPanel>
            <RightPanel>
                <AuthLayout>
                    <Header>{isLogin ? 'Login to your account' : 'Create an account'}</Header>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email Address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        {!isLogin && (
                            <TextField
                                fullWidth
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                        )}
                        <SubmitButton fullWidth type="submit" variant="contained">
                            {isLogin ? 'Login' : 'Register'}
                        </SubmitButton>
                    </form>
                    <SwitchAuthButton fullWidth onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'New here? Sign up now!' : 'Already have an account? Log in'}
                    </SwitchAuthButton>
                </AuthLayout>
            </RightPanel>
        </PageContainer>
    );
};

export default AuthContainer;

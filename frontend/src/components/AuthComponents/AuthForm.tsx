import React from 'react';
import { Typography, Box } from '@mui/material';
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
import ReusableTextField from '../ui/ReusableTextField';
import { AuthFormData } from './types';

interface AuthFormProps {
    isLogin: boolean;
    formData: AuthFormData;
    errors: { [key: string]: string };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onSwitchAuth: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, formData, errors, onChange, onSubmit, onSwitchAuth }) => {
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
                    <form onSubmit={onSubmit}>
                        {!isLogin && (
                            <>
                                <ReusableTextField
                                    label="Name"
                                    variant="standard"
                                    name="name"
                                    labelFontSize="12px"
                                    value={formData.name}
                                    onChange={onChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                />
                                <ReusableTextField
                                    label="Phone Number"
                                    variant="standard"
                                    name="phoneNumber"
                                    labelFontSize="12px"
                                    value={formData.phoneNumber}
                                    onChange={onChange}
                                    error={!!errors.phoneNumber}
                                    helperText={errors.phoneNumber}
                                />
                                <ReusableTextField
                                    label="Address"
                                    variant="standard"
                                    name="address"
                                    labelFontSize="12px"
                                    value={formData.address}
                                    onChange={onChange}
                                    error={!!errors.address}
                                    helperText={errors.address}
                                />
                            </>
                        )}
                        <ReusableTextField
                            label="Email Address"
                            variant="standard"
                            name="email"
                            labelFontSize="12px"
                            value={formData.email}
                            onChange={onChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <ReusableTextField
                            label="Password"
                            name="password"
                            variant="standard"
                            labelFontSize="12px"
                            value={formData.password}
                            onChange={onChange}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                        {!isLogin && (
                            <ReusableTextField
                                label="Confirm Password"
                                variant="standard"
                                name="confirmPassword"
                                labelFontSize="12px"
                                value={formData.confirmPassword || ''}
                                onChange={onChange}
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword}
                            />
                        )}
                        <SubmitButton fullWidth type="submit" variant="contained">
                            {isLogin ? 'Login' : 'Register'}
                        </SubmitButton>
                    </form>
                    <SwitchAuthButton fullWidth onClick={onSwitchAuth}>
                        {isLogin ? 'New here? Sign up now!' : 'Already have an account? Log in'}
                    </SwitchAuthButton>
                </AuthLayout>
            </RightPanel>
        </PageContainer>
    );
};

export default AuthForm;

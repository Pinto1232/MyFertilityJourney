import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { AuthFormProps } from './types';

const AuthForm: React.FC<AuthFormProps> = ({ 
  onSubmit, 
  onChange, 
  formData, 
  isLogin = true 
}) => {
  return (
    <Box component="form" onSubmit={onSubmit}>
      <TextField
        fullWidth
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        margin="normal"
        required
      />
      
      <TextField
        fullWidth
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={onChange}
        margin="normal"
        required
      />
      
      {!isLogin && (
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword || ''}
          onChange={onChange}
          margin="normal"
          required
        />
      )}

      <Button 
        fullWidth 
        type="submit" 
        variant="contained" 
        sx={{ mt: 2 }}
      >
        {isLogin ? 'Login' : 'Register'}
      </Button>
    </Box>
  );
};

export default AuthForm;
import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type ReusableTextFieldProps = TextFieldProps & {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'filled' | 'outlined' | 'standard';
  helperText?: string;
  labelFontSize?: string;
};

const ReusableTextField: React.FC<ReusableTextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  variant = 'outlined',
  helperText,
  labelFontSize,
  ...props
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      margin="normal"
      variant={variant}
      helperText={helperText}
      InputLabelProps={{
        style: { fontSize: labelFontSize },
      }}
      {...props}
    />
  );
};

export default ReusableTextField;

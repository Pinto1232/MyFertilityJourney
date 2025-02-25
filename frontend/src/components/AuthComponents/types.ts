export interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: AuthFormData;
  isLogin?: boolean;
}

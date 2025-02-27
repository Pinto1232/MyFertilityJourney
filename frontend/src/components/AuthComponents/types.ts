export interface AuthFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  phoneNumber: string;
  address: string;
}


export interface AuthFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: AuthFormData;
  isLogin?: boolean;
}

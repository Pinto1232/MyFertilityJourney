export interface StatCardProps {
    title: string;
    total: number;
    percentage: string;
    mainIcon: React.ReactNode;
    secondaryIcon?: React.ReactNode;
  }

  export interface AuthFormData {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    confirmPassword?: string;
  }

export interface UserProfile {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
  address: string;
}

export interface Metrics {
  totalUsers: number;
  totalPractices: number;
  totalLogs: number;
  totalTreatments: number;
  totalConsents: number;
  totalConsentsSigned: number;
  totalFactSheetsRead: number;
}

export interface Practice {
  id: number;
  name: string;
  description: string;
  category: string;
  status: string;
}

export interface StatCardPresentationalProps {
  userProfile: UserProfile | null;
  metrics: Metrics | null;
  practices: Practice[];
  formData: {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    confirmPassword: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

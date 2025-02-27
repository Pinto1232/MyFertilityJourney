export interface Practice {
    id: number;
    name: string;
    description: string;
    category: string;
    email: string;
    status: string;
    active: boolean;
    createdAt: string;
    ownerId: number;
    ownerName: string;
    phoneNumber: string;
}

export interface ManagePracticesPresentationalProps {
    practices: Practice[];
    onAddPractice: () => void;
    onDeletePractice: (id: number) => void;
    onTogglePractice: (id: number) => void;
    onEditPractice: (practice: Practice) => void;
}

export interface ManagePracticesModalProps {
    open: boolean;
    onClose: () => void;
    onSave: (practice: Practice) => void;
    practice?: Practice;
    categories: string[];
}

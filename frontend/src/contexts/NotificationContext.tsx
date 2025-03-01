import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Notification {
  id: string;
  title: string;
  user: string;
  date: string;
  unread?: boolean;
}

interface NotificationContextProps {
  notifications: Notification[];
  unreadCount: number;
  deleteNotification: (id: string) => void;
  clearNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: '1', title: 'New Registration', user: 'Alex Fredricks', date: '07 Oct 2022', unread: true },
    { id: '2', title: 'New Constant Added', user: 'Blake Robertson', date: '07 Oct 2022', unread: true },
    { id: '3', title: 'New Constant Added', user: 'Blake Robertson', date: '07 Oct 2022', unread: true },
  ]);

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Clear all notifications completely (or mark them as read if you prefer)
  const clearNotifications = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, deleteNotification, clearNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

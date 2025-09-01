import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'educator';
  avatar?: string;
  preferences: {
    learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'reading';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    notifications: boolean;
  };
}

interface UserContextType {
  user: User;
  updateUser: (updates: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    role: 'student',
    preferences: {
      learningStyle: 'visual',
      difficulty: 'intermediate',
      notifications: true,
    },
  });

  const updateUser = (updates: Partial<User>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
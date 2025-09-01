import React from 'react';
import { Navigate } from 'react-router-dom';

interface SecureProps {
  user: any;
  children: React.ReactNode;
}

const Secure: React.FC<SecureProps> = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default Secure;

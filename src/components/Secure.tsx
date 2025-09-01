import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface SecureProps {
  user: any; // adjust if you have a User type
  children: React.ReactNode;
}

const Secure: React.FC<SecureProps> = ({ user, children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // short delay to simulate async user check
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-xl">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default Secure;


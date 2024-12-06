import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      toast.error("You need to log in to access this page!");
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
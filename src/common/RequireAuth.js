import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate }  from 'react-router-dom';

export default function RequireAuth({ children }) {

    const user = useSelector(state=>state.user)
    const location = useLocation();
  
    if (!user.isLoggedIn) {
      return <Navigate to="/" state={{ from: location }} />;
    }
  
    return children;
  }
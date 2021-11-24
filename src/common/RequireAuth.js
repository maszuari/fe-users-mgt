import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate }  from 'react-router-dom';

export default function RequireAuth({ children }) {

    const user = useSelector(state=>state.user)
    const location = useLocation();
  
    if (!user.isLoggedIn) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/" state={{ from: location }} />;
    }
  
    return children;
  }
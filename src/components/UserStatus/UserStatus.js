import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { userActions } from '../../actions/user';

export default function UserStatus() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user.isLoggedIn) {
    return <p>You are not logged in.</p>;
  }

  const handleLogout = () => {
    console.log('LOGOUT');
    dispatch(userActions.logout());
    navigate('/')
  }
  console.log('UserStatus ', user.username);
  return (
    <Box>
      Welcome {user.user.username}!{" "}
      {user.user && (
        <Button color="inherit" onClick={handleLogout}>
          Sign out
        </Button>
      )}
    </Box>
  );
}
import { Outlet } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UserStatus from '../UserStatus/UserStatus';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar(){
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
              Users Management
            </Typography>
            <UserStatus />
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box>
    )
}
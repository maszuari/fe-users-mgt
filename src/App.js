import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard';
import RequireAuth from './common/RequireAuth';
import {AuthProvider} from './common/useAuth';

function App() {
  return (

      <AuthProvider>
        <BrowserRouter>
        <Container fixed>
          <Routes>
            <Route element={<NavBar />}>
              <Route path="/" element={<Login />}/>
              <Route path="main" element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              } />
            </Route>
          </Routes>
          </Container>
        </BrowserRouter>
      </AuthProvider>
 
  );
}

export default App;

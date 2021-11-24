import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './common/history';
import { alertActions } from './actions/alert';
import Container from '@mui/material/Container';
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard';
import RequireAuth from './common/RequireAuth';

function App() {
  
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }, []);

  return (

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
  );
}

export default App;

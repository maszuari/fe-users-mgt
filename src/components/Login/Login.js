import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
// import useAuth from '../../common/useAuth';
// import AuthService from "../../services/auth.service";
import { userActions } from '../../actions/user'; 

const validationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  }).required();

export default function Login(){

    const alert = useSelector(state => state.alert);
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
 
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    useEffect(() => {
        if( user.isLoggedIn ) {
            navigate('/main');
        }
    },[user.isLoggedIn])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    const onLogin = (data) =>{
        console.log(JSON.stringify(data, null, 2));
        // login(data.username, data.password).then(()=>{
        //     navigate(state?.path || '/main');
        // });

        setLoading(true);
        
        dispatch(userActions.login(data.username, data.password));

        if(alert.status === 'error') {
            setOpen(true);
        }else{
            setOpen(false);
        }

       
    }

    console.log('FROM -> ', location.state);
    console.log('USER -> ', user);
    return (
        <Grid container spacing={3}>
            <Snackbar 
                open={open} 
                autoHideDuration={6000} 
                onClose={handleClose} 
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                 {alert.message}
                </Alert>
            </Snackbar>
            <Grid item xs>
                
            </Grid>
            <Grid item xs={6}>
            <Box
                sx={{
                    display: 'flex',    
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 1,
                    m: 1,
                }}
            > 
            
                    <Box>
                        <FormControl error={errors.username?true:false} variant="standard">
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input
                                id="username"
                                required
                                aria-describedby="username"
                                {...register('username')}
                                error={errors.username ? true : false}
                            />
                            <FormHelperText id="username-error">{errors.username?.message}</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box mt={2}>
                        <FormControl error={errors.password?true:false} variant="standard">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type="password"
                                required
                                aria-describedby="password"
                                {...register('password')}
                                error={errors.password ? true : false}
                            />
                            <FormHelperText id="password-error">{errors.password?.message}</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box mt={4}>
                        <Button variant="contained" onClick={handleSubmit(onLogin)}>Login</Button>
                    </Box>
                </Box>
                
            </Grid>
           
            <Grid item xs>
                
            </Grid>
        </Grid>
    )
}
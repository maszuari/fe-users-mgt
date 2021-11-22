import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useAuth from '../../common/useAuth';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const validationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  }).required();

export default function Login(){
    const navigate = useNavigate();
    const {state} = useLocation();
    const { login } = useAuth();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    

    // let state = location.state;
    // let from = state ? state.from.pathname : "/";
    
    // const [username, setUsername] = React.useState(null);
    // const [password, setPassword] = React.useState(null);

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     let formData = new FormData(event.currentTarget);
    //     let username = formData.get("username");
    //     let password = formData.get("password");
    //     console.log('Login ', username);
    //     // auth.signin(username, password, () => {
    //     //     navigate(from, { replace: true });
    //     // });
    //     // setUsername(event.target.value);
    //     login().then(()=>{
    //         navigate(from, { replace: true });
    //         // if( state.path ) {
    //         //     navigate(state?.path || '/main');
    //         // }else {
    //         //     navigate('/main');
    //         // }
            
    //     });
    // };

    const onLogin = (data) =>{
        console.log(JSON.stringify(data, null, 2));
        login(data.username, data.password).then(()=>{
            navigate(state?.path || '/main');
        });
    }

    return (
        <Grid container spacing={3}>
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
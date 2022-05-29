import * as React from "react";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo2 from '../resources/Trubbi-sinfondo-blue.png';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl'; 
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const LoginAdmin = () => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (

<Container component="main" maxWidth="xs" sx={{marginTop : '20px'}}>
    <Box
    sx={{ alignItems: 'center', m : 'auto', width : '70%', display: 'flex', flexDirection : 'column' }}
  >
      <img width="200" height="100" src={logo2} alt="Logo" />
      <Typography sx={{textAlign: 'center', paddingBottom : '5px'}}>Administradores</Typography>
      <TextField autoFocus sx={{ marginTop: 2, width:'100%'}}id="outlined-basic" label="Usuario" variant="outlined" />
      <FormControl sx={{ marginTop: 2, width:'100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            />
        </FormControl>

      <Button variant="contained" sx={{marginTop : '15px', width : '100%'}}>Login</Button>
      <Button variant="text" sx={{fontSize : '10px', marginTop : '10px'}}>recuperar contraseña</Button>
        
  </Box>
</Container>
  );
};

export default LoginAdmin;
import * as React from "react";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo2 from '../resources/Trubbi-sinfondo-blue.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function LoginAdmin(props) {
  const handleSubmit = () => {
    console.log("eze");
    props.onLoggedIn(); 
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ alignItems: 'center', display: 'flex', flexDirection : 'column' }} >
        <img width="200" height="100" src={logo2} alt="Logo" />
        <Typography sx={{textAlign: 'center', paddingBottom : '5px'}}>Administradores</Typography>
        <TextField margin="normal" required fullWidth name="email"
            label="Email" id="email" autoFocus />
        <TextField margin="normal" required fullWidth name="password"
          label="Password" type="password" id="password" />
        <Button variant="contained" sx={{marginTop : '15px', width : '100%'}} onClick={handleSubmit}>Login</Button>
        <Button variant="text" sx={{fontSize : '14px', marginTop : '10px'}}>Recuperar Contraseña</Button>            
      </Box>
    </Container>
  );
};
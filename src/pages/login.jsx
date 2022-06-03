import React from 'react'
import { Container, Box, TextField, Button, Link } from '@mui/material';
import logo from '../resources/logo.png';

export default function Login(props) {
  const handleSubmit = () => {
    props.onLoggedIn(); 
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img width="200" height="100" src={logo} alt="Logo" />
        <Box component="form" onSubmit={handleSubmit}>
          <TextField margin="normal" required fullWidth name="email"
            label="Email" id="email" autoFocus />
          <TextField margin="normal" required fullWidth name="password"
            label="Password" type="password" id="password" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
            Ingresar
          </Button>
          <Link href="#" variant="body2">
            Olvide mi Contraseña
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
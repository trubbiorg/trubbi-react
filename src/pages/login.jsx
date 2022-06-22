import React, { useContext } from 'react'
import { Container, Box, TextField, Button, Link, Alert, Snackbar } from '@mui/material';
import logo from '../resources/logo.png';
import { useNavigate } from 'react-router-dom';
import { useStateIfMounted } from 'use-state-if-mounted';
import { AuthContext } from '../helpers/authProvider.js';

export default function Login(props) {
  let navigate = useNavigate();
  const auth = useContext(AuthContext)

  const [result, setResult] = useStateIfMounted();

  async function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');
    props.loading(true);
    const response = await auth.signin({email, password}, () => {
      navigate('/');
    });
    props.loading(false);
    console.log(response);
    setResult(response);
  }

  const showError = () => {
    return (typeof result === String) ? (result.toUpperCase() + result.slice(1)) : ((result[0]) ? result[0].toUpperCase() + result.slice(1) : '');
  }

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar open={(result !== undefined)} autoHideDuration={6000}>
        <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
          {(result) ? showError() : '' }
        </Alert>
      </Snackbar>
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
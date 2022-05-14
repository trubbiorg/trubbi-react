import React from 'react'
import { CssBaseline, Container, Box, TextField, Button, Grid, Link } from '@mui/material';
import logo from '../resources/logo.png';

export default function Login(props) {
  const handleSubmit = () => {
    props.onLoggedIn(); 
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img width="200" height="100" src={logo} alt="Logo" />
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvide mi Contraseña
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
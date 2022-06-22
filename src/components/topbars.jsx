import * as React from 'react'
import { AppBar, Toolbar, MenuItem, Menu, Button  } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../helpers/authProvider.js';
import { useStateIfMounted } from 'use-state-if-mounted';

export function TopBar(props) {
  const auth = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useStateIfMounted(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let navigate = useNavigate();

  const onLoggedOut = () => {
    auth.signout(() => navigate('/'));
  }

  const goProvider = () => {
    navigate('/provider');
  };

  return (
    <AppBar sx={{ backgroundColor: '#3b58ed' }} >
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'white' }}>
              Trubbi
          </Link>
        </Typography>
        <Link to="eventForm" style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{ marginRight: 2 }}>Crear Evento</Button>
        </Link>
        <IconButton onClick={handleMenu} color="inherit">
          <AccountCircle />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} >
          <MenuItem onClick={goProvider} >Mi Perfil</MenuItem>
          <MenuItem onClick={onLoggedOut}>Cerrar Sesion</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export function AdminTopBar(props) {
  const [anchorEl, setAnchorEl] = useStateIfMounted(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let navigate = useNavigate();

  return (
    <AppBar sx={{ backgroundColor: '#3b58ed' }} >
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          <Link to="/admin" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'white' }}>
              Trubbi
          </Link>
        </Typography>
        <Link to="/providerForm" style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{ marginRight: 2 }}>Agregar Proveedor</Button>
        </Link>
        <IconButton onClick={handleMenu} color="inherit">
          <AccountCircle />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} >
          <MenuItem onClick={props.onLoggedOut}>Cerrar Sesion</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
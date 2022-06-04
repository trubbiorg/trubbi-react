import * as React from 'react'
import { AppBar, Toolbar, MenuItem, Menu, Button  } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export function TopBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{ backgroundColor: '#3b58ed' }} >
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
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
          <MenuItem onClick={handleClose}>Mi Perfil</MenuItem>
          <MenuItem onClick={props.onLoggedOut}>Cerrar Sesion</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export function AdminTopBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{ backgroundColor: '#3b58ed' }} >
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
              Trubbi
          </Link>
        </Typography>
        <Link to="providerForm" style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{ marginRight: 2 }}>Agregar Proveedor</Button>
        </Link>
        <IconButton onClick={handleMenu} color="inherit">
          <AccountCircle />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} >
          <MenuItem onClick={handleClose}>Mi Perfil</MenuItem>
          <MenuItem onClick={props.onLoggedOut}>Cerrar Sesion</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
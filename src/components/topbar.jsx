import * as React from 'react'
import { AppBar, Toolbar, MenuItem, Menu } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function TopBar(props) {
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
          Trubbi
        </Typography>
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
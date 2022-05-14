import * as React from 'react'
import { Container, AppBar, Box, Toolbar, MenuItem, Menu, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import logo from '../resources/descarga.jfif';

export default function Home(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const quantity = [0,1,2,3,4,5,6,7,8,9];

  return (    
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#5a49e3' }} >
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Trubbi
            </Typography>
            {props.loggedIn && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Mi Perfil</MenuItem>
                  <MenuItem onClick={props.onLoggedOut}>Cerrar Sesion</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>   
      </Box>
      <Container sx={{ marginTop: 2 }}> 
        <Stack spacing={2}>
          {quantity.map((number) => (
            <Container>
              <Card key={number} sx={{ display: "flex", minWidth: 275 }}>
                <CardContent sx={{paddingBottom: 0 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img style={{ borderRadius: '16px'}} src={logo} alt="Logo" />
                  </Box>
                </CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column' , width: 700 }}>
                  <CardContent sx={{paddingBottom: 0 }}>
                    <Typography variant="h5" component="div">
                      Evento X
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      17/05/2020, Juan B Justo 2725
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: "block", width: "100%" }}>
                    <Button variant="outlined" sx={{ float:"right", marginBottom: 1 }} size="small">Ver Mas</Button>
                    <Button variant="outlined" sx={{ float:"right", marginBottom: 1, marginRight: 2 }} size="small">Modificar</Button>
                  </CardActions>
                </Box>
              </Card>
            </Container>
          ))}
        </Stack>  
      </Container> 
    </Box>
  );
}
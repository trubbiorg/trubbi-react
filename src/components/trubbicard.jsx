import * as React from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import logo from '../resources/descarga.jfif';
import { Link } from 'react-router-dom';

export default function Home(props) {

  return (
    <Card key={props.number} sx={{ display: "flex", minWidth: 275 }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <img style={{ borderRadius: '16px' }} src={logo} alt="Logo" />
        </Box>
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 700 }}>
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography variant="h5" component="div">
            Evento X
          </Typography>
          <Typography sx={{ mb: 1.5 }} style={{fontStyle: "italic"}} color="text.secondary">
            17/05/2020, Juan B Justo 2725
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "block", width: "100%" }}>
          <Link to="opinions"><Button variant="outlined" sx={{ float: "right", marginBottom: 1 }} size="small">Ver Mas</Button></Link>
          <Button variant="outlined" sx={{ float: "right", marginBottom: 1, marginRight: 2 }} size="small">Modificar</Button>
        </CardActions>
      </Box>
    </Card>
  );
}
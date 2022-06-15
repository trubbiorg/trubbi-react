import * as React from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import logo from '../resources/descarga.jfif';
import { Link } from 'react-router-dom';

export default function TrubbiCard(props) {

  const showActive = () => {
    return (
      <Box>
        <Button variant="outlined" color='error' sx={{ float: "right" }} size="small">Eliminar</Button>
        <Link to="eventForm"><Button variant="outlined" sx={{ float: "right", marginRight: 2 }} size="small">Modificar</Button></Link>
      </Box>
    );
  }

  const showFinished = () => {
    return (<Link to="opinions"><Button variant="outlined" sx={{ float: "right", marginRight: 2 }} size="small">Ver Opiniones</Button></Link>);
  }


  return (
    <Card key={props.event} sx={{ display: "flex", minWidth: 275 }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <img style={{ borderRadius: '16px' }} src={logo} alt="Logo" />
        </Box>
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography variant="h5" component="div">
            {props.event.title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            Proveedor: {props.event.provider}
          </Typography>
          <Typography sx={{ mb: 1.5 }} style={{fontStyle: "italic"}} color="text.secondary">
            Latitud: {props.event.latitude} - Longitud: {props.event.longitude}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            {props.event.description}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Comienza: {props.event.start_date} - Finaliza: {props.event.end_date}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "block", width: "100%", marginBottom: 1 }}>
          {(false) ? showActive() : showFinished()}
        </CardActions>
      </Box>
    </Card>
  );
}
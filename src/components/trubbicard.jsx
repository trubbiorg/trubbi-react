import * as React from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import logo from '../resources/descarga.jfif';
import { Link } from 'react-router-dom';
import { format, fromUnixTime, getUnixTime } from 'date-fns'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function TrubbiCard(props) {

  const showActive = () => {
    return (
      <Box>
        <Button variant="outlined" color='error' onClick={() => props.cancelEvent(props.event.id)} sx={{ float: "right" }} size="small">Suspender</Button>
        <Link to={`eventForm/${props.event.id}`}><Button variant="outlined" sx={{ float: "right", marginRight: 2 }} size="small">Modificar</Button></Link>
      </Box>
    );
  }

  const showFinished = () => {
    return (
      <Box>
        <Link to={`events/${props.event.id}/opinions`}><Button variant="outlined"  sx={{ float: "right" }} size="small">Ver Opiniones</Button></Link>
        <Link to={`events/${props.event.id}/tourists`}><Button variant="outlined"  sx={{ float: "right", marginRight: 2 }} size="small">Ver Turistas</Button></Link>
      </Box>
    );
  }

  const showPrivate = () => {
    return (<Button variant="contained" style={{background: 'blue', opacity: 0.6, paddingBlock: 0.5, float: 'right'}} disabled><AttachMoneyIcon sx={{color: 'white'}} /></Button>);
  }

  const isActive = () => {
    if(props.event.start_date >= getUnixTime(new Date()) && props.event.status == 'Activo'){
      return true;
    }
    return false;
  }

  return (
    <Card sx={{ display: "flex", minWidth: 275 }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <img style={{ borderRadius: '16px' }} src={logo /*props.event.photo*/ } alt="Logo" />
        </Box>
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ paddingBottom: 0 }}>
          <Box sx={{display: 'block', width: '100%', height: 'auto'}}>
            <Typography variant="h5" style={{display: 'inline-block'}} component="div">
              {props.event.title}
            </Typography>
            {!props.event.public ? showPrivate() : ''}
          </Box>
          <Typography sx={{ mb: 1.5, display: 'block', width: '100%', height: 'auto' }} style={{fontStyle: "italic"}} color="text.secondary">
            {props.event.address}
          </Typography>
          <Typography sx={{ mb: 1.5, display: 'block' }} color="text.primary">
            {props.event.description}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>{`${format(fromUnixTime(props.event.start_date), 'dd/MM/yyyy HH:mm')}`}</b> - <b>{`${format(fromUnixTime(props.event.end_date), 'dd/MM/yyyy HH:mm')}`}</b>
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "block", width: "100%", marginBottom: 1 }}>
          {(isActive()) ? showActive() : showFinished()}
        </CardActions>
      </Box>
    </Card>
  );
}
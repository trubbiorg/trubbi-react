import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import ProviderProfile from '../pages/providerProfile';


export default function ProviderCard(props){
 

  return (
    <Card number={props.provider} sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.provider.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.provider.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Box>
        <Button size="small">Modificar</Button>
        {/* <ProviderProfile id={ props.provider.id }/> */}
        <Link to={`/providerProfile/`}><Button size="small">Ver más</Button></Link>
        {/* <Link to="/providerProfile"><Button size="small">Ver más</Button></Link> */}
        </Box>      
      </CardActions>
    </Card>
  );
}


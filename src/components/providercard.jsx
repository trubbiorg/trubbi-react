import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProviderCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/150?random=8"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Teatro Núcleo
        </Typography>
            <Typography variant="body2" color="text.secondary">
            contacto@teatronucleo.com.ar
            </Typography>
            <Typography variant="body2" color="text.secondary">
            11 4004 1042 
            </Typography>
        <Typography variant="body2" color="text.secondary">
            Av. Maipú 3143
        </Typography>
            <Typography variant="body2" color="text.secondary">
            Olivos, Vicente López, Buenos Aires 
            </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Modificar</Button>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
  );
}

export default ProviderCard;

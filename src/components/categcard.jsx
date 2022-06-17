import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CategCard(props){
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
        {props.category.name}
        </Typography>
      <CardActions>
        <Button size="small" sx={{ marginLeft: 30 }} style={{ color: 'red' }}>Eliminar</Button>
      </CardActions>
      </CardContent>
    </Card>
    );
}

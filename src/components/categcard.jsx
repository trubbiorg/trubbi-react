import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import genericDataService from '../helpers/genericDataService';
import { useNavigate } from 'react-router-dom';

const categoriesDataService = new genericDataService("/categories");

export default function CategCard(props){

    const navigate = useNavigate();


      const destroy = () => {
        console.log("Llegó")
        categoriesDataService.destroy(props.category.id).then(
          response => response
        ).catch(
          response=>console.log(response.data)
        )
        navigate("/categories")
      }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.category.name}
        </Typography>
      <CardActions>
        <Button size="small" sx={{ marginLeft: 30 }} style={{ color: 'red' }} 
        onClick={destroy} >Eliminar</Button>
      </CardActions>
      </CardContent>
    </Card>
    );
}

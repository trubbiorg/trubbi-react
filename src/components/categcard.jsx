import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import genericDataService from '../helpers/genericDataService';
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";

const categoriesDataService = new genericDataService("/categories");

export default function CategCard(props){

    const navigate = useNavigate();

    const destroy = () => {
        console.log("Llegó")
        categoriesDataService.destroy(props.category.id).then(
          response => {
            navigate("/admin")
            return response
          }
        ).catch(
          response=>console.log(response.data)
        )
        
      }

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.category.name}
        </Typography>
      <CardActions>
        <Grid container justifyContent="right">
          <Button size="small" style={{ color: 'red' }} 
          onClick={destroy} >Eliminar</Button>
        </Grid>
      </CardActions>
      </CardContent>
    </Card>
    );
}

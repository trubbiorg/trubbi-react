import * as React from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import genericDataService from '../helpers/genericDataService';
import { useStateIfMounted } from 'use-state-if-mounted';

const categoriesDataService = new genericDataService("/categories");


export default function CategoryForm() {
  const navigate = useNavigate();

  const [categoryRequest, setCategoryRequest] = useStateIfMounted({});


  const handleChange = (event) => {
    setCategoryRequest({...categoryRequest,[event.target.name]:event.target.value});
    console.log(categoryRequest)
  };

  const onSubmit = () => {
    console.log("Llegó")
    categoriesDataService.store(categoryRequest).then(
      response => {
        navigate("/categories")
        return response
      }
    ).catch(
      response=>console.log(response.data)
    )

  }

return (
    <Paper elevation={3} sx={{ padding: 2}} xs = {8}>
      <Grid container spacing={3} >
        <Grid item xs={12} md={6} >
          <Typography variant="h4">
            Agregar Categoría
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField required id="cardName" label="Nombre" fullWidth
          onChange={handleChange}
          name= "name"
          value= {categoryRequest.name ??""}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" sx={{ float: 'right' }}
          onClick={onSubmit}
          >
            Guardar
          </Button>
          <Button variant="outlined" sx={{ float: 'right', marginRight: 2 }} color="secondary"
          onClick={() => navigate(-1)}>
            Volver
          </Button>

        </Grid>
      </Grid>
    </Paper>
  );
}
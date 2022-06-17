import * as React from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';


export default function CategoryForm() {

return (
    <Paper elevation={3} sx={{ padding: 2}} xs = {8}>
      <Grid container spacing={3} >
        <Grid item xs={12} md={6} >
          <Typography variant="h4">
            Agregar Categoría
          </Typography>
        </Grid>        
        <Grid item xs={12} md={8}>
          <TextField required id="cardName" label="Nombre" fullWidth />
        </Grid>     
        <Grid item xs={12}>     
          <Button variant="outlined" sx={{ float: 'right' }}>Guardar</Button>
          <Button variant="outlined" sx={{ float: 'right', marginRight: 2 }} color="secondary">Volver</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
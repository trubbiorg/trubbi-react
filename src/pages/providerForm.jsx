import * as React from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';


export default function ProviderForm() {
   const [value, setValue] = React.useState({ start: new Date('2014-08-18T21:11:54'), end: new Date('2014-08-18T21:11:54') });
  
    const handleStart = (newValue) => {
      setValue(...value, {start: newValue});
    };
  
    const handleEnd = (newValue) => {
      setValue(...value, {end: newValue});
    };

return (
    <Paper elevation={3} sx={{ padding: 2}} xs = {8}>
      <Grid container spacing={3} >
        <Grid item xs={12} md={6} >
          <Typography variant="h4">
            Agregar Proveedor
          </Typography>
        </Grid>        
        <Grid item xs={12} md={8}>
          <TextField required id="cardName" label="Nombre" fullWidth />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField required id="cardName" label="Email" fullWidth />
        </Grid>        
        <Grid item xs={12} md={8} >
          <TextField required id="cardName" label="Password" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="cardName" label="Descripción" multiline rows={5} fullWidth />
        </Grid>
        <Grid item xs={12}>     
          <Button variant="outlined" sx={{ float: 'right' }}>Guardar</Button>
          <Button variant="outlined" sx={{ float: 'right', marginRight: 2 }} color="secondary">Volver</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
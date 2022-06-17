import React, { useState, useEffect } from 'react'
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import genericDataService from '../helpers/genericDataService'

const providersDataService = new genericDataService("/providers");

export default function ProviderProfile() {

  let {id} = useParams();

  const [provider, setProvider] = useState([]);

  useEffect(()=> {
    providersDataService.show(id,"/providers").then(
      response => setProvider(response.data)
    )
  },[])

  return (
    <Paper elevation={3} sx={{ padding: 2 }} xs={8}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Perfil de {provider.name}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
        <TextField 
          value= {provider.name}
          label= "Nombre"
          InputLabelProps={{ shrink: true }}
          fullWidth 
          InputProps={{
            readOnly: true,
          }}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField 
          label="Email"
          InputLabelProps={{ shrink: true }}
          defaultValue={"Email empresita"} 
          fullWidth 
          InputProps={{ 
            readOnly: true,
          }}/>
        </Grid>
        <Grid item xs={12} md={8}>
        <TextField 
          label= "Estado" 
          InputLabelProps={{ shrink: true }}
          value= {provider.status}
          fullWidth 
          InputProps={{ 
            readOnly: true,
          }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Button variant="contained">Change Password</Button>
        </Grid>

        <Grid item xs={12}>
          <Button variant="outlined" sx={{ float: "right" }}>
            Modificar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

import React, { useState, useEffect } from 'react'
import { Button, Card, Grid, Paper, TextField, Typography, MenuItem } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import genericDataService from '../helpers/genericDataService'
import { ControlPointDuplicate } from '@mui/icons-material';
import { useStateIfMounted } from 'use-state-if-mounted';

const providersDataService = new genericDataService("/providers");

export default function Provider() {

  const navigate = useNavigate();

  const [provider, setProvider] = useStateIfMounted({});

  useEffect(()=> {
    providersDataService.lookup("providers/me").then(
      response => setProvider(response.data.result)
    )
  },[])

  const handleChange = (event) => {};

  return (
    <Card elevation={3} sx={{ padding: 2, width: 800 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Perfil de {provider.name}</Typography>
        </Grid>
        <Grid item xs={12}>
        <TextField
          InputProps={{
            readOnly: true,
          }}
          value= {provider.name}
          label= "Nombre"
          InputLabelProps={{ shrink: true }}
          fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
          label="Email"
          InputLabelProps={{ shrink: true }}
          fullWidth
          onChange={handleChange}
          name= "email"
          value= {provider.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          label="Estado"
          InputLabelProps={{ shrink: true }}
          fullWidth
          onChange={handleChange}
          name="status"
          value= {provider.status}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Button variant="contained">Change Password</Button>
        </Grid> */}
        <Grid item xs={12}>
          <Button variant="outlined"  sx={{ float: "right"  , marginRight: 2 }}
          onClick={() => navigate(-1)}>
              Volver
          </Button>
        </Grid>
        </Grid>
    </Card>
  );
}

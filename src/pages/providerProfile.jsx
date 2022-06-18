import React, { useState, useEffect } from 'react'
import { Button, Grid, Paper, TextField, Typography, MenuItem } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import genericDataService from '../helpers/genericDataService'
import { ControlPointDuplicate } from '@mui/icons-material';

const providersDataService = new genericDataService("/providers");

  
  const providerStatuses = [
    {
      value: 'Esperando aprobacion',
      label: 'Esperando aprobacion',
    },
    {
      value: 'Aprobado',
      label: 'Aprobado',
    },
    {
      value: 'Desaprobado',
      label: 'Desaprobado',
    },
    {
      value: 'Dado de Baja',
      label: 'Dado de Baja',
    },
  ];

export default function ProviderProfile() {

  const navigate = useNavigate();

  const {id} = useParams();

  const [statuses, setstatuses] = React.useState('Esperando aprobacion');

  const [providerRequest, setProviderRequest] = React.useState({});

  useEffect(()=> {
    providersDataService.show(id,"/providers").then(
      response => setProviderRequest(response.data)
      
    )
  },[])

  const handleChange = (event) => {
    setProviderRequest({...providerRequest,[event.target.name]:event.target.value});
    console.log(providerRequest)
  };

  const destroy = () => {
    console.log("Llegó")
    providersDataService.destroy(id).then(
      response => {
        navigate("/admin")
        return response
      }
    ).catch(
      response=>console.log(response.data)
    )
    
  }

  const onSubmit = () => {
    console.log("Llegó")
    console.log(providerRequest)
    providersDataService.update(id, providerRequest).then(
      response => {
        navigate("/admin")
        return response
      }
      ).catch(
        response=>console.log(response.data)
      )
  }

  return (
    <Paper elevation={3} sx={{ padding: 2 }} xs={8}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Perfil de {providerRequest.name}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
        <TextField 
          InputProps={{
            readOnly: true,
          }}
          value= {providerRequest.name}
          label= "Nombre"
          InputLabelProps={{ shrink: true }}
          fullWidth />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField 
          label="Email"
          InputLabelProps={{ shrink: true }}
          fullWidth 
          onChange={handleChange}
          name= "email"
          value= {providerRequest.email}
          />
        </Grid>
        <Grid item xs={12} md={8}>
        <TextField
          id="outlined-select-statuses"
          select
          label="Estado"
          onChange={handleChange}
          helperText="Seleccione el estado"
          name= "status"
          value= {providerRequest.status}
          fullWidth
        >
          {providerStatuses.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={12} md={8}>
          <Button variant="contained">Change Password</Button>
        </Grid>
        <Grid container justifyContent="right">
        <Grid item xs={12}>
        <Button variant="outlined" sx={{ float: "right"}} onClick={onSubmit}>
            Modificar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined"  sx={{ float: "right"  , marginRight: 2 }}
          onClick={() => navigate(-1)}>
              Volver
          </Button>
          </Grid>
          <Grid item xs={12}>
          <Button variant="outlined" sx={{ float: "right"}} style={{ color: 'red' }} onClick={destroy} >Eliminar</Button>
        </Grid>
        </Grid>         
      </Grid>
    </Paper>
  );
}

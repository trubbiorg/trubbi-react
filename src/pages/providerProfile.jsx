import React, { useState, useEffect } from 'react'
import { Button, Grid, Paper, TextField, Typography, MenuItem } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import genericDataService from '../helpers/genericDataService'

const providersDataService = new genericDataService("/providers");


export default function ProviderProfile() {

  const navigate = useNavigate();

  let {id} = useParams();
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
  const [statuses, setstatuses] = React.useState('Dado de Baja');

  const handleStatusChange = (event) => {
    setstatuses(event.target.value);
  };

  const [provider, setProvider] = useState([]);

  useEffect(()=> {
    providersDataService.show(id,"/providers").then(
      response => setProvider(response.data)
    )
  },[])

  const [providerRequest, setProviderRequest] = React.useState({});

  const handleChange = (event) => {
    setProviderRequest({...providerRequest,[event.target.name]:event.target.value});
    console.log(providerRequest)
  };

  const onSubmit = () => {
    console.log("Llegó")
    providersDataService.store(providerRequest).then(
      response => response
    ).catch(
      response=>console.log(response.data)
    )
    navigate("/admin")
  }

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
          fullWidth />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField 
          label="Email"
          InputLabelProps={{ shrink: true }}
          fullWidth 
          onChange={handleChange}
          name= "email"
          value= {providerRequest.email ??""}
          />
        </Grid>
        <Grid item xs={12} md={8}>
        <TextField
          id="outlined-select-statuses"
          select
          label="Select"
          onChange={handleStatusChange}
          helperText="Seleccione el estado"
          name= "name"
          value= {providerRequest.status ??""}
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

        <Grid item xs={12}>
        <Button variant="outlined" sx={{ float: "right"}}>
            Modificar
          </Button>

          <Button variant="outlined"  sx={{ float: "right"  , marginRight: 2 }}
          onClick={() => navigate(-1)}>
              Volver
          </Button>         
        </Grid>
      </Grid>
    </Paper>
  );
}

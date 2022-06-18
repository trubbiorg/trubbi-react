import React, { useState, useEffect } from 'react'
import { Button, Grid, Paper, TextField, Typography, MenuItem } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import genericDataService from '../helpers/genericDataService'
import { ControlPointDuplicate } from '@mui/icons-material';

const providersDataService = new genericDataService("/providers");

<<<<<<< HEAD
  
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
=======
>>>>>>> 61efe9f135ef16bb49a45f6f190558c164afdcd3

export default function ProviderProfile() {

  const navigate = useNavigate();

<<<<<<< HEAD
  const {id} = useParams();

  const [statuses, setstatuses] = React.useState('Esperando aprobacion');
=======
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
>>>>>>> 61efe9f135ef16bb49a45f6f190558c164afdcd3

  const [providerRequest, setProviderRequest] = React.useState({});

  useEffect(()=> {
    providersDataService.show(id,"/providers").then(
      response => setProviderRequest(response.data)
      
    )
  },[])

<<<<<<< HEAD
=======
  const [providerRequest, setProviderRequest] = React.useState({});

>>>>>>> 61efe9f135ef16bb49a45f6f190558c164afdcd3
  const handleChange = (event) => {
    setProviderRequest({...providerRequest,[event.target.name]:event.target.value});
    console.log(providerRequest)
  };

<<<<<<< HEAD
  // const destroy = () => {
  //   console.log("Llegó")
  //   console.log()
  //   providersDataService.destroy(id).then(
  //     response => {
  //       navigate("/admin")
  //       return response
  //     }
  //   ).catch(
  //     response=>console.log(response.data)
  //   )
    
  // }

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
=======
  const onSubmit = () => {
    console.log("Llegó")
    providersDataService.store(providerRequest).then(
      response => response
    ).catch(
      response=>console.log(response.data)
    )
    navigate("/admin")
>>>>>>> 61efe9f135ef16bb49a45f6f190558c164afdcd3
  }

  return (
    <Paper elevation={3} sx={{ padding: 2 }} xs={8}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Perfil de {providerRequest.name}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
        <TextField 
<<<<<<< HEAD
          InputProps={{
            readOnly: true,
          }}
          value= {providerRequest.name}
=======
          value= {provider.name}
>>>>>>> 61efe9f135ef16bb49a45f6f190558c164afdcd3
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
<<<<<<< HEAD
          value= {providerRequest.email}
=======
          value= {providerRequest.email ??""}
>>>>>>> 61efe9f135ef16bb49a45f6f190558c164afdcd3
          />
        </Grid>
        <Grid item xs={12} md={8}>
        <TextField
          id="outlined-select-statuses"
          select
<<<<<<< HEAD
          label="Estado"
          onChange={handleChange}
          helperText="Seleccione el estado"
          name= "status"
          value= {providerRequest.status}
=======
          label="Select"
          onChange={handleStatusChange}
          helperText="Seleccione el estado"
          name= "name"
          value= {providerRequest.status ??""}
>>>>>>> 61efe9f135ef16bb49a45f6f190558c164afdcd3
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
<<<<<<< HEAD
        <Button variant="outlined" sx={{ float: "right"}} onClick={onSubmit}>
=======
        <Button variant="outlined" sx={{ float: "right"}}>
>>>>>>> 61efe9f135ef16bb49a45f6f190558c164afdcd3
            Modificar
          </Button>

          <Button variant="outlined"  sx={{ float: "right"  , marginRight: 2 }}
          onClick={() => navigate(-1)}>
              Volver
          </Button>         
        </Grid>
        <Grid item xs={12}>
        <Button variant="outlined"  sx={{ float: "right"  , marginRight: 2 }}
          onClick={() => navigate(-1)}>
              Volver
          </Button>
          </Grid>
          {/* <Grid item xs={12}>
          <Button variant="outlined" sx={{ float: "right"}} style={{ color: 'red' }} onClick={destroy} >Eliminar</Button>
        </Grid> */}
        </Grid>         
    </Paper>
  );
}

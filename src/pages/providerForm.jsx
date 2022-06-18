import * as React from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import genericDataService from '../helpers/genericDataService';
import GeoAutocomplete from '../components/geoautocomplete.jsx'

const providersDataService = new genericDataService("/providers");

export default function ProviderForm() {

  const navigate = useNavigate();

   const [providerRequest, setProviderRequest] = React.useState({});
  
    const handleChange = (event) => {
      setProviderRequest({...providerRequest,[event.target.name]:event.target.value});
      console.log(providerRequest)
    };

    const onSubmit = () => {
      console.log("Llegó")
      providersDataService.store(providerRequest).then(
        response => {
          navigate("/admin")
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
            Agregar Proveedor
          </Typography>
        </Grid>        
        <Grid item xs={12} md={8}>
          <TextField required label="Nombre" fullWidth 
          onChange={handleChange}
          name= "name"
          value= {providerRequest.name ??""}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField required label="Email" fullWidth 
          onChange={handleChange}
          name= "email"
          value= {providerRequest.email ??""}/>
        </Grid>        
        <Grid item xs={12} md={8} >
          <TextField required label="Password" fullWidth 
          onChange={handleChange}
          name= "password"
          value= {providerRequest.password ??""}
          />
        </Grid>
        <Grid item xs={12}>     
          <Button variant="outlined" sx={{ float: 'right' }}
          onClick={onSubmit}>
            Guardar
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
import React, { Component } from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Autocomplete } from "@react-google-maps/api";
import { useNavigate } from 'react-router-dom';
import GeoAutocomplete from '../components/geoautocomplete';
import Map from '../components/map';
import { render } from "react-dom";
import { withScriptjs } from "react-google-maps";
import genericDataService from '../helpers/genericDataService'

const eventsDataService = new genericDataService("/events");

export default function EventForm() {
  const navigate = useNavigate();

  const [value, setValue] = React.useState({ start: new Date('2014-08-18T21:11:54'), end: new Date('2014-08-18T21:11:54') });

  const [eventsRequest, setEventsRequest] = React.useState({});

  const handleChange = (event) => {
    setEventsRequest({...eventsRequest,[event.target.name]:event.target.value});
    console.log(eventsRequest)
  };

  const handleStart = (newValue) => {
    setValue({...value,start:newValue});
  };

  const handleEnd = (newValue) => {
    setValue({...value, end:newValue });
  };

  const onSubmit = () => {
    console.log("Llegó")
    eventsDataService.store(eventsRequest).then(
      response => {
        navigate("/events")
        return response
      }
    ).catch(
      response=>console.log(response.data)
    )
    
  }

  const MapLoader = withScriptjs(Map);

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">
            Nuevo Evento
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button sx={{ float: 'right' }} variant="outlined" component="label" color="primary">
            <Typography variant="h7" mr={1}>
              Subir Foto
            </Typography>
            <AddAPhotoIcon />
            <input type="file" hidden />
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField required id="cardName" label="Titulo" fullWidth
          onChange={handleChange}
          name= "title"
          value= {eventsRequest.name ??""} />
        </Grid>
        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker label="Inicio" value={value.start} onChange={handleStart}
              renderInput={(params) => <TextField fullWidth {...params} />} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker label="Fin" value={value.end} onChange={handleEnd}
              renderInput={(params) => <TextField required fullWidth {...params} />} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Map />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="cardName" label="Descripcion" multiline rows={5} fullWidth
          onChange={handleChange}
          name= "description"
          value= {eventsRequest.description ??""} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" sx={{ float: 'right' }} onClick={onSubmit}>Guardar</Button>
          <Button variant="outlined" sx={{ float: 'right', marginRight: 2 }} color="secondary">Volver</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
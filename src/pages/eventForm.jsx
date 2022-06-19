import React, {  useState, Component } from "react";
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

  const id = 1
  const imgSeed = randomNumber(1,99)

  const [eventsRequest, setEventsRequest] = useState({ 
    // start: new Date('2014-08-18T21:11:54'), 
    // end: new Date('2014-08-18T21:11:54'), 
    start_date: 123455678,
    end_date: 12344556,
    address: 'calle falsa 123',
    photo: `https://picsum.photos/150?random=${randomNumber(1,99)}`,
    longitude: 123,
    latitude: 123,
    public: true,
    categoriesIds:[1, 2],
    description:'The Description',
    providerId: id
   });

  const handleChange = (event) => {
    setEventsRequest({...eventsRequest,[event.target.name]:event.target.value});
  };

  const handleStart = (neweventsRequest) => {
    setEventsRequest({...eventsRequest,start:neweventsRequest});
  };

  const handleEnd = (neweventsRequest) => {
    setEventsRequest({...eventsRequest, end:neweventsRequest });
  };

  const onSubmit = () => {
    console.log("Llegó")
    console.log(eventsRequest)
    eventsDataService.store(eventsRequest).then(
      response => {
        navigate("/")
        return response
      }
    ).catch(
      response=>console.log(`catch ${response}`)
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
        <TextField required label="Título" fullWidth 
          onChange={handleChange}
          name= "title"
          value= {eventsRequest.title}
          />
        </Grid>

        <Grid item xs={12} md={4} >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker label="Inicio" eventsRequest={eventsRequest.start} onChange={handleStart} 
              renderInput={(params) => <TextField  required fullWidth {...params} />} />
          </LocalizationProvider >
        </Grid>

        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker label="Fin" eventsRequest={eventsRequest.end} onChange={handleEnd}
              renderInput={(params) => <TextField required  fullWidth {...params} />} />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12}>
          <Map />
        </Grid>

        <Grid item xs={12}>
          <TextField required id="cardName" label="Descripción" multiline rows={5} fullWidth
          onChange={handleChange}
          name= "description"
          value= {eventsRequest.description}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="outlined" sx={{ float: 'right' }} onClick={onSubmit}>Guardar</Button>
          <Button variant="outlined" sx={{ float: 'right', marginRight: 2 }} color="secondary">Volver</Button>
        </Grid>
      </Grid>
    </Paper>
  );

  function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 
}
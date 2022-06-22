import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Button, FormControl, Grid, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useNavigate, useParams } from "react-router-dom";
import Places from "../components/map";
import { useStateIfMounted } from 'use-state-if-mounted';
import genericDataService from "../helpers/genericDataService";
import MultipleSelectChip from '../components/multipleSelectChip'
import { fromUnixTime, getUnixTime } from "date-fns";
import { useEffect } from "react";

const eventsDataService = new genericDataService("/events");

export default function EventForm(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [eventRequest, setEventRequest] = useStateIfMounted({
    title: '',
    description: '',
    providerId: 1,
    address: '',
    categoriesIds: [],
    categories: [],
    latitude: 0,
    longitude: 0,
    photo: 'torneodefutbol',
    start_date: getUnixTime(new Date()),
    end_date: getUnixTime(new Date()),
    startDate: new Date(),
    endDate: new Date(),
    public: true
  });

  useEffect(() => {
    props.loading(true);
    if(id){
      eventsDataService
        .show(id)
        .then((response) => {
          let data = response.data;
          data.startDate = fromUnixTime(data.start_date);
          data.endDate = fromUnixTime(data.end_date);
          data.categoriesIds = data.categories.map(category => category.id);
          data.providerId = data.provider.id;
          data.latlng = { lat: "-34.56268660070425", lng:"-58.471121915344526" }
          setEventRequest(data);
          console.log(data);
        }).catch((error) => {
          if(error.response.status === 401){
            localStorage.clear();
          }
        }).finally(() => {
          props.loading(false);
        });
    }
  }, [])

  const handleChange = (event) => {
    setEventRequest({ ...eventRequest, [event.target.name]: event.target.value });
  };

  const handleStart = (start_date) => {
    setEventRequest({ ...eventRequest, startDate: start_date });
  };

  const handleEnd = (end_date) => {
    setEventRequest({ ...eventRequest, endDate: end_date });
  };

  const handleAddress = (address, latLng) => {
    setEventRequest({ ...eventRequest, latlng: latLng, address: address });
  };

  const onSubmit = () => {
    props.loading(true);
    eventRequest.categoriesIds = eventRequest.categories.map(category => category.id)
    eventRequest.start_date = getUnixTime(eventRequest.startDate);
    eventRequest.end_date = getUnixTime(eventRequest.endDate);
    eventRequest.latitude = eventRequest.latlng.lat;
    eventRequest.longitude = eventRequest.latlng.lng;
    if(id){
      eventsDataService
        .update(id, eventRequest)
        .then((response) => {
          navigate("/");
        }).catch((error) => {
          if(error.response.status === 401){
            localStorage.clear();
          }
        }).finally(() => {
          props.loading(false);
        });
    }
    else{
      eventsDataService
        .store(eventRequest)
        .then((response) => {
          navigate("/");
        }).catch((error) => {
          if(error.response.status === 401){
            localStorage.clear();
          }
        }).finally(() => {
          props.loading(false);
        });
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Nuevo Evento</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button sx={{ float: "right" }} variant="outlined" component="label" color="primary">
            <Typography variant="h7" mr={1}>
              Subir Foto
            </Typography>
            <AddAPhotoIcon />
            <input type="file" hidden />
          </Button>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField required label="Título" fullWidth onChange={handleChange} name="title" value={eventRequest.title ?? ""} />
        </Grid>

        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker label="Inicio" value={eventRequest.startDate} onChange={handleStart} renderInput={(params) => <TextField required fullWidth {...params} />} />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker label="Fin" value={eventRequest.endDate} onChange={handleEnd} renderInput={(params) => <TextField required fullWidth {...params} />} />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} md={12}>
          <MultipleSelectChip loading={props.loading} setEventRequest={setEventRequest} eventRequest={eventRequest} />
        </Grid>

        <Grid item xs={12}>
          <Places handleAddress={handleAddress} eventRequest={eventRequest} />
        </Grid>

        <Grid item xs={9}>
          <TextField required id="cardName" label="Descripción" multiline rows={2} fullWidth onChange={handleChange} name="description" value={eventRequest.description ?? ""} />
        </Grid>

        <Grid item xs={3}>
          <FormControl fullWidth>
            <Select name="public" value={eventRequest.public} onChange={handleChange} >
              <MenuItem value={true}>Publico</MenuItem>
              <MenuItem value={false}>Privado</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button variant="outlined" sx={{ float: "right" }} onClick={onSubmit}>
            Guardar
          </Button>
          <Button variant="outlined" sx={{ float: "right", marginRight: 2 }} onClick={() => navigate(-1)}>
            Volver
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

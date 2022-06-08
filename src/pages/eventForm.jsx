import * as React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Autocomplete } from "@react-google-maps/api";
import GeoAutocomplete from '../components/geoautocomplete';
import Map from '../components/map';

export default function EventForm() {
  const [value, setValue] = React.useState({ start: new Date('2014-08-18T21:11:54'), end: new Date('2014-08-18T21:11:54') });

  const handleStart = (newValue) => {
    setValue(...value, {start: newValue});
  };

  const handleEnd = (newValue) => {
    setValue(...value, {end: newValue});
  };

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
        <Grid item xs={12} md={3}>
          <TextField required id="cardName" label="Titulo" fullWidth />
        </Grid>
        <Grid item xs={12} md={3}>
          <Autocomplete>
          <GeoAutocomplete/>
            </Autocomplete>
        </Grid>
        <Grid item xs={12} md={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker label="Inicio" value={value.start} onChange={handleStart}
              renderInput={(params) => <TextField fullWidth {...params} />} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker label="Fin" value={value.end} onChange={handleEnd}
              renderInput={(params) => <TextField required fullWidth {...params} />} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Map />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="cardName" label="Descripcion" multiline rows={5} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" sx={{ float: 'right' }}>Guardar</Button>
          <Button variant="outlined" sx={{ float: 'right', marginRight: 2 }} color="secondary">Volver</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Alert, Pagination, Stack, Card, CardContent, Typography } from '@mui/material';
// import TouristCard from '../components/touristcard'
import genericDataService from '../helpers/genericDataService';
import { useParams } from 'react-router-dom';
import { useStateIfMounted } from 'use-state-if-mounted';

const eventsDataService = new genericDataService("/events");

export default function Tourists(props) {

  let {id} = useParams();

  const [tourists, setTourists] = useStateIfMounted([])

  useEffect(() => {
    props.loading(true);
    eventsDataService.lookup(`events/${id}/tourists`).then(response => {
      console.log(response.data);
      setTourists(response.data)
    }).catch((error) => {
      if(error.response.status === 401){
        localStorage.clear();
      }
    }).finally(() => {
      props.loading(false);
    });
  }, [])

  const showNoTourists = () => <Alert sx={{"& .MuiAlert-icon": {fontSize: 30},".MuiAlert-message": {fontSize: "1.25rem"}}} severity="info">No se encontraron Touristes</Alert>

  return (
    <Stack spacing={2}>
      {tourists.map(tourist => (
        <Card sx={{ display: "flex", minWidth: 275 }}>
          <CardContent sx={{ paddingBottom: 0 }}>
            <Typography variant="h5" style={{display: 'inline-block'}} component="div">
              {tourist.name}
            </Typography>
          </CardContent>
        </Card>
        // <TouristCard key={tourist.id} tourist={tourist} />
      ))}
      {(tourists.length <= 0) ? showNoTourists() : ""}
    </Stack>
  );
}
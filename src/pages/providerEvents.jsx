import React, { useState, useEffect } from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppMenu from "../components/appmenu";
import Button from '@mui/material/Button';
import CategCard from '../components/categcard'
import genericDataService from '../helpers/genericDataService';
import TrubbiCard from '../components/trubbicard'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const providerEventsDataService = new genericDataService("/providers");

export default function ProviderEvents(props) {

    const [thisProviderEvents,setEvents] = useState([])
    let {id} = useParams();
    useEffect(()=> {
        providerEventsDataService.lookup(`providers/${id}/events`).then(
          response => setEvents(response.data)
        )
      },[])

      return (
        <Box sx={{ flexGrow: 1 }}>           
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {thisProviderEvents.map((events) => (
            <Grid item xs={2} sm={4} md={4} key={events}>
              <TrubbiCard event={events} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
};
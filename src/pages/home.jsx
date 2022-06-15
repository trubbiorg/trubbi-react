import React, { useState, useEffect } from 'react'
import { Stack } from '@mui/material';
import TrubbiCard from '../components/trubbicard'
import genericDataService from '../helpers/genericDataService';

const eventsDataService = new genericDataService("/events");

export default function Home(props) {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventsDataService.index().then(
      response => setEvents(response.data)
    );
  }, []) // GET localhost:3060/events

  return (
    <Stack spacing={2}>
      {events.map((event) => (
        <TrubbiCard event={event} />
      ))}
    </Stack>
  );
}
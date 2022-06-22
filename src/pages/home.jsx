import React, { useEffect } from 'react'
import { Alert, Stack } from '@mui/material';
import TrubbiCard from '../components/trubbicard'
import genericDataService from '../helpers/genericDataService';
import Pagination from '@mui/material/Pagination';
import { useStateIfMounted } from 'use-state-if-mounted';

const providersDataService = new genericDataService("/providers");
const eventsDataService = new genericDataService("/events");

export default function Home(props) {
  const [events, setEvents] = useStateIfMounted([]);

  const [totalPages, setTotalPages] = useStateIfMounted(1);

  const [page, setPage] = useStateIfMounted(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    props.loading(true);
    providersDataService.lookup(`events/provider?offset=${10*(page-1)}`).then(
      response => {
        setEvents(response.data.result.events);
        setTotalPages(response.data.result.totalPages);
      }
    ).catch((error) => {
      if(error.response.status === 401){
        localStorage.clear();
      }
    }).finally(() => {
      props.loading(false);
    });
  }, [page])

  const cancelEvent = (eventId) => {
    props.loading(true);
    eventsDataService.destroy(eventId).then(
      response => {
        setEvents(events.filter(event => event.id !== eventId));
      }
    ).catch((error) => {
      if(error.response.status === 401){
        localStorage.clear();
      }
    }).finally(() => {
      props.loading(false);
    });
  }

  const showPagination = () => <Pagination count={totalPages} page={page} onChange={handleChange} variant="outlined" color="primary" />

  const showNoEvents = () => <Alert sx={{"& .MuiAlert-icon": {fontSize: 30},".MuiAlert-message": {fontSize: "1.25rem"}}} severity="info">No se encontraron eventos</Alert>

  return (
    <Stack spacing={2}>
      {events.map(event => (
        <TrubbiCard key={event.id} cancelEvent={cancelEvent} event={event} />
      ))}
      {(events.length > 0) ? showPagination() : showNoEvents()}
    </Stack>
  );
}
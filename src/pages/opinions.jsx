import * as React from 'react'
import { useState, useEffect } from 'react'
import { Alert, Pagination, Stack } from '@mui/material';
import OpinionCard from '../components/opinioncard'
import genericDataService from '../helpers/genericDataService';
import { useParams } from 'react-router-dom';
import { useStateIfMounted } from 'use-state-if-mounted';

const opinionsDataService = new genericDataService("/opinions");

export default function Opinions(props) {

  let {id} = useParams();

  const [opinions, setOpinions] = useStateIfMounted([])

  const [totalPages, setTotalPages] = useStateIfMounted(1);

  const [page, setPage] = useStateIfMounted(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    props.loading(true);
    opinionsDataService.lookup(`opinions/event/${id}`).then(response => {
      console.log(response.data.result.opinions);
        setOpinions(response.data.result.opinions)
        setTotalPages(response.data.result.totalPages)
    }).catch((error) => {
      if(error.response.status === 401){
        localStorage.clear();
      }
    }).finally(() => {
      props.loading(false);
    });
  }, [page])

  const showPagination = () => <Pagination count={totalPages} page={page} onChange={handleChange} variant="outlined" color="primary" />

  const showNoOpinions = () => <Alert sx={{"& .MuiAlert-icon": {fontSize: 30},".MuiAlert-message": {fontSize: "1.25rem"}}} severity="info">No se encontraron Opiniones</Alert>

  return (
    <Stack spacing={2}>
      {opinions.map(opinion => (
        <OpinionCard key={opinion.id} opinion={opinion} />
      ))}
      {(opinions.length > 0) ? showPagination() : showNoOpinions()}
    </Stack>
  );
}
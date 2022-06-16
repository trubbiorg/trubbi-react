import * as React from 'react'
import { useState, useEffect } from 'react'
import { Stack } from '@mui/material';
import OpinionCard from '../components/opinioncard'
import genericDataService from '../helpers/genericDataService';
import { useParams } from 'react-router-dom';


const eventsDataService = new genericDataService("/events");

export default function Opinions(props) {

  let {id} = useParams();

  const [opinions, setOpinions] = useState([])

  useEffect(() => {   
    eventsDataService.show(id,"/opinions").then(
      response => setOpinions(response.data)
    );
  }, [])
  const quantity = [0, 1, 2];

  return (
    <Stack spacing={2}>
      {opinions.map((opinion) => (
        <OpinionCard props={opinion} />
      ))}
    </Stack>
  );
}
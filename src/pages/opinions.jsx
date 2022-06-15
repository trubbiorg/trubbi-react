import * as React from 'react'
import { Stack } from '@mui/material';
import OpinionCard from '../components/opinioncard'
import { useParams } from 'react-router-dom';

export default function Opinions(props) {

  let {id} = useParams();
  const quantity = [0, 1, 2];

  return (
    <Stack spacing={2}>
      {quantity.map((number) => (
        <OpinionCard number={number} />
      ))}
    </Stack>
  );
}
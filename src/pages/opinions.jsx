import * as React from 'react'
import { Stack } from '@mui/material';
import OpinionCard from '../components/opinioncard'

export default function Opinions(props) {

  const quantity = [0, 1, 2];

  return (
    <Stack spacing={2}>
      {quantity.map((number) => (
        <OpinionCard number={number} />
      ))}
    </Stack>
  );
}
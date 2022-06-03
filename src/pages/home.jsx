import * as React from 'react'
import { Stack } from '@mui/material';
import TrubbiCard from '../components/trubbicard'

export default function Home(props) {

  const quantity = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Stack spacing={2}>
      {quantity.map((number) => (
        <TrubbiCard number={number} />
      ))}
    </Stack>
  );
}
import React, { useState, useEffect } from 'react'
import CardProviders from "../components/providercard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import genericDataService from '../helpers/genericDataService';

const providersDataService = new genericDataService("/providers");

export default function AdminHome(props) {
  const [providers,setProviders] = useState([])


  useEffect(()=> {
    providersDataService.index().then(
      response => setProviders(response.data)
    )
  },[])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {providers.map((provider) => (
          <Grid item xs={2} sm={4} md={4} key={provider}>
            <CardProviders provider={provider} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
import React, { useState, useEffect } from 'react'
import CardProviders from "../components/providercard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import genericDataService from '../helpers/genericDataService';
import { Alert, Stack } from '@mui/material';
import { useStateIfMounted } from 'use-state-if-mounted';

const providersDataService = new genericDataService("/providers");

export default function AdminHome(props) {
  const [providers, setProviders] = useStateIfMounted([]);

  useEffect(() => {
    props.loading(true);
    providersDataService.index().then(
      response => {
        setProviders(response.data.result);
      }
    ).catch((error) => {
      if(error.response.status === 401){
        localStorage.clear();
      }
    }).finally(() => {
      props.loading(false);
    });
  }, [])

  const aprove = (providerId) => {
    props.loading(true);
    providersDataService.patch(`providers/${providerId}/status?newStatus=Aprobado`).then(
      response => {
        setProviders(providers.map(provider => {
          if (provider.id === providerId){
            provider.status = "Aprobado"
          }
          return provider;
        }));
      }
    ).catch((error) => {
      if(error.response.status === 401){
        localStorage.clear();
      }
    }).finally(() => {
      props.loading(false);
    });
  }

  const showNoProviders = () => <Alert sx={{"& .MuiAlert-icon": {fontSize: 30},".MuiAlert-message": {fontSize: "1.25rem"}}} severity="info">No se encontraron Proveedores</Alert>

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
      {providers.map((provider) => (
        <Grid item xs={2} sm={4} md={4} key={provider}>
          <CardProviders key={provider.id} aprove={aprove} provider={provider} />
        </Grid>
      ))}
      {(providers.length <= 0) ? showNoProviders() : ""}
    </Grid>
  );
};
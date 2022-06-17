import React, { useState, useEffect } from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppMenu from "../components/appmenu";
import Typography from '@mui/material/Typography';
import CategCard from '../components/categcard'
import genericDataService from '../helpers/genericDataService';

const categoriesDataService = new genericDataService("/categories");

export default function AdminCategories() {

    const [categories,setCategories] = useState([])

    useEffect(()=> {
        categoriesDataService.index().then(
          response => setCategories(response.data)
        )
      },[])

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
      {categories.map((category) => (
        <Grid item xs={2} sm={4} md={4} key={category}>
          <CategCard category={category} />
        </Grid>
      ))}
    </Grid>
  </Box>
  );
};
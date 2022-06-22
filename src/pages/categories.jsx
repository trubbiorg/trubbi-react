import React, { useState, useEffect } from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppMenu from "../components/appmenu";
import Button from '@mui/material/Button';
import CategCard from '../components/categcard'
import genericDataService from '../helpers/genericDataService';
import { Link } from 'react-router-dom';
import { useStateIfMounted } from 'use-state-if-mounted';

const categoriesDataService = new genericDataService("/categories");

export default function AdminCategories() {

    const [categories,setCategories] = useStateIfMounted([])

    useEffect(()=> {
        categoriesDataService.index().then(
          response => setCategories(response.data)
        )
      },[])

      return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center">
                <Link to="categoryForm" style={{ textDecoration: 'none' }}>
                    <Button variant="contained"
                    sx={{ marginRight: 2, marginBottom: 5 }}>
                        Agregar Categoría
                    </Button>
                </Link>
            </Grid>

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
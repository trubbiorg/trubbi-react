import * as React from "react";
import CardProviders from "../components/providercard";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppMenu from "../components/appmenu";

const Providers = () => {
  const quantity = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppMenu />
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {quantity.map((num) => (
              <Grid item xs={2} sm={4} md={4} key={num}>
                <CardProviders number={num} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Providers;

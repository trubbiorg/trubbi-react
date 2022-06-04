import * as React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

export default function ProviderProfile() {
  const [value, setValue] = React.useState({
    start: new Date("2014-08-18T21:11:54"),
    end: new Date("2014-08-18T21:11:54"),
  });

  return (
    <Paper elevation={3} sx={{ padding: 2 }} xs={8}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Mi perfil</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            label="Nombre"
            defaultValue={"Nombre empresita"}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField label="Email" defaultValue={"Email empresita"} fullWidth />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField label="Status" defaultValue={"Activo"} fullWidth />
        </Grid>
        <Grid item xs={12} md={8}>
          <Button variant="contained">Change Password</Button>
        </Grid>

        <Grid item xs={12}>
          <Button variant="outlined" sx={{ float: "right" }}>
            Modificar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

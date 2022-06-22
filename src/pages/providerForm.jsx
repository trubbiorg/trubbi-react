import * as React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import genericDataService from "../helpers/genericDataService";
import { useStateIfMounted } from "use-state-if-mounted";

const providersDataService = new genericDataService("/providers");

export default function ProviderForm(props) {
  const navigate = useNavigate();

  const [providerRequest, setProviderRequest] = useStateIfMounted({});

  const handleChange = (event) => {
    setProviderRequest({ ...providerRequest, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    props.loading(true);
    providersDataService
      .store(providerRequest)
      .then((response) => navigate("/admin"))
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.clear();
        }
      })
      .finally(() => {
        props.loading(false);
      });
  };

  return (
    <Paper elevation={3} sx={{ padding: 2 }} xs={8}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Agregar Proveedor</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField required label="Nombre" fullWidth onChange={handleChange} name="name" value={providerRequest.name ?? ""} />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField required label="Email" fullWidth onChange={handleChange} name="email" value={providerRequest.email ?? ""} />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField required label="Password" fullWidth onChange={handleChange} name="password" value={providerRequest.password ?? ""} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" sx={{ float: "right" }} onClick={onSubmit}>
            Guardar
          </Button>
          <Button variant="outlined" sx={{ float: "right", marginRight: 2 }} onClick={() => navigate(-1)}>
            Volver
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Grid from "@mui/material/Grid";




export default function ProviderCard(props){

  const showAproveButton = () => {
    return (
      <Button variant="outlined" onClick={() => props.aprove(props.provider.id)} sx={{ float: "right" }} size="small">Aprobar</Button>
    );
  }

  return (
    <Card number={props.provider} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.provider.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.provider.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Box>
          <Grid container justifyContent="right">
            {/* <Link to={`providerEvents/${props.provider.id}`} style={{ textDecoration: 'none' }}>
              <Button variant="clear">Ver eventos</Button>
            </Link> */}
            {(props.provider.status === 'Esperando aprobacion') ? showAproveButton() : ''}
          </Grid>
        </Box>
      </CardActions>
    </Card>
  );
}


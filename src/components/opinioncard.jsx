import * as React from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import logo from '../resources/descarga.jfif';

export default function Home(props) {

  return (
    <Card key={props.number} sx={{ display: "flex", minWidth: 275 }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <img style={{ borderRadius: '16px' }} src={logo} alt="Logo" />
        </Box>
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 700 }}>
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography variant="h5" component="div">
              Titulo de la opinion
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </Typography>
          <Typography sx={{ mb: 1.5 }} style={{fontStyle: "italic"}} color="text.secondary">
            <strong>Nombre del evento</strong>, 17/05/2020, Juan B Justo 2725
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
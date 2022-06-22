import * as React from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import logo from '../resources/descarga.jfif';
import { format, fromUnixTime } from 'date-fns';

export default function Home(props) {

  return (
    <Card sx={{ display: "flex", minWidth: 275 }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>
          <img style={{ borderRadius: '16px' }} src={logo} alt="Logo" />
        </Box>
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 700 }}>
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography variant="h5" component="div">
              { props.opinion.title }
          </Typography>
          <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
            { props.opinion.description }
          </Typography>
          <Typography sx={{ mb: 1.5, mt: 1.5 }} style={{fontStyle: "italic"}} color="text.secondary">
            <strong>{ props.opinion.touristEvent.event.title }</strong> {`${format(fromUnixTime(props.opinion.touristEvent.event.start_date), 'dd/MM/yyyy HH:mm')}`}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
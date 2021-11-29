import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Device } from '../../models/device';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';

import '../../index.css';

function CardView(props: any) {

  return (
    <Grid container>
      {
        props.data.map((device: Device) => (
            <Grid key={device.deviceId} container item xs={12} md={4} className="my-2">
              <Card sx={{ width: '95%' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {device.deviceModel}
                  </Typography>
                  <Grid container item xs={12} direction="row" justifyContent="space-between">
                    <Typography variant="h5" component="div">
                      {device.deviceName}
                    </Typography>
                    {device.active && <Chip label="Active" color="success" size="small" />}
                    {!device.active && <Chip label="InActive" color="error" size="small" />}
                  </Grid>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {new Date(device.createdAt).toDateString()}
                  </Typography>
                    <Typography variant="body2">
                      Zipcode.
                      <br />
                      {device.zipCode}
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Link to={`/devices/${device.deviceId}`}>More details</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        )
      }
    </Grid>
  )
}

export default CardView

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';

function DeviceCard(props: any) {
  const device = props.device
  return (
    <Card sx={{ width: "95%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {device.deviceModel}
        </Typography>
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant="h5" component="div">
            {device.deviceName}
          </Typography>
          <FormControlLabel
            className="pointer"
            control={
              <Switch
                checked={device.active}
                onChange={() =>
                  props.toggleActive()
                }
                color={device.active ? "success" : "default"}
              />
            }
            label={device.active ? "Active" : "InActive"}
          />
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
  );
}

export default DeviceCard;

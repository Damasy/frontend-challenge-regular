import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { Device } from '../../models/device';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import TablePagination from '@mui/material/TablePagination';

import '../../index.css';

function CardView(props: any) {

  let devices = props.data;

  let [checked, setCheck] = React.useState(false);
  devices = devices.filter((device: Device) => device.deviceName.includes(props.searchTerm));
  
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  devices = devices.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
    devices = devices.slice((newPage - 1) * rowsPerPage, newPage * rowsPerPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleActiveStateChange = (deviceId: string, newState: boolean) => {
    props.toggleActive(deviceId, newState);
  }

  return (
    <React.Fragment>
      <Grid container>
        {
          // setCheck(device.active);
          devices.map((device: Device) => {
            return (
              <Grid key={device.deviceId} container item xs={12} md={4} className="py-2">
                <Card sx={{ width: '95%' }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {device.deviceModel}
                    </Typography>
                    <Grid container item xs={12} direction="row" justifyContent="space-between">
                      <Typography variant="h5" component="div">
                        {device.deviceName}
                      </Typography>
                      <FormControlLabel 
                        control={ 
                          <Switch
                            checked={device.active}
                            onChange={() => props.toggleActive(device.deviceId, !device.active)}
                            color={device.active ? "success" : 'default'}/>
                        }
                        label={device.active ? 'Active' : 'InActive'}
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
              </Grid>
            )}
          )
        }
      </Grid>
      <Grid container className="py-2" direction="row" justifyContent="center">
        <TablePagination
          component="div"
          count={props.data.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </React.Fragment>
  )
}

export default CardView

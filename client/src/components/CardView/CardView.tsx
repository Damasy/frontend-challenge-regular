import React from 'react';

import { Device } from '../../models/device';
import Grid from '@mui/material/Grid';
import TablePagination from '@mui/material/TablePagination';

import '../../index.css';
import DeviceCard from './Card';

function CardView(props: any) {

  let devices = props.data;

  devices = devices.filter((device: Device) => device.deviceName.includes(props.searchTerm));
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  devices = devices.slice((page) * rowsPerPage, (page + 1) * rowsPerPage);
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

  const toggleState = (deviceId: string, state: boolean) => {
    props.toggleActive(deviceId, state);
  }

  return (
    <React.Fragment>
      {/* cards  */}
      <Grid container data-testid="cards">
        {
          // setCheck(device.active);
          devices.map((device: Device) => {
            return (
              <Grid key={device.deviceId} container item xs={12} md={4} className="py-2">
                <DeviceCard device={device} toggleActive={() => toggleState(device.deviceId, !device.active)} />
              </Grid>
            )}
          )
        }
      </Grid>
      {/* pagination */}
      {
        props.data.length &&
        <Grid container className="py-2" direction="row" justifyContent="center" data-testid="pagination">
          <TablePagination
            component="div"
            count={props.data.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      }
    </React.Fragment>
  )
}

export default CardView

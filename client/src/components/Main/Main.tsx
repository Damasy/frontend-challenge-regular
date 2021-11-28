import React, { Component } from 'react';
import BreadCrumb from '../core/Breadcrumb/Breadcrumb';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import TableView from '../TableView/TableView';
import CardView from '../CardView/CardView';
import Divider from '@mui/material/Divider';
import { MainPageState } from './types';

class Main extends Component {

  state: MainPageState = {
    breadCrumbs: [
      {
        title: 'Main',
        pathname: '/'
      }
    ],
    devices: []
  };

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        {/* <BreadCrumb breadCrumbs={this.state.breadCrumbs} /> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input type="text" placeholder="search with device name" />
            {/* <Autocomplete
              id="search-devices"
              freeSolo
              disableClearable
              options={this.state.devices.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label="searchDevices" />}
            /> */}
          </Grid>
          <Divider variant="middle" />
          <Grid item xs={12} md={6}>
            Devices
          </Grid>
          <Grid item xs={12} md={3}>
            <Icon>grid_view</Icon>
            <Icon>table_rows</Icon>
          </Grid>
          <Grid item xs={12} md={3}>
            Total: 20
          </Grid>
        </Grid>
        <TableView />
        <CardView />
      </React.Fragment>
    );
  }
}

export default Main;
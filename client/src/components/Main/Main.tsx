import React, { Component } from 'react';
import BreadCrumb from '../core/Breadcrumb/Breadcrumb';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import TableView from '../TableView/TableView';
import CardView from '../CardView/CardView';
import Divider from '@mui/material/Divider';
import { MainPageState } from './types';
import {connect} from 'react-redux';

import '../../index.css';
import Navbar from '../core/Navbar/Navbar';

import { handleGetAll, handleToggleState, handleListViewToggle } from '../../redux/actions/device';
import { Device } from '../../models/device';

class Main extends Component <any, any> {
  state: MainPageState = {
    breadcrumbs: [
      {
        title: "Main",
        pathname: "/",
      },
      {
        title: "Devices",
        pathname: "/devices",
      },
    ],
    devices: [],
    listView: false,
    searchTerm: ''
  };

  componentDidMount() {
    this.props.handleGetAll();
  }

  handeleSearch = (term: string | null) => {
    console.log(term, 'search is starting...')
    this.setState({searchTerm: term});
  }

  toggleView = (bool: Boolean) => {
    // this.setState({ listView: bool });
    this.props.handleListViewToggle(bool);
  };

  toggleActiveProp = (deviceId: string, bool: boolean) => {
    console.log(bool, ' active state is here for:: ', deviceId);
    this.props.handleToggleState(deviceId, bool);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container maxWidth="lg" className="py-4">
          <BreadCrumb breadcrumbs={this.state.breadcrumbs} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                id="search-devices"
                onChange={(event: any, searchTerm: any) => {
                  this.handeleSearch(searchTerm);
                }}
                options={Array.from(new Set(this.props.devices.data.map((option: Device) => option.deviceName)))}
                renderInput={(params) => (
                  <TextField {...params} label="search with device name" />
                )}
              />
            </Grid>
          </Grid>
          <Divider variant="middle" className="py-2" />
          <Grid container className="py-2">
            <Grid item xs={12} md={8}>
              <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                Devices
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              item
              xs={12}
              md={4}
              justifyContent="flex-end"
            >
              <Icon color={!this.props.devices.listView ? "primary" : 'action'} onClick={() => this.toggleView(false)}>grid_view</Icon>
              <Icon color={this.props.devices.listView ? "primary" : 'action'} onClick={() => this.toggleView(true)}>table_rows</Icon>
            </Grid>
          </Grid>
          <div className="pb-3">
            {this.props.devices.listView &&
            <TableView
            toggleActive={this.toggleActiveProp}
            data={this.props.devices.data}
            searchTerm={this.state.searchTerm || ''} />}
            {!this.props.devices.listView &&
            <CardView
            toggleActive={this.toggleActiveProp}
            data={this.props.devices.data}
            searchTerm={this.state.searchTerm || ''} />}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: MainPageState) => {
  return {
      devices: state.devices
  }
};

export default connect(mapStateToProps, {
  handleGetAll,
  handleToggleState,
  handleListViewToggle
})(Main);
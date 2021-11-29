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

import '../../index.css';
import Navbar from '../core/Navbar/Navbar';

class Main extends Component {
  state: MainPageState = {
    breadcrumbs: [
      {
        title: "Main",
        pathname: "/",
      },
    ],
    devices: [
      {
        deviceId: "077c8ac2-a43b-4afd-9b34-6218a62afa60",
        createdAt: "2021-04-11T14:20:33.451Z",
        updatedAt: "2021-11-10T06:13:11.381Z",
        deviceName: "electric_scooter",
        deviceModel: "acme_em_v1.1.33",
        location: { lat: "-0.6552", lon: "101.9106" },
        measurementModels: [
          { name: "open", type: "boolean", unit: "", min: 0, max: 1 },
        ],
        measurements: [
          [
            [0, "2021-05-25T17:40:51.193Z"],
            [0, "2021-07-09T18:26:30.534Z"],
            [0, "2021-07-25T04:48:29.631Z"],
            [0, "2021-09-18T09:53:42.567Z"],
            [1, "2021-09-22T20:39:01.730Z"],
            [0, "2021-11-10T01:36:21.817Z"],
          ],
        ],
        active: true,
        zipCode: "73234",
        metadata: { array: "hard drive" },
        alerts: [
          {
            name: "connectivity_issues",
            severity: 0,
            state: "set",
            timestamp: "2021-07-30T23:39:19.328Z",
          },
          {
            name: "analytics_module_failure",
            severity: 0,
            state: "set",
            timestamp: "2021-04-19T11:29:46.577Z",
          },
          {
            name: "analytics_module_failure",
            severity: 5,
            state: "cleared",
            timestamp: "2021-08-09T19:14:44.840Z",
          },
        ],
      },
      {
        deviceId: "4d77a98a-42a2-4ab4-890f-8b517ed0e222",
        createdAt: "2021-08-25T10:07:46.130Z",
        updatedAt: "2021-11-29T11:59:17.731Z",
        deviceName: "electric_vehicle",
        deviceModel: "acme_em_v2.0.33",
        location: { lat: "35.8936", lon: "143.7732" },
        measurementModels: [
          { name: "signal", type: "number", unit: "%", min: 21, max: 58 },
          { name: "signal", type: "number", unit: "%", min: 32, max: 53 },
        ],
        measurements: [
          [
            [34, "2021-09-09T12:17:23.097Z"],
            [45, "2021-09-12T19:50:47.349Z"],
            [54, "2021-09-19T09:02:52.695Z"],
            [40, "2021-09-29T15:58:08.273Z"],
            [54, "2021-09-30T08:51:11.079Z"],
          ],
          [[49, "2021-09-22T10:01:29.960Z"]],
        ],
        active: false,
        zipCode: "20022",
        metadata: { circuit: "feed", bus: "feed" },
        alerts: [
          {
            name: "faulty_sensor",
            severity: 5,
            state: "set",
            timestamp: "2021-08-26T04:09:05.465Z",
          },
          {
            name: "connectivity_issues",
            severity: 2,
            state: "cleared",
            timestamp: "2021-10-06T16:47:44.497Z",
          },
          {
            name: "analytics_module_failure",
            severity: 1,
            state: "set",
            timestamp: "2021-09-14T17:17:58.071Z",
          },
          {
            name: "unit_stopped",
            severity: 2,
            state: "set",
            timestamp: "2021-10-02T10:32:08.635Z",
          },
          {
            name: "main_unit_overloaded",
            severity: 4,
            state: "set",
            timestamp: "2021-10-03T13:24:03.765Z",
          },
          {
            name: "main_unit_overloaded",
            severity: 4,
            state: "set",
            timestamp: "2021-09-21T04:25:05.379Z",
          },
          {
            name: "unit_jammed",
            severity: 4,
            state: "set",
            timestamp: "2021-08-26T00:07:08.427Z",
          },
          {
            name: "unit_jammed",
            severity: 4,
            state: "cleared",
            timestamp: "2021-09-06T13:21:39.921Z",
          },
        ],
      },
      {
        deviceId: "f36a4f57-42d7-426e-9b2e-eec997cdbf30",
        createdAt: "2021-09-12T12:50:36.400Z",
        updatedAt: "2021-11-16T08:08:16.746Z",
        deviceName: "coffee_machine",
        deviceModel: "acme_em_v1.1.33",
        location: { lat: "-71.0878", lon: "-19.5829" },
        measurementModels: [
          { name: "shift", type: "number", unit: "mm", min: 12, max: 50 },
        ],
        measurements: [
          [
            [46, "2021-09-24T17:11:36.034Z"],
            [31, "2021-09-30T22:13:14.847Z"],
            [12, "2021-10-03T21:18:37.116Z"],
            [41, "2021-10-16T04:33:48.702Z"],
            [44, "2021-10-26T12:00:56.069Z"],
            [43, "2021-11-08T21:54:22.686Z"],
            [33, "2021-11-15T06:47:43.088Z"],
          ],
        ],
        active: false,
        zipCode: "62816",
        metadata: {
          monitor: "application",
          microchip: "protocol",
          driver: "firewall",
        },
        alerts: [
          {
            name: "faulty_sensor",
            severity: 4,
            state: "set",
            timestamp: "2021-10-06T07:04:33.934Z",
          },
          {
            name: "faulty_sensor",
            severity: 0,
            state: "cleared",
            timestamp: "2021-10-30T14:02:33.034Z",
          },
          {
            name: "main_unit_overloaded",
            severity: 0,
            state: "set",
            timestamp: "2021-10-24T22:41:38.694Z",
          },
        ],
      },
      {
        deviceId: "1f1f9391-4156-4618-8768-fb712a16157d",
        createdAt: "2021-10-10T20:32:52.900Z",
        updatedAt: "2021-11-29T11:28:26.855Z",
        deviceName: "electric_motor",
        deviceModel: "acme_em_v2.0.33",
        location: { lat: "-40.2419", lon: "63.0520" },
        measurementModels: [
          { name: "speed", type: "number", unit: "m/s", min: 7, max: 10 },
        ],
        measurements: [[[10, "2021-10-12T21:59:12.201Z"]]],
        active: false,
        zipCode: "15109",
        metadata: {
          microchip: "interface",
          transmitter: "hard drive",
          alarm: "transmitter",
        },
        alerts: [
          {
            name: "main_unit_overloaded",
            severity: 1,
            state: "cleared",
            timestamp: "2021-10-28T12:36:00.528Z",
          },
          {
            name: "main_unit_overloaded",
            severity: 4,
            state: "set",
            timestamp: "2021-11-01T13:20:15.807Z",
          },
          {
            name: "unit_jammed",
            severity: 5,
            state: "set",
            timestamp: "2021-11-06T04:26:27.568Z",
          },
          {
            name: "faulty_sensor",
            severity: 3,
            state: "set",
            timestamp: "2021-10-13T21:59:59.744Z",
          },
          {
            name: "connectivity_issues",
            severity: 2,
            state: "cleared",
            timestamp: "2021-11-04T09:36:07.650Z",
          },
          {
            name: "unit_jammed",
            severity: 4,
            state: "set",
            timestamp: "2021-11-29T11:28:26.855Z",
          },
        ],
      },
    ],
    listView: true,
  };

  componentDidMount() {}

  toggleView = (bool: Boolean) => {
    this.setState({ listView: bool });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container maxWidth="lg" className="py-4">
          {/* <BreadCrumb breadCrumbs={this.state.breadCrumbs} /> */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                id="search-devices"
                onChange={(event: any, newValue: string | null) => {
                  console.log(event, 'auto complete')
                  console.log(newValue, 'auto complete value')
                }}
                freeSolo
                disableClearable
                options={this.state.devices.map((option) => option.deviceName)}
                renderInput={(params) => (
                  <TextField {...params} label="search with device name" />
                )}
              />
            </Grid>
          </Grid>
          <Divider variant="middle" className="py-2" />
          <Grid container className="my-2">
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
              <Icon color={!this.state.listView ? "primary" : 'action'} onClick={() => this.toggleView(false)}>grid_view</Icon>
              <Icon color={this.state.listView ? "primary" : 'action'} onClick={() => this.toggleView(true)}>table_rows</Icon>
            </Grid>
          </Grid>
          {this.state.listView && <TableView data={this.state.devices} />}
          {!this.state.listView && <CardView data={this.state.devices} />}
        </Container>
      </React.Fragment>
    );
  }
}

export default Main;
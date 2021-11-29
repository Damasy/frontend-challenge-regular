import React, { Component } from 'react';
import Container from '@mui/material/Container';
import Navbar from '../core/Navbar/Navbar';
import { DetailsPageState } from './types';
import BreadCrumb from '../core/Breadcrumb/Breadcrumb';
import {connect} from 'react-redux';
import { handleGetById } from '../../redux/actions/device';
import withRouter from '../Hoc/WithRouter/WithRouter';

class DeviceDetails extends Component {

  state: DetailsPageState = {
    breadcrumbs: [
      {
        title: "Main",
        pathname: "/",
      },
      {
        title: "Devices",
        pathname: "/devices",
      },
      {
        title: 'id',
        pathname: `/devices/${2}`,
      },
    ],
    device: {
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
    }
  }

  componentDidMount() {
    // TODO: get device by id
    console.log(this.props, 'props in details com')
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container maxWidth="lg" className="py-4">
          <BreadCrumb breadcrumbs={this.state.breadcrumbs} />

          <h1>Details screen</h1>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: DetailsPageState) => {
  return {
      device: state.device
  }
};

export default withRouter(connect(mapStateToProps, {
  handleGetById
})(DeviceDetails));
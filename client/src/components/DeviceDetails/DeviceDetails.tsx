import React, { Component } from 'react';
import Container from '@mui/material/Container';
import Navbar from '../core/Navbar/Navbar';
import { DetailsPageState } from './types';
import BreadCrumb from '../core/Breadcrumb/Breadcrumb';
import {connect} from 'react-redux';
import { handleGetById } from '../../redux/actions/device';
import withRouter from '../Hoc/WithRouter/WithRouter';

class DeviceDetails extends Component <any, any> {

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
        title: this.props.params.deviceId,
        pathname: `/devices/${this.props.params.deviceId}`,
      },
    ],
    devices: {"deviceId":"4e402c07-4413-4eab-9ba2-69004a0a1520","createdAt":"2021-07-09T04:14:46.847Z","updatedAt":"2021-11-29T23:29:48.210Z","deviceName":"electric_motor","deviceModel":"acme_em_v1.1.33","location":{"lat":"73.3237","lon":"23.5674"},"measurementModels":[{"name":"signal","type":"number","unit":"%","min":0,"max":77},{"name":"signal","type":"number","unit":"%","min":42,"max":100}],"measurements":[[[53,"2021-08-08T23:32:41.953Z"],[75,"2021-08-25T19:38:24.617Z"],[52,"2021-10-22T21:09:14.894Z"],[34,"2021-10-27T15:47:04.734Z"],[26,"2021-10-29T19:40:27.873Z"],[26,"2021-11-06T18:00:02.776Z"],[30,"2021-11-08T13:33:18.191Z"],[29,"2021-11-12T17:13:03.927Z"],[36,"2021-11-13T15:16:44.737Z"],[40,"2021-11-21T23:20:44.109Z"],[39,"2021-11-23T06:28:53.301Z"],[28,"2021-11-25T05:56:49.785Z"],[39,"2021-11-26T05:59:45.577Z"],[28,"2021-11-26T15:40:53.441Z"]],[[56,"2021-07-19T19:31:04.637Z"],[43,"2021-08-13T15:04:14.531Z"],[67,"2021-08-17T01:26:57.263Z"],[44,"2021-08-25T20:05:41.266Z"],[63,"2021-10-05T01:42:19.532Z"],[62,"2021-10-13T21:51:35.709Z"],[81,"2021-10-15T12:41:07.092Z"],[79,"2021-10-17T06:41:00.018Z"],[99,"2021-10-18T22:30:15.143Z"],[73,"2021-10-21T09:10:05.020Z"],[86,"2021-10-22T11:44:09.371Z"],[94,"2021-10-25T23:42:58.063Z"],[72,"2021-10-26T23:17:48.700Z"],[67,"2021-11-02T11:09:20.250Z"],[97,"2021-11-04T11:20:11.486Z"],[78,"2021-11-05T13:25:52.193Z"],[92,"2021-11-06T14:33:37.662Z"],[82,"2021-11-09T09:11:58.438Z"],[99,"2021-11-15T02:18:53.167Z"],[72,"2021-11-15T06:46:32.708Z"],[88,"2021-11-18T21:34:01.025Z"],[60,"2021-11-19T20:53:28.642Z"],[69,"2021-11-22T00:42:25.700Z"],[49,"2021-11-26T01:42:58.401Z"],[60,"2021-11-27T19:11:39.776Z"]]],"active":false,"zipCode":"95537","metadata":{"application":"hard drive","system":"sensor"},"alerts":[{"name":"connectivity_issues","severity":5,"state":"set","timestamp":"2021-11-02T04:21:17.224Z"},{"name":"faulty_sensor","severity":0,"state":"cleared","timestamp":"2021-09-29T05:35:36.882Z"}]}
  }

  componentDidMount() {
    const deviceId = this.props.params.deviceId;
    this.props.handleGetById(deviceId);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container maxWidth="lg" className="py-4">
          <BreadCrumb breadcrumbs={this.state.breadcrumbs} />

          <h1>{this.props.device.deviceName}</h1>
          <h3>{this.props.device.deviceId}</h3>
          <h3>{this.props.device.deviceModel}</h3>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: DetailsPageState) => {
  return {
      device: state.devices
  }
};

export default connect(mapStateToProps, {
  handleGetById
})(withRouter(DeviceDetails));
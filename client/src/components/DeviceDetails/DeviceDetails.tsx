import React, { Component } from 'react';
import Container from '@mui/material/Container';
import Navbar from '../core/Navbar/Navbar';

class DeviceDetails extends Component {

  componentDidMount() {
    // TODO: get device by id
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container maxWidth="lg" className="py-4">
          Details screen
        </Container>
      </React.Fragment>
    );
  }
}

export default DeviceDetails;
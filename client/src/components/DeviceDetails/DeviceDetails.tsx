import React, { Component } from 'react';
import Container from '@mui/material/Container';
import Navbar from '../core/Navbar/Navbar';
import { DetailsPageState } from './types';
import BreadCrumb from '../core/Breadcrumb/Breadcrumb';
import {connect} from 'react-redux';
import { handleGetById, handleToggleState } from '../../redux/actions/device';
import withRouter from '../Hoc/WithRouter/WithRouter';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Icon from '@mui/material/Icon';
import Slider from '@mui/material/Slider';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';

import '../../index.css';
import LineChart from '../Charts/LineChart';
import Map from '../Maps/Map';
import { uuid } from '../../utils/utils';

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
    ]
  }

  componentDidMount() {
    const deviceId = this.props.params.deviceId;
    this.props.handleGetById(deviceId);
  }

  render() {
    if(this.props.device.length !== 1) {
      return (<h1>Loading...</h1>)
    }
    return (
      <React.Fragment>
        <Navbar />
        {this.props.device.map((row: any) => {
          return (
            <Container maxWidth="lg" className="py-4" key={row.deviceId}>
              <BreadCrumb breadcrumbs={this.state.breadcrumbs} />
              <Typography sx={{ fontSize: 14 }} color="text.secondary"
              className="mt-2">
                {row.deviceModel}
              </Typography>
              <Grid container item xs={12} direction="row" justifyContent="space-between">
                <Typography variant="h4" component="div">
                  {row.deviceName}
                </Typography>
                <FormControlLabel
                  className="pointer"
                  control={
                    <Switch
                      checked={row.active}
                      onChange={() => this.props.handleToggleState(row.deviceId, !row.active)}
                      color={row.active ? "success" : 'default'} />
                  }
                  label={row.active ? 'Active' : 'InActive'}
                />
              </Grid>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" className="mb-3">
                {new Date(row.createdAt).toDateString()}
              </Typography>
              <Typography variant="h3" component="div" className="mb-1">
                Alerts
              </Typography>
              {
                row.alerts.map((alert: any, index: number) => {
                  let id = uuid(index);
                  console.log(id, 'alert ids')
                  return (
                    <Accordion key={id}>
                      <AccordionSummary
                        expandIcon={<Icon>keyboard_arrow_down</Icon>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                          {alert.name}
                        </Typography>
                        {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {new Date(alert.timestamp).toDateString()}
                        </Typography>
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Severity: {alert.severity}
                        </Typography>
                        {/* <LinearProgress variant="determinate" value={((alert.severity - 0) * 100) / (10 - 0)} />
                        <Slider defaultValue={alert.severity} step={1}
                        valueLabelDisplay="on" marks min={0} max={10} disabled /> */}
                        <Grid container className="py-2">
                          <Typography sx={{ mb: 1.5 }} style={{marginRight: 16}}>
                            State: 
                          </Typography>
                          <Chip label={alert.state} variant="outlined"
                          color={alert.state === 'set' ? 'success' : 'error'} />
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  )
                })
              }
              <Typography variant="h3" component="div" className="my-2">
                Measurments
              </Typography>
              {
                row.measurements.map((m: any[], index: number) => {
                  let id = uuid(index);
                  console.log(id, 'measurments ids')
                  return (
                    <React.Fragment>
                      <LineChart
                        key={id}
                        data={m}
                        name={row.measurementModels[index].name}
                        unit={row.measurementModels[index].unit}
                      />
                      <br/>
                      <br/>
                    </React.Fragment>
                  )
                })
              }
              <Typography variant="h3" component="div" className="my-2">
                Location
              </Typography>
              <Map location={row.location}/>
            </Container>
          )
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
      device: state.devices.devices
  }
};

export default connect(mapStateToProps, {
  handleGetById,
  handleToggleState
})(withRouter(DeviceDetails));
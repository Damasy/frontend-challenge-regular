import { Device } from '../../models/device';
import * as API from '../../services/device';
import { toast } from 'react-toastify';

export const GET_ALL_DEVICES = 'GET_ALL_DEVICES';
export const GET_DEVICE_BY_ID = 'GET_Device_BY_ID';
export const TOGGLE_DEVICE_STATE = 'TOGGLE_DEVICE_STATE';
export const TOGGLE_LIST_VIEW = 'TOGGLE_LIST_VIEW';

function toggleListView(state: boolean) {
  return {
    type: TOGGLE_LIST_VIEW,
    payload: state
  };
}

function getAllDevices(devices: Device[]) {
  return {
    type: GET_ALL_DEVICES,
    payload: devices
  };
}

export function getDeviceById(device: Device) {
  return {
    type: GET_DEVICE_BY_ID,
    payload: device
  };
}

function toggleDeviceState(deviceId: string, state: boolean) {
  return {
    type: TOGGLE_DEVICE_STATE,
    payload: {deviceId, state}
  };
}

export function handleGetAll() {
  return async (dispatch: any) => {
    const devices = await API.getAllDevices()
    if(devices) {
      devices.json()
      .then(res => {
        dispatch(getAllDevices(res));
      })
      .catch(() => {
        alert('There was an error. Try again.')
      })
    }
  }
}

export function handleGetById(deviceId: string) {
  return async (dispatch: any) => {
    const device = await API.getDeviceById(deviceId);
    if(device) {
      device.json()
      .then(device => {
        dispatch(getDeviceById(device));
      })
      .catch(() => {
        alert('There was an error. Try again.')
      })
    }
  }
}

export function handleToggleState(deviceId: string, state: boolean) {
  return async(dispatch: any) => {
    await API.toggleActiveState(deviceId, state)
    .then(res => {
      dispatch(toggleDeviceState(deviceId, state))
      toast.success('State toggled successfully');
    })
    .catch(() => {
      toast.error('State toggle failed');
      // alert('There was an error. Try again.');
    })
  }
}

export function handleListViewToggle(state: boolean) {
  return (dispatch: any) => {
    dispatch(toggleListView(state));
  }
}
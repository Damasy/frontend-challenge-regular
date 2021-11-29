import { Device } from '../../models/device';
import * as API from '../../services/device';

export const GET_ALL_DEVICES = 'GET_ALL_DEVICES';
export const GET_DEVICE_BY_ID = 'GET_Device_BY_ID';

function getAllDevices(devices: Device[]) {
  return {
    type: GET_ALL_DEVICES,
    payload: devices
  };
}

function getDeviceById(device: Device) {
  return {
    type: GET_DEVICE_BY_ID,
    payload: device
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
      .then(res => {
        dispatch(getDeviceById(res));
      })
      .catch(() => {
        alert('There was an error. Try again.')
      })
    }
  }
}
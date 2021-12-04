import {
  GET_DEVICE_BY_ID,
  TOGGLE_DEVICE_STATE,
  TOGGLE_LIST_VIEW,
  GET_ALL_DEVICES,
} from "./../actions/device";
const initialState = {
  devices: [],
  listView: false
};

function Devices(
  state: { devices: any[], listView: boolean } = initialState,
  action: { type: string; payload: any }
): any {
  debugger
  switch (action.type) {
    case GET_DEVICE_BY_ID:
      return {
        ...state,
        devices: [action.payload],
      };
    case TOGGLE_DEVICE_STATE:
      state.devices = state.devices.map((device) => {
        if (device.deviceId === action.payload.deviceId) {
          device.active = action.payload.state;
        }
        return device;
      });
      return {
        ...state,
      };
    case TOGGLE_LIST_VIEW:
      return {
        ...state,
        listView: action.payload,
      };
    case GET_ALL_DEVICES:
      return {
        ...state,
        devices: action.payload.data,
      };

    default:
      return state;
  }
}

export default Devices;

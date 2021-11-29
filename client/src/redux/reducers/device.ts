import { GET_DEVICE_BY_ID } from './../actions/device';
const initialState = {
  data: []
};

function Device(state = initialState, action: {type: string, payload: any}): any {
  switch (action.type) {
  case GET_DEVICE_BY_ID:
    return {
      ...state,
      ...action.payload
    }

  default:
    return {
      ...state,
      ...action.payload
    }
  }
}

export default Device;

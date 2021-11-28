import { GET_Device_BY_ID } from './../actions/device';
const initialState = {
  data: []
};

function Device(state = initialState, action: {type: string, payload: any}): any {
  switch (action.type) {
  case GET_Device_BY_ID:
    return {
      ...state,
      ...action.payload
    }

  default:
    return {
      ...state,
      data: action.payload
    }
  }
}

export default Device;

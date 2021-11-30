import { GET_DEVICE_BY_ID, TOGGLE_DEIVCE_ACTIVE, TOGGLE_LIST_VIEW } from './../actions/device';
const initialState = {
  data: []
};

function Device(state: {data: any[]} = initialState, action: {type: string, payload: any}): any {
  switch (action.type) {
  case GET_DEVICE_BY_ID:
    return {
      ...state,
      ...action.payload
    };
  case TOGGLE_DEIVCE_ACTIVE:
    state.data = state.data.map(row => {
      if(row.deviceId === action.payload.deviceId) {
        row.active = action.payload.state
      }
      return row
    })
    return {
      ...state,
    }
  case TOGGLE_LIST_VIEW:
    return {
      ...state,
      listView: action.payload
    };

  default:
    return {
      ...state,
      ...action.payload
    }
  }
}

export default Device;

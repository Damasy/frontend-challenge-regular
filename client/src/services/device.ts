export const API_URL = 'http://localhost:8888/api/devices';

export const getAllDevices = () => {
  return fetch(API_URL);
}

export const getDeviceById = (id: string) => {
  return fetch(API_URL + '/' + id);
}

export const toggleActiveState = (id: string, state: Boolean) => {
  return fetch(API_URL + '/' + id, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',                                                              
    body: JSON.stringify( { "active": state } )                                        
  })
}
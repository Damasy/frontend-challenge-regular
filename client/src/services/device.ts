export const API_URL = 'http://localhost:8888/api/devices';

export const getAllDevices = () => {
  return fetch(API_URL);
}

export const getDeviceById = (id: string) => {
  return fetch(API_URL + '/' + id);
}
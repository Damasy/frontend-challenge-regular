export interface Device {
  deviceName: string;
  deviceId: string;
  createdAt: string;
  updatedAt: string;
  location: Location;
  deviceModel: string;
  measurements: [[[number, string]]];
  measurementModels: MeasurementModels[];
  alerts: Alert[];
  active: Boolean;
  zipCode: string;
}

export interface Location {
  lat: string;
  lon: string;
}

export interface Alert {
  name: string;
  severity: number;
  state: string;
  timestamp: string;
}

export interface MeasurementModels {
  name: string;
  type: string;
  unit: string;
  min: string;
  max: string;
}
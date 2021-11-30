import { DataGrid, GridRowsProp, GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react';
import { Device } from '../../models/device';
import { useNavigate } from 'react-router-dom';

import '../../index.css';

function TableView(props: any) {

  const navigate = useNavigate();

  let devices = props.data;

  devices = devices.filter((device: Device) => device.deviceName.includes(props.searchTerm));

  const rows: GridRowsProp = devices.map((item: Device) => {
    return {
      ...item,
      id: item.deviceId
    }
  });

  const handleRedirect = (deviceId: string) => {
    navigate(`/devices/${deviceId}`);
    return;
  }

  const handleStateToggle = (deviceId: string, state: boolean) => {
    console.log(props, 'props here ?');
    props.toggleActive(deviceId, state)
    return;
  }
  
  const columns: any[] = [
    { field: 'deviceName', headerName: 'Device name', width: 150 },
    { field: 'createdAt', headerName: 'Creation date', width: 150 },
    { field: 'deviceModel', headerName: 'Device model', width: 150 },
    { field: 'active', headerName: 'Active', width: 150 },
    { field: 'zipCode', headerName: 'ZipCode', width: 150 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (record: any) => {
        return [
          (<GridActionsCellItem
            label="More details"
            color="primary"
            showInMenu={true}
            onClick={() => handleRedirect(record.id)}
          />),
          (<GridActionsCellItem
            label="Toggle active"
            color="primary"
            showInMenu={true}
            onClick={() => handleStateToggle(record.id, !record.row.active)}
          />)
        ];
      },
    }
  ];
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid rows={rows} pageSize={10} columns={columns} />
      </div>
    </div>
  )
}

export default TableView

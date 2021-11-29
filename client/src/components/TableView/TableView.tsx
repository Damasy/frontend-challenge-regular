import { DataGrid, GridRowsProp, GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react';
import { Device } from '../../models/device';

function TableView(props: any) {
  const rows: GridRowsProp = props.data.map((item: Device) => {
    return {
      ...item,
      id: item.deviceId
    }
  });

  const handleRedirect = (deviceId: string) => {
    debugger
    console.log(deviceId);
    let x;
    return x;
  }
  
  const columns: any[] = [
    { field: 'deviceName', headerName: 'Device name', width: 150 },
    { field: 'createdAt', headerName: 'Creation date', width: 150 },
    { field: 'deviceModel', headerName: 'Device model', width: 150 },
    { field: 'active', headerName: 'Active', width: 150 },
    // { field: 'zipCode', headerName: 'ZipCode', width: 150 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (record: any) => {
        return [
          <GridActionsCellItem
            label="More details"
            color="primary"
            showInMenu={true}
            onClick={() => handleRedirect(record.id)}
          />
        ];
      },
    }
  ];
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  )
}

export default TableView

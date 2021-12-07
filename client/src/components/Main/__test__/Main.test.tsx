import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from '../../../redux/reducers/index';
import middleware from '../../../redux/middleware/index';

import Main from '../Main';

afterEach(cleanup);

const renderComponent = () => {
  const state = {
    devices: {
      devices: [{
        deviceId: "e6367b48-4845-4c02-b66b-de734f88fa02",
        createdAt: "2021-01-12T22:29:33.647Z",
        updatedAt: "2021-12-06T15:55:17.299Z",
        deviceName: "device1",
        deviceModel: "acme_em_v2.0.33",
        location: { lat: "-59.5784", lon: "26.1709" },
        measurementModels: [
          { name: "signal", type: "number", unit: "%", min: 23, max: 68 },
          { name: "open", type: "boolean", unit: "", min: 0, max: 1 },
        ],
        measurements: [
          [[40, "2021-03-07T19:52:54.711Z"]],
          [
            [0, "2021-02-22T10:04:59.705Z"],
            [0, "2021-02-25T02:03:11.148Z"],
            [1, "2021-04-19T21:36:38.292Z"],
            [0, "2021-09-12T22:12:59.980Z"],
          ],
        ],
        active: true,
        zipCode: "30906-8066",
        metadata: { alarm: "capacitor", card: "protocol" },
        alerts: [
          {
            name: "analytics_module_failure",
            severity: 5,
            state: "set",
            timestamp: "2021-06-10T09:30:50.154Z",
          },
          {
            name: "analytics_module_failure",
            severity: 3,
            state: "cleared",
            timestamp: "2021-05-06T06:36:05.318Z",
          },
          {
            name: "unit_stopped",
            severity: 2,
            state: "set",
            timestamp: "2021-09-05T17:37:42.281Z",
          },
          {
            name: "analytics_module_failure",
            severity: 0,
            state: "cleared",
            timestamp: "2021-03-29T03:54:39.970Z",
          },
          {
            name: "unit_stopped",
            severity: 1,
            state: "cleared",
            timestamp: "2021-04-19T09:35:47.380Z",
          },
        ],
      }],
      listView: true
    }
  };
  return render(
    <Provider store={createStore(combinedReducers, middleware)}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

it('main component should be in the document', async () => {
  const { getByTestId } = renderComponent();
  await waitFor(() => {
    expect(getByTestId('mainPage')).toBeInTheDocument();
  })
});

it('should has a card view icon active, and cards wrapper', async () => {
  const { getByText, getByTestId } = renderComponent();
  await waitFor(() => {
    const elm = getByText('grid_view');
    expect(elm).toHaveClass('MuiIcon-colorPrimary')
    expect(getByTestId('cards')).toBeInTheDocument();
  });
});

it('should toggle view to table view', async () => {
  const { getByText, getByTestId } = renderComponent();
  await waitFor(() => {
    const elm = getByText('table_rows');
    fireEvent.click(elm);
    expect(elm).toHaveClass('MuiIcon-colorPrimary');
    expect(getByTestId('table')).toBeInTheDocument();
  });
});

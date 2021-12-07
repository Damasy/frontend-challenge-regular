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
  const state = createStore(combinedReducers, middleware);
  return render(
    <Provider store={state}>
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

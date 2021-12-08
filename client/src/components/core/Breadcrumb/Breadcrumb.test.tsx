import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb/Breadcrumb';

const renderComponent = () => {
  const breadcrumbs = [
    {
      title: "Main",
      pathname: "/",
    },
    {
      title: "Devices",
      pathname: "/devices",
    },
    {
      title: "device1",
      pathname: "/device1",
    }
  ];

  return render(
    <BrowserRouter>
      <Breadcrumb breadcrumbs={breadcrumbs} />
    </BrowserRouter>
  );
}

it('breadcrumbs component should be in the document', () => {
  renderComponent();
  expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
});

it('breadcrumbs component should has anchor tag with "/device" as href', () => {
  renderComponent();
  const elm = screen.getByText('Devices');
  expect(elm).toBeInTheDocument();
  expect(elm).toHaveAttribute('href', '/devices');
});
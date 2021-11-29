import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from 'react-router-dom';
import Navbar from "../core/Navbar/Navbar";
import Main from "../Main/Main";
import Intro from "../Welcome/Intro";
import DeviceDetails from "../DeviceDetails/DeviceDetails";

import '../../index.css';

const App = () => {
  const routes = (
    <Routes>
      <Route path="/devices" element={<Main />}>
      </Route>
      <Route path="/devices/:deviceId" element={<DeviceDetails />} />
      <Route path="/" element={<Intro />}>
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem", textAlign: 'center' }}>
            <h1>404</h1>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  )
  return (
    <React.Fragment>
      <CssBaseline />
      {routes}
    </React.Fragment>
  )
}

export default App
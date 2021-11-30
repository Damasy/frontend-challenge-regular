import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from 'react-router-dom';
import Main from "../Main/Main";
import Intro from "../Welcome/Intro";
import DeviceDetails from "../DeviceDetails/DeviceDetails";

import '../../index.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  )
}

export default App
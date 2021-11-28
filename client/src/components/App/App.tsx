import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../core/Navbar/Navbar";
import Main from "../Main/Main";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Main />
      </Container>
    </React.Fragment>
  )
}

export default App
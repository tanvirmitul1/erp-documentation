/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// App.jsx
import { Navigate } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import MainComponent from "./components/common/MainComponent";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Box height="100vh" overflow="hidden">
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route
            path="/*"
            element={
              <PrivateRouteForRole role="token">
                <MainComponent />
              </PrivateRouteForRole>
            }
          />
        </Routes>
      </Box>
    </Router>
  );
}
const PrivateRouteForRole = ({ children, role }) => {
  // Check if "loginData" exists in sessionStorage and has a token
  let token = "";

  if (sessionStorage.getItem("loginData")) {
    token = Object.keys(JSON.parse(sessionStorage.getItem("loginData")))[1];
  } else {
    token = "";
  }

  if (token === role) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
export default App;

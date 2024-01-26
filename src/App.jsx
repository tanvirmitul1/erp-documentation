/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// App.jsx
import { Navigate } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/common/Navbar";
import SideBar from "./components/common/Sidebar";
import MainComponent from "./components/common/MainComponent";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const user = true;
  return (
    <Router>
      <Box height="100vh" overflow="hidden">
        <Grid
          templateAreas={`"nav nav nav nav nav nav"
                           "sidebar home home home home home"`}
          templateColumns="250px 1fr"
        >
          <GridItem area="nav">{user && <NavBar />}</GridItem>
          <GridItem area="sidebar">{user && <SideBar />}</GridItem>
          <GridItem area="home">
            <Routes>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />

              <Route
                path="/module/:moduleId/*"
                element={
                  <PrivateRouteForRole role="admin">
                    <MainComponent />
                  </PrivateRouteForRole>
                }
              />
            </Routes>
          </GridItem>
        </Grid>
      </Box>
    </Router>
  );
}
const PrivateRouteForRole = ({ children, role }) => {
  const userRole = "admin";

  if (userRole === role) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
export default App;

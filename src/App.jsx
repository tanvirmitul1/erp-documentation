/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "./components/common/Navbar";

import Home from "./components/common/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Box height="100vh" overflow="hidden">
        <Grid
          templateAreas={`"nav"
                           "home"`}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>

          <GridItem area="home">
            <Routes>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route
                path="/"
                element={
                  <PrivateRouteForRole role="admin">
                    <Home />
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

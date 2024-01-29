/* eslint-disable no-unused-vars */
// MainComponent.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import ComponentDetails from "../mainContent/component/ComponentDetails";
import ElementDetails from "../mainContent/element/ElementDetails";
import FunctionDetails from "../mainContent/function/FunctionDetails";
import ModuleDetails from "../mainContent/module/moduleDetails";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";

const MainComponent = () => {
  const user = true;
  return (
    <Grid
      templateAreas={`"nav nav nav"
                     "sidebar home home"`}
      templateColumns="250px 1fr"
    >
      <GridItem area="nav">{user && <NavBar />}</GridItem>
      <GridItem area="sidebar">{user && <Sidebar />}</GridItem>

      <GridItem area="home">
        <Box
          maxHeight="92vh"
          overflow="auto"
          paddingX="12px"
          paddingTop="10px"
          rounded="md"
        >
          <Routes>
            <Route path="/module/:moduleId" element={<ModuleDetails />} />
            <Route
              path="/module/:moduleId/component/:componentId"
              element={<ComponentDetails />}
            />
            <Route
              path="/module/:moduleId/component/:componentId/element/:elementId"
              element={<ElementDetails />}
            />
            <Route
              path="/module/:moduleId/component/:componentId/element/:elementId/function/:functionId"
              element={<FunctionDetails />}
            />
          </Routes>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default MainComponent;

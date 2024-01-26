/* eslint-disable no-unused-vars */
// MainComponent.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ComponentDetails from "../mainContent/component/ComponentDetails";
import ElementDetails from "../mainContent/element/ElementDetails";
import FunctionDetails from "../mainContent/function/FunctionDetails";
import ModuleDetails from "../mainContent/module/moduleDetails";

const MainComponent = () => {
  return (
    <Box
      maxHeight="92vh"
      overflow="auto"
      paddingX="12px"
      area="main"
      paddingTop="10px"
      rounded="md"
    >
      <Routes>
        <Route path="/" element={<ModuleDetails />} />
        <Route path="component/:componentId" element={<ComponentDetails />} />
        <Route
          path="component/:componentId/element/:elementId"
          element={<ElementDetails />}
        />
        <Route
          path="component/:componentId/element/:elementId/function/:functionId"
          element={<FunctionDetails />}
        />
      </Routes>
    </Box>
  );
};

export default MainComponent;

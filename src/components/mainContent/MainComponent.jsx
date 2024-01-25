/* eslint-disable no-unused-vars */
// src/components/mainContent/MainComponent.js

import { Box } from "@chakra-ui/react";

import ModuleDetails from "./module/moduleDetails";

const MainComponent = () => {
  return (
    <Box maxHeight="92vh" overflowX="auto" paddingRight="10px">
      <ModuleDetails />
    </Box>
  );
};

export default MainComponent;

/* eslint-disable no-unused-vars */
// src/components/mainContent/MainComponent.js

import { Box, Flex } from "@chakra-ui/react";

import ModuleDetails from "./module/moduleDetails";
ModuleDetails;
const MainComponent = () => {
  return (
    <Box maxHeight="92vh" overflowX="auto">
      <ModuleDetails />
      
    </Box>
  );
};

export default MainComponent;

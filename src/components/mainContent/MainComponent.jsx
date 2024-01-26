/* eslint-disable no-unused-vars */
// src/components/mainContent/MainComponent.js

import { Box } from "@chakra-ui/react";

import ModuleDetails from "./module/moduleDetails";
import ComponentDetails from "./component/ComponentDetails";

const MainComponent = () => {
  return (
    <Box maxHeight="92vh" overflowX="auto" paddingRight="10px">
      <ModuleDetails />
      <ComponentDetails />
    </Box>
  );
};

export default MainComponent;

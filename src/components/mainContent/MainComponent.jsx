/* eslint-disable no-unused-vars */
// src/components/mainContent/MainComponent.js

import { Box, Flex } from "@chakra-ui/react";
import useModuleStore from "../../zustand/store";
import ModuleDetails from "./module/moduleDetails";
ModuleDetails;
const MainComponent = () => {
  const { selectedModule } = useModuleStore();
  return (
    <Box maxHeight="94vh" overflow="auto">
      <ModuleDetails />
    </Box>
  );
};

export default MainComponent;

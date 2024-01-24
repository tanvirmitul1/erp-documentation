/* eslint-disable react/jsx-key */
// src/components/navigation/Sidebar.js
import { Stack, useColorMode, Box } from "@chakra-ui/react";

import SearchBar from "../reusable/SearchBar";
import React from "react";
import CustomButton from "../reusable/CustomButton";
import { useGetModuleQuery } from "../../redux/api/docApiSlice";
import ModuleModal from "../modal/ModuleModal";

import Module from "../sidebar/Module";
import SideSkeleton from "../reusable/SideSkeleton";
function Sidebar() {
  const [moduleName, setModuleName] = React.useState("");
  const { data: modules, error, isLoading } = useGetModuleQuery();
  const { colorMode } = useColorMode();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const textColor = colorMode === "light" ? "white" : "black";
  if (error) return <div>Error: {error.message}</div>;

  const handleChange = (e) => {
    setModuleName(e.target.value);
  };

  return (
    <Stack marginTop="80px">
      <Box marginTop="10px">
        <Box position="absolute" top="50px">
          <SearchBar
            value={moduleName}
            onChange={handleChange}
            placeholder="Search Module"
          />
        </Box>

        <Box position="absolute" top="100px">
          <CustomButton
            text="Add New Module"
            onClick={handleButtonClick}
            textColor={textColor}
          />
        </Box>
      </Box>

      {isLoading ? (
        <SideSkeleton />
      ) : (
        modules.map((module) => <Module key={module.id} module={module} />)
      )}

      <ModuleModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </Stack>
  );
}

export default Sidebar;

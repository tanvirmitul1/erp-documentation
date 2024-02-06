/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// src/components/navigation/Sidebar.js
/* eslint-disable react/jsx-key */
// src/components/navigation/Sidebar.js
import { Stack, Box } from "@chakra-ui/react";

import SearchBar from "../reusable/SearchBar";
import React, { useState, useEffect } from "react";
import AddButton from "../reusable/AddButton";
import { useGetModuleQuery } from "../../redux/api/docApiSlice";
import ModuleModal from "../modal/ModuleModal";

import Module from "../sidebar/Module";
import SideSkeleton from "../reusable/SideSkeleton";
import useColorModeColors from "../../hooks/useColorModeColors";

function Sidebar() {
  const { boxShadowColor } = useColorModeColors();
  const [moduleName, setModuleName] = useState("");
  const { data, error, isLoading } = useGetModuleQuery();
  const [modules, setModules] = useState(data?.data || []);
  useEffect(() => {
    if (data) {
      setModules(data.data || []);
    }
  }, [data]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (error)
    return <div>Data Loading Error or No Data Available: {error.message}</div>;

  const handleChange = (e) => {
    setModuleName(e.target.value);
  };

  const filteredModules = modules?.filter((module) =>
    module?.name.toLowerCase().includes(moduleName.toLowerCase())
  );

  return !isLoading ? (
    <Stack
      w="100%"
      h="100vh"
      maxW="250px"
      overflow="scroll"
      p="10px"
      boxShadow={`5px 0 5px -5px ${boxShadowColor}, -5px 0 5px -5px ${boxShadowColor}`}
    >
      <SearchBar
        value={moduleName}
        onChange={handleChange}
        placeholder="Search Module"
      />

      <AddButton
        text="Add New Module"
        onClick={handleButtonClick}
        width="200px"
      />

      {filteredModules.map((module) => (
        <Module key={module.id} module={module} />
      ))}

      <ModuleModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        setModules={setModules}
      />
    </Stack>
  ) : (
    <Box marginLeft={4} marginTop={4}>
      <SideSkeleton Count={20} width={200} />
    </Box>
  );
}

export default Sidebar;

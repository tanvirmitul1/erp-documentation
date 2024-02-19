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
import useZustandStore from "../../zustand/store";

function Sidebar() {
  const { modules, setModules } = useZustandStore();
  const { boxShadowColor } = useColorModeColors();
  const [moduleName, setModuleName] = useState("");
  const { data, error, isLoading } = useGetModuleQuery();

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

  const handleChange = (e) => {
    setModuleName(e.target.value);
  };

  const filteredModules = modules?.filter((module) =>
    module?.name.toLowerCase().includes(moduleName.toLowerCase())
  );

  return (
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

      {isLoading ? (
        <Box marginTop={4} marginLeft={2}>
          <SideSkeleton Count={50} width={200} />
        </Box>
      ) : (
        filteredModules.map((module) => (
          <Module key={module.id} module={module} />
        ))
      )}

      <ModuleModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        setModules={setModules}
      />
    </Stack>
  );
}

export default Sidebar;

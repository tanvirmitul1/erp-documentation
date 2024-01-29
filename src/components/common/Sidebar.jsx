/* eslint-disable react/jsx-key */
// src/components/navigation/Sidebar.js
import { Stack } from "@chakra-ui/react";

import SearchBar from "../reusable/SearchBar";
import React from "react";
import AddButton from "../reusable/AddButton";
import { useGetModuleQuery } from "../../redux/api/docApiSlice";
import ModuleModal from "../modal/ModuleModal";

import Module from "../sidebar/Module";
import SideSkeleton from "../reusable/SideSkeleton";
import useColorModeColors from "../../hooks/useColorModeColors";

function Sidebar() {
  const { boxShadowColor } = useColorModeColors();
  const [moduleName, setModuleName] = React.useState("");
  const { data: modules, error, isLoading } = useGetModuleQuery();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (error) return <div>Error: {error.message}</div>;

  const handleChange = (e) => {
    setModuleName(e.target.value);
  };

  return (
    <Stack
      w="100%"
      h="100vh"
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
        <SideSkeleton />
      ) : (
        modules.map((module) => <Module key={module.id} module={module} />)
      )}

      <ModuleModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </Stack>
  );
}

export default Sidebar;

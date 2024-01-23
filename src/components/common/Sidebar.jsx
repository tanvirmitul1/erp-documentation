/* eslint-disable react/jsx-key */
// src/components/navigation/Sidebar.js
import { Stack } from "@chakra-ui/react";
import SearchBar from "../reusable/SearchBar";
import React from "react";
import CustomButton from "../reusable/CustomButton";
import { useGetModuleQuery } from "../../redux/api/docApiSlice";
import Module from "../sidebar/Module";

function Sidebar() {
  const [moduleName, setModuleName] = React.useState("");
  const { data: modules, error, isLoading } = useGetModuleQuery();

  if (error) return <div>Error: {error.message}</div>;

  const handleChange = (e) => {
    setModuleName(e.target.value);
  };
  const handleButtonClick = () => {
    console.log("button clicked");
  };

  return (
    <Stack h="100vh" maxHeight="100vh" overflowWrap="scroll">
      <SearchBar
        value={moduleName}
        onChange={handleChange}
        placeholder="Search Module"
        iconSize={24}
      />
      <CustomButton text="Add New Module" onClick={handleButtonClick} />

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        modules.map((module) => <Module key={module.id} module={module}  />)
      )}
    </Stack>
  );
}

export default Sidebar;

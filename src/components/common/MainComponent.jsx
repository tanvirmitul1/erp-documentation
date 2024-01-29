/* eslint-disable no-unused-vars */
// MainComponent.jsx
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleChevronLeft } from "react-icons/fa6";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import ComponentDetails from "../mainContent/component/ComponentDetails";
import ElementDetails from "../mainContent/element/ElementDetails";
import FunctionDetails from "../mainContent/function/FunctionDetails";
import ModuleDetails from "../mainContent/module/moduleDetails";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import useColorModeColors from "../../hooks/useColorModeColors";
import useModuleStore from "../../zustand/store";
const MainComponent = () => {
  const { showLeftBar, toggleLeftBar } = useModuleStore();

  const { sidebarBgColor, addButtonBgColor } = useColorModeColors();
  const user = true;
  return (
    <Grid
      position="relative"
      templateAreas={{
        base: `"nav nav nav"
               "home home home"`,
        lg: `"nav nav nav"
             "sidebar home home"`,
      }}
      templateColumns={{ lg: "250px 1fr" }}
    >
      <GridItem area="nav">{user && <NavBar />}</GridItem>
      <GridItem area="sidebar">{user && <Sidebar />}</GridItem>

      {/* start absolute view of sidebar */}

      <Box
        color={addButtonBgColor}
        cursor="pointer"
        position="absolute"
        left="10px"
        top="5px"
        display={{ base: "block", lg: "none" }}
        onClick={toggleLeftBar}
      >
        <GiHamburgerMenu size={30} />
      </Box>

      {showLeftBar && (
        <Box
          color={addButtonBgColor}
          left="210px"
          top="30px"
          zIndex={200}
          cursor="pointer"
          position="absolute"
          display={{ base: "block", lg: "none" }}
          onClick={toggleLeftBar}
        >
          <FaCircleChevronLeft size={30} />
        </Box>
      )}
      <Box
        position="absolute"
        zIndex={100}
        display={{ base: "block", lg: "none" }}
        left={{ base: showLeftBar ? "0" : "-400px", lg: 0 }}
        backgroundColor={sidebarBgColor}
      >
        <Sidebar />
      </Box>

      {/* end absolute view of sidebar */}
      <GridItem area="home">
        <Box
          marginLeft={{ base: showLeftBar ? "250px" : "0", lg: "0" }}
          maxHeight="92vh"
          overflow="auto"
          paddingX="12px"
          paddingTop="10px"
          rounded="md"
        >
          <Routes>
            <Route path="/module/:moduleId" element={<ModuleDetails />} />
            <Route
              path="/module/:moduleId/component/:componentId"
              element={<ComponentDetails />}
            />
            <Route
              path="/module/:moduleId/component/:componentId/element/:elementId"
              element={<ElementDetails />}
            />
            <Route
              path="/module/:moduleId/component/:componentId/element/:elementId/function/:functionId"
              element={<FunctionDetails />}
            />
          </Routes>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default MainComponent;

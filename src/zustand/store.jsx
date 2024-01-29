import { create } from "zustand";

const useModuleStore = create((set) => ({
  //modules
  selectedModule: {
    id: 1,
    name: "Sales Module",
    addedBy: "Riadus Salehin",
    lastUpdateBy: "Riadus Salehin",
    lastUpdateAt: "10th Oct 2023",
    createdAt: "10th Oct 2023 08:45:56 PM",
    moduleDirectoryPath: "localhost/phpmyadmin/index.php",
    description:
      "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",

    components: [
      {
        id: 1,
        name: "Lead",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
                functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
            ],
          },
          {
            id: 2,
            name: "Element1",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "deal",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
            ],
          },
          {
            id: 2,
            name: "Element1",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Lead Status",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
            ],
          },
          {
            id: 2,
            name: "Element1",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Deal status",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
            ],
          },
          {
            id: 2,
            name: "Element1",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Convert Lead to Deal",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
            ],
          },
          {
            id: 2,
            name: "Element1",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Edit Lead",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
            ],
          },
          {
            id: 2,
            name: "Element1",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
    ],
  },

  setSelectedModule: (module) => set({ selectedModule: module }),

  //components
  selectedComponent: {
    id: 1,
    name: "Lead",
    addedBy: "Riadus Salehin",
    lastUpdateBy: "Riadus Salehin",
    createdAt: "10th Oct 2023",
    moduleDirectoryPath: "localhost/phpmyadmin/index.php",
    description:
      "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
    elements: [
      {
        id: 1,
        name: "Lead Creation Form",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        functions: [
          {
            id: 1,
            name: "Lead Create Function",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
          },
          {
            id: 2,
            name: "Function2",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
          },
        ],
      },
      {
        id: 2,
        name: "Element1",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        functions: [
          { id: 1, name: "Function1" },
          { id: 2, name: "Function2" },
        ],
      },
    ],
  },
  setSelectedComponent: (component) => set({ selectedComponent: component }),

  //elements
  selectedElement: {
    id: 1,
    name: "Lead Creation Form",
    addedBy: "Riadus Salehin",
    lastUpdateBy: "Riadus Salehin",
    createdAt: "10th Oct 2023",
    moduleDirectoryPath: "localhost/phpmyadmin/index.php",
    description:
      "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
    functions: [
      {
        id: 1,
        name: "Lead Create Function",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
      },
      {
        id: 2,
        name: "Function2",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
      },
    ],
  },

  setSelectedElement: (element) => set({ selectedElement: element }),

  //functions
  selectedFunction: {
    id: 1,
    name: "Lead Create Function",
    addedBy: "Riadus Salehin",
    lastUpdateBy: "Riadus Salehin",
    createdAt: "10th Oct 2023",
    moduleDirectoryPath: "localhost/phpmyadmin/index.php",
    description:
      "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
    functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
    functionLog: [
      {
        id: 1,
        functionDirectoryPath: "localhost/phpmyadmin/index.php",
        updateBy: "Riadus Salehin",
        updatedAt: "10th Oct 2023",
        functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
      },
      {
        id: 2,
        functionDirectoryPath: "localhost/phpmyadmin/index.php",
        updateBy: "Abu Sayeed",
        updatedAt: "10th Oct 2023",
        functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
      },
      {
        id: 3,
        functionDirectoryPath: "localhost/phpmyadmin/index.php",
        updateBy: "Raihan Ali",
        updatedAt: "10th Oct 2023",
        functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
      },
      {
        id: 4,
        functionDirectoryPath: "localhost/phpmyadmin/index.php",
        updateBy: "Abu Sayeed",
        updatedAt: "10th Oct 2023",
        functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
      },
      {
        id: 5,
        functionDirectoryPath: "localhost/phpmyadmin/index.php",
        updateBy: "Raihan Ali",
        updatedAt: "10th Oct 2023",
        functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
      },
    ],
  },

  setSelectedFunction: (fn) => set({ selectedFunction: fn }),
}));

export default useModuleStore;

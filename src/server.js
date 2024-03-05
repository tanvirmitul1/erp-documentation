// /* eslint-disable no-useless-escape */
// // src/server.js
// import { createServer, Model } from "miragejs";

// export function makeServer({ environment = "development" } = {}) {
//   let server = createServer({
//     environment,

//     models: {
//       module: Model,
//       component: Model,
//       element: Model,
//       function: Model,
//     },

//     seeds(server) {
//       // Module 1
//       server.create("module", {
//         id: 1,
//         name: "Sales Module",
//         addedBy: "Riadus Salehin",
//         lastUpdateBy: "Riadus Salehin",
//         lastUpdateAt: "10th Oct 2023",
//         createdAt: "10th Oct 2023 08:45:56 PM",
//         moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//         description:
//           "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",

//         components: [
//           {
//             id: 1,
//             name: "Lead",
//             addedBy: "Riadus Salehin",
//             lastUpdateBy: "Riadus Salehin",
//             createdAt: "10th Oct 2023",
//             moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//             description:
//               "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//             elements: [
//               {
//                 id: 1,
//                 name: "Lead Creation Form",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   {
//                     id: 1,
//                     name: "Lead Create Function",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                     functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
//                     functionLog: [
//                       {
//                         id: 1,
//                         functionDirectoryPath: "localhost/phpmyadmin/index.php",
//                         updateBy: "Riadus Salehin",
//                         updatedAt: "10th Oct 2023",
//                         functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
//                         description:
//                           "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                       },
//                       {
//                         id: 2,
//                         functionDirectoryPath: "localhost/phpmyadmin/index.php",
//                         updateBy: "Abu Sayeed",
//                         updatedAt: "10th Oct 2023",
//                         functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
//                         description:
//                           "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                       },
//                       {
//                         id: 3,
//                         functionDirectoryPath: "localhost/phpmyadmin/index.php",
//                         updateBy: "Raihan Ali",
//                         updatedAt: "10th Oct 2023",
//                         functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
//                         description:
//                           "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                       },
//                       {
//                         id: 4,
//                         functionDirectoryPath: "localhost/phpmyadmin/index.php",
//                         updateBy: "Abu Sayeed",
//                         updatedAt: "10th Oct 2023",
//                         functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
//                         description:
//                           "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                       },
//                       {
//                         id: 5,
//                         functionDirectoryPath: "localhost/phpmyadmin/index.php",
//                         updateBy: "Raihan Ali",
//                         updatedAt: "10th Oct 2023",
//                         functionCode: `import { Navigate } from "react-router-dom"; import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { Box, Grid, GridItem } from "@chakra-ui/react"; import NavBar from "./components/common/Navbar"; import SideBar from "./components/common/Sidebar"; import MainComponent from "./components/common/MainComponent"; import Register from "./pages/Register"; import Login from "./pages/Login"; function App() { const user = true; return ( <Router> <Box height="100vh" overflow="hidden"> <Grid templateAreas={"nav nav nav " "sidebar home home"} templateColumns="250px 1fr" > <GridItem area="nav">{user && <NavBar />}</GridItem> <GridItem area="sidebar">{user && <SideBar />}</GridItem> <GridItem area="home"> <Routes> <Route path="register" element={<Register />} /> <Route path="login" element={<Login />} /> <Route path="/module/:moduleId/*" element={ <PrivateRouteForRole role="admin"> <MainComponent /> </PrivateRouteForRole> } /> </Routes> </GridItem> </Grid> </Box> </Router> ); } const PrivateRouteForRole = ({ children, role }) => { const userRole = "admin"; if (userRole === role) { return children; } else { return <Navigate to="/login" />; } }; export default App; `,
//                         description:
//                           "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                       },
//                     ],
//                   },
//                   {
//                     id: 2,
//                     name: "Function2",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                     functionCode: ` <?php namespace App\Http\Controllers; use App\Models\Lead; use App\Models\User; use App\Helper\Files; use App\Helper\Reply; use App\Models\Country; use App\Models\Invoice; use App\Models\Project; use App\Models\BaseModel; use App\Models\ClientNote; use App\Models\ContractType; use Illuminate\Http\Request; use App\Imports\ClientImport; use App\Jobs\ImportClientJob; use App\Models\ClientDetails; use App\Models\ClientCategory; use App\Models\PurposeConsent; use App\Models\UniversalSearch; use App\Models\ClientSubCategory; use App\Models\PurposeConsentUser; use Illuminate\Support\Facades\DB; use App\DataTables\TicketDataTable; use Illuminate\Support\Facades\Bus; use App\DataTables\ClientsDataTable; use Maatwebsite\Excel\Facades\Excel; use App\DataTables\InvoicesDataTable; use App\DataTables\PaymentsDataTable; use App\DataTables\ProjectsDataTable; use App\DataTables\EstimatesDataTable; use Illuminate\Support\Facades\Config; use App\DataTables\ClientGDPRDataTable; use Illuminate\Support\Facades\Artisan; use Maatwebsite\Excel\HeadingRowImport; use App\DataTables\ClientNotesDataTable; use App\DataTables\CreditNotesDataTable; use App\DataTables\ClientContactsDataTable; use App\DataTables\ClientDealDataTable; use Maatwebsite\Excel\Imports\HeadingRowFormatter; use App\Http\Requests\Admin\Employee\ImportRequest; use App\Http\Requests\Admin\Client\StoreClientRequest; use App\Http\Requests\Gdpr\SaveConsentUserDataRequest; use App\Http\Requests\Admin\Client\UpdateClientRequest; use App\Http\Requests\Admin\Employee\ImportProcessRequest; use App\Models\ClientDeal; use App\Models\LanguageSetting; use App\Models\Payment; use Google\Service\Dfareporting\Resource\Languages; use Google\Service\Gmail\LanguageSettings; class ClientController extends AccountBaseController { public function __construct() { parent::__construct(); $this->pageTitle = 'app.menu.clients'; $this->middleware(function ($request, $next) { abort_403(!in_array('clients', $this->user->modules)); return $next($request); }); } /** * client list * * @return \Illuminate\Http\Response */ public function index(ClientsDataTable $dataTable) { $viewPermission = user()->permission('view_clients'); $this->addClientPermission = user()->permission('add_clients'); abort_403(!in_array($viewPermission, ['all', 'added', 'both'])); if (!request()->ajax()) { $this->clients = User::allClients(); $this->subcategories = ClientSubCategory::all(); $this->categories = ClientCategory::all(); $this->projects = Project::all(); $this->contracts = ContractType::all(); $this->countries = countries(); $this->totalClients = count($this->clients); } return $dataTable->render('clients.index', $this->data); } /** * XXXXXXXXXXX * * @return \Illuminate\Http\Response */ public function create($leadID = null) { $this->addPermission = user()->permission('add_clients'); abort_403 (!($this->addPermission == 'all' || $this->addPermission == 'added' || $this->addPermission == 'both')); if ($leadID) { $this->leadDetail = Lead::findOrFail($leadID); } if (request('lead') != '') { $this->leadId = request('lead'); $this->type = 'lead'; $this->lead = Lead::findOrFail($this->leadId); } $this->pageTitle = __('app.add') . ' ' . __('app.client'); $this->countries = countries(); $this->categories = ClientCategory::all(); $this->salutations = ['mr', 'mrs', 'miss', 'dr', 'sir', 'madam']; $this->languages = LanguageSetting::where('status', 'enabled')->get(); $client = new ClientDetails(); if (!empty($client->getCustomFieldGroupsWithFields())) { $this->fields = $client->getCustomFieldGroupsWithFields()->fields; } if (request()->ajax()) { if (request('quick-form') == 1) { return view('clients.ajax.quick_create', $this->data); } $html = view('clients.ajax.create', $this->data)->render(); return Reply::dataOnly(['status' => 'success', 'html' => $html, 'title' => $this->pageTitle]); } $this->view = 'clients.ajax.create'; return view('clients.create', $this->data); } /** * XXXXXXXXXXX * * @return array */ public function store(StoreClientRequest $request) { $client = new ClientDetails(); $client_note = new ClientNote(); DB::beginTransaction(); $data = $request->all(); unset($data['country']); $data['password'] = bcrypt($request->password); $data['country_id'] = $request->country; $data['name'] = $request->name; $data['email_notifications'] = $request->sendMail == 'yes' ? 1 : 0; $data['gender'] = $request->gender ?? null; $data['locale'] = $request->locale; if ($request->has('telegram_user_id')) { $data['telegram_user_id'] = $request->telegram_user_id; } if ($request->hasFile('image')) { $data['image'] = Files::upload($request->image, 'avatar', 300); } $user = User::create($data); $user->clientDetails()->create($data); $client_id = $client->latest()->first()->user_id; if ($request->has('note')) { $client_note->title = 'Note'; $client_note->client_id = $client_id; $client_note->details = $request->note; $client_note->save(); } // To add custom fields data if ($request->get('custom_fields_data')) { $client = $user->clientDetails; $client->updateCustomFieldData($request->get('custom_fields_data')); } $user->attachRole(3); $user->assignUserRolePermission(3); // Log search $this->logSearchEntry($user->id, $user->name, 'clients.show', 'client'); if (!is_null($user->email)) { $this->logSearchEntry($user->id, $user->email, 'clients.show', 'client'); } if (!is_null($user->clientDetails->company_name)) { $this->logSearchEntry($user->id, $user->clientDetails->company_name, 'clients.show', 'client'); } if ($request->has('lead')) { $lead = Lead::findOrFail($request->lead); $lead->client_id = $user->id; $lead->save(); } DB::commit(); $redirectUrl = urldecode($request->redirect_url); if ($redirectUrl == '') { $redirectUrl = route('clients.index'); } if ($request->has('ajax_create')) { $teams = User::allClients(); $teamData = ''; foreach ($teams as $team) { $selected = ($team->id == $user->id) ? 'selected' : ''; $teamData .= '<option '.$selected.' value="' . $team->id . '"> ' . mb_ucwords($team->name) . ' </option>'; } return Reply::successWithData(__('messages.clientAdded'), ['teamData' => $teamData, 'redirectUrl' => $redirectUrl]); } return Reply::successWithData(__('messages.clientAdded'), ['redirectUrl' => $redirectUrl]); } /** * XXXXXXXXXXX * * @return \Illuminate\Http\Response */ public function edit($id) { $this->client = User::withoutGlobalScope('active')->with('clientDetails')->findOrFail($id); $this->editPermission = user()->permission('edit_clients'); abort_403 (!($this->editPermission == 'all' || ($this->editPermission == 'added' && $this->client->clientDetails->added_by == user()->id) || ($this->editPermission == 'both' && $this->client->clientDetails->added_by == user()->id))); $this->countries = countries(); $this->categories = ClientCategory::all(); if ($this->editPermission == 'all') { $this->employees = User::allEmployees(); } $this->pageTitle = __('app.update') . ' ' . __('app.client'); $this->salutations = ['mr', 'mrs', 'miss', 'dr', 'sir', 'madam']; $this->languages = LanguageSetting::where('status', 'enabled')->get(); if (!is_null($this->client->clientDetails)) { $this->clientDetail = $this->client->clientDetails->withCustomFields(); if (!empty($this->clientDetail->getCustomFieldGroupsWithFields())) { $this->fields = $this->clientDetail->getCustomFieldGroupsWithFields()->fields; } } $this->subcategories = isset($this->client->clientDetails) && !is_null($this->client->clientDetails->category_id) ? ClientSubCategory::where('category_id', $this->client->clientDetails->category_id)->get() : []; if (request()->ajax()) { $html = view('clients.ajax.edit', $this->data)->render(); return Reply::dataOnly(['status' => 'success', 'html' => $html, 'title' => $this->pageTitle]); } $this->view = 'clients.ajax.edit'; return view('clients.create', $this->data); } /** * XXXXXXXXXXX * * @return \Illuminate\Http\Response */ public function update(UpdateClientRequest $request, $id) { $user = User::withoutGlobalScope('active')->findOrFail($id); $data = $request->all(); unset($data['password']); unset($data['country']); if ($request->password != '') { $data['password'] = bcrypt($request->password); } $data['country_id'] = $request->country; if ($request->has('sendMail')) { $user->email_notifications = $request->sendMail == 'yes' ? 1 : 0; } if ($request->has('telegram_user_id')) { $data['telegram_user_id'] = $request->telegram_user_id; } if ($request->image_delete == 'yes') { Files::deleteFile($user->image, 'avatar'); $data['image'] = null; } if ($request->hasFile('image')) { Files::deleteFile($user->image, 'avatar'); $data['image'] = Files::upload($request->image, 'avatar', 300); } $user->update($data); if ($user->clientDetails) { $data['category_id'] = $request->category_id; $data['sub_category_id'] = $request->sub_category_id; $data['note'] = str_replace('<p><br></p>', '', trim($request->note)); $data['locale'] = $request->locale; $fields = $request->only($user->clientDetails->getFillable()); $user->clientDetails->fill($fields); $user->clientDetails->save(); } else { $user->clientDetails()->create($data); } // To add custom fields data if ($request->get('custom_fields_data')) { $user->clientDetails->updateCustomFieldData($request->get('custom_fields_data')); } $redirectUrl = urldecode($request->redirect_url); if ($redirectUrl == '') { $redirectUrl = route('clients.index'); } return Reply::successWithData(__('messages.updateSuccess'), ['redirectUrl' => $redirectUrl]); } /** * Remove the specified resource from storage. * * @param  int  $id * @return \Illuminate\Http\Response */ public function destroy($id) { $this->client = User::withoutGlobalScope('active')->with('clientDetails')->findOrFail($id); $this->deletePermission = user()->permission('delete_clients'); abort_403 ( !($this->deletePermission == 'all' || ($this->deletePermission == 'added' && $this->client->clientDetails->added_by == user()->id) || ($this->deletePermission == 'both' && $this->client->clientDetails->added_by == user()->id) ) ); $universalSearches = UniversalSearch::where('searchable_id', $id)->where('module_type', 'client')->get(); if ($universalSearches) { foreach ($universalSearches as $universalSearch) { UniversalSearch::destroy($universalSearch->id); } } User::withoutGlobalScope('active')->where('id', $id)->delete(); return Reply::success(__('messages.clientDeleted')); } /** * XXXXXXXXXXX * * @return 'delete': $this->deleteRecords($request); return Reply::success(__('messages.deleteSuccess')); case 'change-status': $this->changeStatus($request); return Reply::success(__('messages.statusUpdatedSuccessfully')); default: return Reply::error(__('messages.selectAction')); } } protected function deleteRecords($request) { abort_403 (!(user()->permission('delete_clients') == 'all')); User::withoutGlobalScope('active')->whereIn('id', explode(',', $request->row_ids))->delete(); return true; } protected function changeStatus($request) { abort_403 (!(user()->permission('edit_clients') == 'all')); User::withoutGlobalScope('active') ->whereIn('id', explode(',', $request->row_ids)) ->update(['status' => $request->status]); return true; } /** * Display the specified resource. * * @param  int  $id * @return \Illuminate\Http\Response */ public function show($id) { $this->client = User::withoutGlobalScope('active')->with('clientDetails')->findOrFail($id); $this->clientLanguage = LanguageSetting::where('language_code', $this->client->locale)->first(); $this->viewPermission = user()->permission('view_clients'); if (!$this->client->hasRole('client')) { abort(404); } abort_403 (!($this->viewPermission == 'all' || ($this->viewPermission == 'added' && $this->client->clientDetails->added_by == user()->id) || ($this->viewPermission == 'both' && $this->client->clientDetails->added_by == user()->id))); $this->pageTitle = ucfirst($this->client->name); $this->clientStats = $this->clientStats($id); $this->projectChart = $this->projectChartData($id); $this->invoiceChart = $this->invoiceChartData($id); $this->earningTotal = Payment::leftJoin('invoices', 'invoices.id', '=', 'payments.invoice_id') ->leftJoin('projects', 'projects.id', '=', 'payments.project_id') ->where(function ($q) use ($id) { $q->where('invoices.client_id', $id); $q->orWhere('projects.client_id', $id); })->sum('amount'); $this->view = 'clients.ajax.profile'; $tab = request('tab'); switch ($tab) { case 'profile': $this->clientDetail = ClientDetails::where('user_id', '=', $this->client->id)->first(); if (!is_null($this->clientDetail)) { $this->clientDetail = $this->clientDetail->withCustomFields(); if (!empty($this->clientDetail->getCustomFieldGroupsWithFields())) { $this->fields = $this->clientDetail->getCustomFieldGroupsWithFields()->fields; } } $this->view = 'clients.ajax.profile'; break; case 'projects': return $this->projects(); case 'deals': return $this->deals(); break; case 'invoices': return $this->invoices(); case 'payments': return $this->payments(); case 'estimates': return $this->estimates(); case 'creditnotes': return $this->creditnotes(); case 'contacts': return $this->contacts(); case 'documents': $this->view = 'clients.ajax.documents'; break; case 'notes': return $this->notes(); case 'tickets': return $this->tickets(); case 'gdpr': $this->client = User::withoutGlobalScope('active')->findOrFail($id); $this->consents = PurposeConsent::with(['user' => function ($query) use ($id) { $query->where('client_id', $id) ->orderBy('created_at', 'desc'); }])->get(); return $this->gdpr(); default: $this->clientDetail = ClientDetails::where('user_id', '=', $this->client->id)->first(); if (!is_null($this->clientDetail)) { $this->clientDetail = $this->clientDetail->withCustomFields(); if (!empty($this->clientDetail->getCustomFieldGroupsWithFields())) { $this->fields = $this->clientDetail->getCustomFieldGroupsWithFields()->fields; } } $this->view = 'clients.ajax.profile'; break; } if (request()->ajax()) { $html = view($this->view, $this->data)->render(); return Reply::dataOnly(['status' => 'success', canceled'), __('app.finished')]; $data['colors'] = ['#1d82f5', '#FCBD01', '#616e80', '#D30000', '#2CB100']; $data['values'] = []; foreach ($labels as $label) { $data['values'][] = Project::where('client_id', $id)->where('status', invoiceChartData($id) { $labels = ['paid', 'unpaid', 'partial', 'canceled', 'draft']; $data['labels'] = [__('app.paid'), __('app.unpaid'), __('app.partial'), __('app.canceled'), __('app.draft')]; $data['colors'] = ['#2CB100', '#FCBD01',  = new ClientContactsDataTable(); $tab = request('tab'); ($tab == '') ? $this->activeTab = 'profile' : $this->activeTab = $tab; $this->view = 'clients.ajax.contacts'; return $dataTable->render('clients.show', $this->data); } public function notes() { $dataTable = new ClientNotesDataTable(); $viewPermission = user()->permission('view_clients'); abort_403 (!($viewPermission == 'all' || $viewPermission == 'added' || $viewPermission == 'both')); $tab = request('tab'); ($tab == '') ? $this->activeTab = 'profile' : $this->activeTab = $tab; $this->view = 'clients.ajax.notes'; return $dataTable->render('clients.show', $this->data); } public function tickets() { $dataTable = new TicketDataTable(); $viewPermission = user()->permission('view_clients'); abort_403 (!($viewPermission == 'all' || $viewPermission == 'added' || $viewPermission == 'both')); $tab = request('tab'); ($tab == '') ? $this->activeTab = 'profile' : $this->activeTab = $tab; $this->view = 'clients.ajax.tickets'; return $dataTable->render('clients.show', $this->data); } public function gdpr() { $dataTable = new ClientGDPRDataTable(); $tab = request('tab'); ($tab == '') ? $this->activeTab = 'gdpr' : $this->activeTab = $tab; $this->view = 'clients.ajax.gdpr'; return $dataTable->render('clients.show', $this->data); } public function consent(Request $request) { $clientId = $request->clientId; $this->consentId = $request->consentId; $this->clientId = $clientId; $this->consent = PurposeConsent::with(['user' => function ($query) use ($request) { $query->where('client_id', $request->clientId) ->orderBy('created_at', 'desc'); }]) ->where('id', $request->consentId) ->first(); return view('clients.gdpr.consent-form', $this->data); } public function saveClientConsent(SaveConsentUserDataRequest $request, $id) { $user = User::findOrFail($id); $consent = PurposeConsent::findOrFail($request->consent_id); if `,
//                   },
//                 ],
//               },
//               {
//                 id: 2,
//                 name: "Element1",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   { id: 1, name: "Function1" },
//                   { id: 2, name: "Function2" },
//                 ],
//               },
//             ],
//           },
//           {
//             id: 2,
//             name: "deal",
//             addedBy: "Riadus Salehin",
//             lastUpdateBy: "Riadus Salehin",
//             createdAt: "10th Oct 2023",
//             moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//             description:
//               "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//             elements: [
//               {
//                 id: 1,
//                 name: "Lead Creation Form",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   {
//                     id: 1,
//                     name: "Lead Create Function",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                   },
//                   {
//                     id: 2,
//                     name: "Function2",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                   },
//                 ],
//               },
//               {
//                 id: 2,
//                 name: "Element1",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   { id: 1, name: "Function1" },
//                   { id: 2, name: "Function2" },
//                 ],
//               },
//             ],
//           },
//           {
//             id: 3,
//             name: "Lead Status",
//             addedBy: "Riadus Salehin",
//             lastUpdateBy: "Riadus Salehin",
//             createdAt: "10th Oct 2023",
//             moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//             description:
//               "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//             elements: [
//               {
//                 id: 1,
//                 name: "Lead Creation Form",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   {
//                     id: 1,
//                     name: "Lead Create Function",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                   },
//                   {
//                     id: 2,
//                     name: "Function2",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                   },
//                 ],
//               },
//               {
//                 id: 2,
//                 name: "Element1",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   { id: 1, name: "Function1" },
//                   { id: 2, name: "Function2" },
//                 ],
//               },
//             ],
//           },
//           {
//             id: 4,
//             name: "Deal status",
//             addedBy: "Riadus Salehin",
//             lastUpdateBy: "Riadus Salehin",
//             createdAt: "10th Oct 2023",
//             moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//             description:
//               "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//             elements: [
//               {
//                 id: 1,
//                 name: "Lead Creation Form",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   {
//                     id: 1,
//                     name: "Lead Create Function",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                   },
//                   {
//                     id: 2,
//                     name: "Function2",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                   },
//                 ],
//               },
//               {
//                 id: 2,
//                 name: "Element1",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   { id: 1, name: "Function1" },
//                   { id: 2, name: "Function2" },
//                 ],
//               },
//             ],
//           },
//           {
//             id: 5,
//             name: "Convert Lead to Deal",
//             addedBy: "Riadus Salehin",
//             lastUpdateBy: "Riadus Salehin",
//             createdAt: "10th Oct 2023",
//             moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//             description:
//               "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//             elements: [
//               {
//                 id: 1,
//                 name: "Lead Creation Form",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   {
//                     id: 1,
//                     name: "Lead Create Function",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                   },
//                   {
//                     id: 2,
//                     name: "Function2",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                   },
//                 ],
//               },
//               {
//                 id: 2,
//                 name: "Element1",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   { id: 1, name: "Function1" },
//                   { id: 2, name: "Function2" },
//                 ],
//               },
//             ],
//           },
//           {
//             id: 6,
//             name: "Edit Lead",
//             addedBy: "Riadus Salehin",
//             lastUpdateBy: "Riadus Salehin",
//             createdAt: "10th Oct 2023",
//             moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//             description:
//               "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//             elements: [
//               {
//                 id: 1,
//                 name: "Lead Creation Form",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   {
//                     id: 1,
//                     name: "Lead Create Function",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                   },
//                   {
//                     id: 2,
//                     name: "Function2",
//                     addedBy: "Riadus Salehin",
//                     lastUpdateBy: "Riadus Salehin",
//                     createdAt: "10th Oct 2023",
//                     moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                     description:
//                       "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                   },
//                 ],
//               },
//               {
//                 id: 2,
//                 name: "Element1",
//                 addedBy: "Riadus Salehin",
//                 lastUpdateBy: "Riadus Salehin",
//                 createdAt: "10th Oct 2023",
//                 moduleDirectoryPath: "localhost/phpmyadmin/index.php",
//                 description:
//                   "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
//                 functions: [
//                   { id: 1, name: "Function1" },
//                   { id: 2, name: "Function2" },
//                 ],
//               },
//             ],
//           },
//         ],
//       });

//       // Module 2
//       server.create("module", {
//         id: 2,
//         name: "Module2",
//         components: [
//           {
//             id: 1,
//             name: "Component1",
//             elements: [
//               {
//                 id: 1,
//                 name: "Element1",
//                 functions: [
//                   { id: 1, name: "Function1" },
//                   { id: 2, name: "Function2" },
//                 ],
//               },
//             ],
//           },
//         ],
//       });

//       // Module 3
//       server.create("module", {
//         id: 3,
//         name: "Module3",
//         components: [
//           {
//             id: 1,
//             name: "Component1",
//             elements: [
//               {
//                 id: 1,
//                 name: "Element1",
//                 functions: [
//                   { id: 1, name: "Function1" },
//                   { id: 2, name: "Function2" },
//                 ],
//               },
//             ],
//           },
//         ],
//       });

//       // Module 4
//       server.create("module", {
//         id: 4,
//         name: "Module4",
//         components: [
//           {
//             id: 1,
//             name: "Component1",
//             elements: [
//               {
//                 id: 1,
//                 name: "Element1",
//                 functions: [
//                   { id: 1, name: "Function1" },
//                   { id: 2, name: "Function2" },
//                 ],
//               },
//             ],
//           },
//         ],
//       });

//       // Module 5
//       server.create("module", {
//         id: 5,
//         name: "Module5",
//         components: [
//           {
//             id: 1,
//             name: "Component1",
//             elements: [
//               {
//                 id: 1,
//                 name: "Element1",
//                 functions: [
//                   { id: 1, name: "Function1" },
//                   { id: 2, name: "Function2" },
//                 ],
//               },
//             ],
//           },
//         ],
//       });
//     },
//     routes() {
//       this.namespace = "api";

//       this.get("/modules", (schema) => {
//         return schema.db.modules; // Assuming you want to return all modules
//       });
//     },
//   });

//   return server;
// }

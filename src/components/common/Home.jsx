// import { Grid, GridItem, Box } from "@chakra-ui/react";
// import Sidebar from "./Sidebar";
// import MainComponent from "../mainContent/MainComponent";
// import useColorModeColors from "../../hooks/useColorModeColors";

// function Home() {
//   const { boxShadowColor } = useColorModeColors();
//   return (
//     <Box>
//       <Grid
//         templateAreas={`"left main"
//       `}
//         gridTemplateColumns={"250px 7fr"}
//         paddingX={6}
//       >
//         <GridItem
//           h="100vh"
//           overflow="scroll"
//           area="left"
//           boxShadow={`5px 0 5px -5px ${boxShadowColor}, -5px 0 5px -5px ${boxShadowColor}`}
//           p="6"
//         >
//           <Sidebar />
//         </GridItem>

//         <GridItem
//           area="main"
//           paddingLeft="12px"
//           paddingTop="10px"
//           rounded="md"
//           overflowX="auto"
//         >
//           <MainComponent />
//         </GridItem>
//       </Grid>
//     </Box>
//   );
// }

// export default Home;

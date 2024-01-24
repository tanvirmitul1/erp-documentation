import { Grid, GridItem, Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import MainComponent from "../mainContent/MainComponent";
import { useColorMode } from "@chakra-ui/react";
function Home() {
  const { colorMode } = useColorMode();
  const boxShadowColor =
    colorMode === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(256, 256, 256, 0.2)";
  return (
    <Box>
      <Grid
        templateAreas={`"left main"
      `}
        gridTemplateColumns={"250px 1fr"}
        paddingX={6}
      >
        <GridItem
          h="100vh"
          overflow="scroll"
          area="left"
          boxShadow={`5px 0 5px -5px ${boxShadowColor}, -5px 0 5px -5px ${boxShadowColor}`}
          p="6"
        >
          <Sidebar />
        </GridItem>

        <GridItem area="main" p="2" rounded="md">
          <MainComponent />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Home;

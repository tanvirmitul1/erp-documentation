import { Grid, GridItem, Box } from "@chakra-ui/react";
import Sidebar from "../components/common/Sidebar";
import MainComponent from "../components/mainContent/MainComponent";
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
        gridTemplateColumns={"1fr 7fr"}
        paddingX={12}
      >
        <GridItem
          area="left"
          boxShadow={`5px 0 5px -5px ${boxShadowColor}, -5px 0 5px -5px ${boxShadowColor}`}
          p="6"
        >
          <Sidebar />
        </GridItem>

        <GridItem area="main" p="6" rounded="md">
          <MainComponent />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Home;

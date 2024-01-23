import { Grid, GridItem, Box } from "@chakra-ui/react";
import Sidebar from "../components/common/Sidebar";
import MainComponent from "../components/mainContent/MainComponent";

function Home() {
  return (
    <Box>
      <Grid
        templateAreas={`"left main"
      `}
        gridTemplateColumns={"1fr 7fr"}
        paddingX={12}
      >
        <GridItem area="left">
          <Sidebar />
        </GridItem>

        <GridItem area="main">
          <MainComponent />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Home;

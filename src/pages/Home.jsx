import { Grid, GridItem, Box } from "@chakra-ui/react";
import Sidebar from "../components/common/Sidebar";
import MainComponent from "../components/mainContent/MainComponent";

function Home() {
  return (
    <Box>
      <Grid templateAreas={`"left main main main main"`}>
        <GridItem area="left" border="1px solid red">
          <Sidebar />
        </GridItem>

        <GridItem area="main" border="1px solid red">
          <MainComponent />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Home;

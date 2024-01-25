/* eslint-disable no-unused-vars */
import {
  Text,
  Box,
  Flex,
  VStack,
  HStack,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import useModuleStore from "../../../zustand/store";
import UpdateButton from "../../reusable/UpdateButton";
import CustomButton from "../../reusable/CustomButton";

const Header = () => {
  const { colorMode } = useColorMode();
  const { selectedModule } = useModuleStore();
  const textColor = colorMode === "light" ? "white" : "black";
  const handleButtonClick = () => {
    console.log("button clicked");
  };
  return (
    <Box>
      <Text as="h1">{selectedModule.name}</Text>
      <Flex flexDirection="row" gap="3px">
       
        <Text fontWeight="bold">Added By:</Text>
        <Text> {selectedModule.addedBy}</Text>
      </Flex>
      <Text> Module Directory Path: {selectedModule.moduleDirectoryPath}</Text>
      <Text>{selectedModule.createdAt}</Text>
      <Text>{selectedModule.lastUpdateBy}</Text>
      <Text>{selectedModule.description}</Text>
      <UpdateButton
        width="220px"
        text={`Update ${selectedModule.name}`}
        onClick={handleButtonClick}
        textColor={textColor}
      />
      <CustomButton
        text="Add New Component"
        onClick={handleButtonClick}
        textColor={textColor}
      />
    </Box>
  );
};

export default Header;

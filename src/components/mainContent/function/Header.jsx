/* eslint-disable no-unused-vars */
import {
  Text,
  Box,
  Flex,
  VStack,
  HStack,
  Stack,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import useModuleStore from "../../../zustand/store";
import UpdateButton from "../../reusable/UpdateButton";
import AddButton from "../../reusable/AddButton";

import CustomDescription from "../../reusable/Description";
import useColorModeColors from "../../../hooks/useColorModeColors";

const Header = () => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();
  const { selectedFunction } = useModuleStore();

  const handleButtonClick = () => {
    console.log("button clicked");
  };
  return (
    <Box borderBottom="1px solid rgb(197, 184, 184)" paddingBottom="30px">
      <Flex flexDirection="row" justifyContent="space-between">
        <VStack align="left" marginTop="auto">
          <Flex alignItems="center" gap="4px">
            <Text as="h2">{selectedFunction.name}</Text>
            <HStack marginTop="26px">
              <Text>Added By:</Text>
              <Text color={modulePathColor}> {selectedFunction.addedBy}</Text>
            </HStack>
          </Flex>

          <Flex
            alignItems="center"
            gap="5px"
            backgroundColor={modulePathBgColor}
            paddingX="20px"
            paddingTop="10px"
            height="40px"
            rounded="50px"
          >
            <Text fontWeight="bold">Module Directory Path:</Text>{" "}
            <Text color={modulePathColor}>
              {" "}
              {selectedFunction.moduleDirectoryPath}
            </Text>
          </Flex>
        </VStack>

        <Flex flexDir="column">
          <div style={{ display: "flex", gap: "4px" }}>
            <Text>Created At:</Text>
            <Text>{selectedFunction.createdAt}</Text>
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Text>Last Updated At:</Text>
            <Text>{selectedFunction.lastUpdateAt}</Text>
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Text>last Updated By:</Text>
            <Text color={modulePathColor}>{selectedFunction.lastUpdateBy}</Text>
          </div>

          <UpdateButton
            text={`Update ${selectedFunction.name}`}
            onClick={handleButtonClick}
            textColor={moduleTextColor}
          />
        </Flex>
      </Flex>

      <Text marginTop="12px">
        <CustomDescription
          description={selectedFunction.description}
          word={500}
        />
      </Text>
      <AddButton text="Add New Component" onClick={handleButtonClick} />
    </Box>
  );
};

export default Header;
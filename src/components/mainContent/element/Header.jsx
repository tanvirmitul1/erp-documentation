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
import FunctionModal from "../../modal/FunctionModal";
import CustomDescription from "../../reusable/Description";
import useColorModeColors from "../../../hooks/useColorModeColors";
import React from "react";

const Header = () => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();
  const { selectedElement } = useModuleStore();

  const handleButtonClick = () => {
    console.log("button clicked");
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleCreateFunctionButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Box
      borderBottom="1px solid rgb(197, 184, 184)"
      paddingBottom="30px"
      marginX="20px"
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <VStack align="left" marginTop="auto">
          <Flex gap="4px">
            <Text h="20px" as="h3">
              {selectedElement.name}
            </Text>
            <Flex marginTop="10px">
              <Text h="20px">Added By:</Text>
              <Text h="20px" color={modulePathColor}>
                {" "}
                {selectedElement.addedBy}
              </Text>
            </Flex>
          </Flex>

          <Flex
            flexDirection={{ base: "column", md: "row" }}
            gap="5px"
            backgroundColor={modulePathBgColor}
            paddingX="40px"
            paddingTop="10px"
            paddingBottom={2}
            rounded="50px"
          >
            <Text h="10px" fontWeight="bold">
              Module Directory Path:
            </Text>{" "}
            <Text h="10px" color={modulePathColor}>
              {" "}
              {selectedElement.moduleDirectoryPath}
            </Text>
          </Flex>
        </VStack>

        <Flex flexDir="column" textAlign="center">
          <Flex h="25px">
            <Text>Created At:</Text>
            <Text>{selectedElement.createdAt}</Text>
          </Flex>
          <Flex h="25px">
            <Text>Last Updated At:</Text>
            <Text>{selectedElement.lastUpdateAt}</Text>
          </Flex>
          <Flex h="30px">
            <Text>last Updated By:</Text>
            <Text color={modulePathColor}>{selectedElement.lastUpdateBy}</Text>
          </Flex>

          <UpdateButton
            text={`Update ${selectedElement.name}`}
            onClick={handleButtonClick}
            textColor={moduleTextColor}
          />
        </Flex>
      </Flex>

      <Text marginTop="12px">
        <CustomDescription
          description={selectedElement.description}
          word={500}
        />
      </Text>
      <AddButton
        text="Add New Function"
        onClick={handleCreateFunctionButtonClick}
      />
      <FunctionModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </Box>
  );
};

export default Header;

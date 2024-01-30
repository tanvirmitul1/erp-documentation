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

import React from "react";
import ElementModal from "../../modal/ElementModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleCreateElementButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();
  const { selectedComponent } = useModuleStore();

  const handleButtonClick = () => {
    console.log("button clicked");
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
              {selectedComponent.name}
            </Text>
            <Flex marginTop="10px">
              <Text h="20px">Added By:</Text>
              <Text h="20px" color={modulePathColor}>
                {" "}
                {selectedComponent.addedBy}
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
              Component Directory Path:
            </Text>{" "}
            <Text h="10px" color={modulePathColor}>
              {" "}
              {selectedComponent.moduleDirectoryPath}
            </Text>
          </Flex>
        </VStack>

        <Flex flexDir="column" textAlign="center">
          <Flex h="25px">
            <Text>Created At:</Text>
            <Text>{selectedComponent.createdAt}</Text>
          </Flex>
          <Flex h="25px">
            <Text>Last Updated At:</Text>
            <Text>{selectedComponent.lastUpdateAt}</Text>
          </Flex>
          <Flex h="30px">
            <Text>last Updated By:</Text>
            <Text color={modulePathColor}>
              {selectedComponent.lastUpdateBy}
            </Text>
          </Flex>

          <UpdateButton
            text={`Update ${selectedComponent.name}`}
            onClick={handleButtonClick}
            textColor={moduleTextColor}
          />
        </Flex>
      </Flex>

      <Text marginTop="12px">
        <CustomDescription
          description={selectedComponent.description}
          word={500}
        />
      </Text>
      <AddButton
        text="Add New Element"
        onClick={handleCreateElementButtonClick}
      />
      <ElementModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </Box>
  );
};

export default Header;

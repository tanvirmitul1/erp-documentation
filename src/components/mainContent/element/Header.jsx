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
import useZustandStore from "../../../zustand/store";
import ComponentUpdateModal from "../../modal/ComponentUpdateModal";
import ElementUpdateModal from "../../modal/ElementUpdateModal";

const Header = () => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();
  const { selectedElement } = useZustandStore();

  const handleButtonClick = () => {
    console.log("button clicked");
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);

  const handleCreateFunctionButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleUpdateMOdalButtonClick = () => {
    setIsUpdateModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsUpdateModalOpen(false);
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
          <Flex
            gap="8px"
            flexDir={{
              base: "column",
              md: "column",
              lg: "column",
              xl: "row",
            }}
          >
            <Text h="20px" as="h3">
              {selectedElement.name}
            </Text>
            <Flex marginTop="10px" gap={2}>
              <Text h="20px">Added By:</Text>
              <Text h="20px" color={modulePathColor}>
                {" "}
                {selectedElement.added_by_name}
              </Text>
            </Flex>
          </Flex>

          <Flex
            flexDirection={{ base: "column", md: "row" }}
            gap="5px"
            backgroundColor={{ base: "", md: "", lg: modulePathBgColor }}
            padding={{ base: "", md: "", lg: "10px" }}
            paddingX={{ base: "", md: "", lg: "20px" }}
            paddingTop={{ base: "", md: "", lg: "16px" }}
            // paddingBottom={2}
            rounded="50px"
          >
            <Text
              display={{
                base: "none",
                md: "none",
                lg: "none",
                xl: "block",
              }}
              fontWeight="bold"
            >
              Element Directory Path:
            </Text>{" "}
            <Text color={modulePathColor}>
              {" "}
              {selectedElement.directory_path}
            </Text>
          </Flex>
        </VStack>

        <Flex flexDir="column" textAlign="center">
          <Flex h="25px" gap={2}>
            <Text>Created At:</Text>
            <Text>{selectedElement.created_at}</Text>
          </Flex>
          <Flex h="25px" gap={2}>
            <Text>Last Updated At:</Text>
            <Text>{selectedElement.las_update_at}</Text>
          </Flex>
          <Flex h="30px" gap={2}>
            <Text>last Updated By:</Text>
            <Text color={modulePathColor}>
              {selectedElement.last_update_by}
            </Text>
          </Flex>

          <UpdateButton
            text={`Update ${selectedElement.name}`}
            onClick={handleUpdateMOdalButtonClick}
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
      <ElementUpdateModal
        isOpen={isUpdateModalOpen}
        onRequestClose={handleCloseModal}
      />
    </Box>
  );
};

export default Header;

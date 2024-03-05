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
import { GoStack } from "react-icons/go";
import UpdateButton from "../../reusable/UpdateButton";
import AddButton from "../../reusable/AddButton";
import FunctionModal from "../../modal/FunctionModal";
import CustomDescription from "../../reusable/Description";
import useColorModeColors from "../../../hooks/useColorModeColors";
import React from "react";
import useZustandStore from "../../../zustand/store";

import ElementUpdateModal from "../../modal/ElementUpdateModal";
import FormatDate from "../../../utils/FormatDate";
import { useGetElementsLogQuery } from "../../../redux/api/docApiSlice";
import { LogModal } from "../../modal/LogModal";

const Header = () => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();
  const { selectedElement } = useZustandStore();

  const { data } = useGetElementsLogQuery({
    elementId: selectedElement.id,
    componentId: selectedElement.component_id,
    moduleId: selectedElement.module_id,
  });
  const LogData = data?.data;
  // console.log("elem log", LogData);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = React.useState(false);
  const handleCreateFunctionButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleUpdateMOdalButtonClick = () => {
    setIsUpdateModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsUpdateModalOpen(false);
    setIsLogModalOpen(false);
  };
  const handleLog = () => {
    setIsLogModalOpen(true);
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
            <Text as="h3">{selectedElement.name}</Text>
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
            <Text>{FormatDate(selectedElement.created_at)}</Text>
          </Flex>
          <Flex h="25px" gap={2}>
            <Text>Last Updated At:</Text>
            <Text>{FormatDate(selectedElement.last_updated_at)}</Text>
          </Flex>
          <Flex h="30px" gap={2}>
            <Text>last Updated By:</Text>
            <Text color={modulePathColor}>
              {selectedElement.last_updated_by_name}
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
      <HStack>
        <AddButton
          text="Add New Function"
          onClick={handleCreateFunctionButtonClick}
        />
        <AddButton text="Element Update Log" iconSize="0px" onClick={handleLog}>
          {" "}
          <GoStack color={moduleTextColor} size={20} />
        </AddButton>
      </HStack>
      <FunctionModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
      <ElementUpdateModal
        isOpen={isUpdateModalOpen}
        onRequestClose={handleCloseModal}
      />
      <LogModal
        name="Element"
        data={LogData}
        isOpen={isLogModalOpen}
        onRequestClose={handleCloseModal}
      />
    </Box>
  );
};

export default Header;

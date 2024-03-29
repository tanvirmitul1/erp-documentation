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
import ComponentUpdateModal from "../../modal/ComponentUpdateModal";
import useZustandStore from "../../../zustand/store";
import FormatDate from "../../../utils/FormatDate";
import { useGetComponentsLogQuery } from "../../../redux/api/docApiSlice";
import { LogModal } from "../../modal/LogModal";
import { GoStack } from "react-icons/go";
const Header = () => {
  const { selectedComponent, setSelectedComponent } = useZustandStore();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = React.useState(false);
  const { data } = useGetComponentsLogQuery({
    componentId: selectedComponent.id,
    moduleId: selectedComponent.module_id,
  });

  const LogData = data?.data;
  const handleCreateElementButtonClick = () => {
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
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();

  const handleLog = () => {
    setIsLogModalOpen(true);
  };

  return (
    <Box
      borderBottom="1px solid rgb(197, 184, 184)"
      paddingBottom="30px"
      marginX="20px"
      marginTop={1}
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
            <Text as="h3">{selectedComponent.name}</Text>
            <Flex marginTop="10px" gap={1}>
              <Text h="20px">Added By:</Text>
              <Text h="20px" color={modulePathColor}>
                {" "}
                {selectedComponent.added_by_name}
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
              Component Directory Path:
            </Text>{" "}
            <Text color={modulePathColor}>
              {" "}
              {selectedComponent.directory_path}
            </Text>
          </Flex>
        </VStack>

        <Flex flexDir="column" textAlign="center">
          <Flex h="25px" gap={2}>
            <Text>Created At:</Text>
            <Text>{FormatDate(selectedComponent.created_at)}</Text>
          </Flex>
          <Flex h="25px" gap={2}>
            <Text>Last Updated At:</Text>
            <Text>{FormatDate(selectedComponent.last_updated_at)}</Text>
          </Flex>
          <Flex h="30px" gap={2}>
            <Text>last Updated By:</Text>
            <Text color={modulePathColor}>
              {selectedComponent.last_updated_by_name}
            </Text>
          </Flex>

          <UpdateButton
            text={`Update ${selectedComponent.name}`}
            onClick={handleUpdateMOdalButtonClick}
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
      <HStack>
        <AddButton
          text="Add New Element"
          onClick={handleCreateElementButtonClick}
        />
        <AddButton
          text="Component Update Log"
          iconSize="0px"
          onClick={handleLog}
        >
          {" "}
          <GoStack color={moduleTextColor} size={20} />
        </AddButton>
      </HStack>
      <ElementModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
      <ComponentUpdateModal
        isOpen={isUpdateModalOpen}
        onRequestClose={handleCloseModal}
      />

      <LogModal
        name="Component"
        data={LogData}
        isOpen={isLogModalOpen}
        onRequestClose={handleCloseModal}
      />
    </Box>
  );
};

export default Header;

/* eslint-disable no-unused-vars */

import { Text, Box, Flex, VStack, HStack } from "@chakra-ui/react";

import UpdateButton from "../../reusable/UpdateButton";
import AddButton from "../../reusable/AddButton";
import CustomDescription from "../../reusable/Description";
import useColorModeColors from "../../../hooks/useColorModeColors";
import ComponentModal from "../../modal/ComponentModal";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleModuleQuery } from "../../../redux/api/docApiSlice";
import SideSkeleton from "../../reusable/SideSkeleton";
import useZustandStore from "../../../zustand/store";
import ModuleUpdateModal from "../../modal/ModuleUpdateModal";
const Header = () => {
  const { selectedModule: moduleFromClick } = useZustandStore();

  const { data, isLoading, error } = useGetSingleModuleQuery(
    moduleFromClick.id
  );
  const selectedModule = data?.data;

  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);

  const handleCreateComponentButtonClick = () => {
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
    <>
      {isLoading ? (
        <SideSkeleton width={1300} />
      ) : (
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
                <Text  as="h3">
                  {selectedModule?.name}
                </Text>
                <Flex marginTop="10px" gap={1}>
                  <Text h="10px">Added By:</Text>
                  <Text h="10px" color={modulePathColor}>
                    {" "}
                    {selectedModule?.added_by_name}
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
                  Module Directory Path:
                </Text>{" "}
                <Text color={modulePathColor}>
                  {" "}
                  {selectedModule?.directory_path}
                </Text>
              </Flex>
            </VStack>

            <Flex flexDir="column" textAlign="center">
              <Flex h="25px" gap={2}>
                <Text>Created At:</Text>
                <Text>{selectedModule?.created_at}</Text>
              </Flex>
              <Flex h="25px" gap={2}>
                <Text>Last Updated At:</Text>
                <Text>{selectedModule?.last_updated_at}</Text>
              </Flex>
              <Flex h="30px" gap={2}>
                <Text>last Updated By:</Text>
                <Text color={modulePathColor}>
                  {selectedModule?.last_updated_by_name}
                </Text>
              </Flex>

              <UpdateButton
                text={`Update ${selectedModule?.name}`}
                onClick={handleUpdateMOdalButtonClick}
                textColor={moduleTextColor}
              />
            </Flex>
          </Flex>

          <Text marginTop="12px">
            <CustomDescription
              description={selectedModule?.description}
              word={500}
            />
          </Text>
          <AddButton
            text="Add New Component"
            onClick={handleCreateComponentButtonClick}
          />
          <ComponentModal
            module={selectedModule}
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
          />

          <ModuleUpdateModal
            isOpen={isUpdateModalOpen}
            onRequestClose={handleCloseModal}
          />
        </Box>
      )}
    </>
  );
};

export default Header;

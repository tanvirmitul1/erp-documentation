/* eslint-disable no-unused-vars */

import { Text, Box, Flex, VStack, HStack } from "@chakra-ui/react";

import UpdateButton from "../../reusable/UpdateButton";
import AddButton from "../../reusable/AddButton";
import CustomDescription from "../../reusable/Description";
import useColorModeColors from "../../../hooks/useColorModeColors";
import ComponentModal from "../../modal/ComponentModal";
import React, { useEffect, useState } from "react";

import {
  useGetSingleModuleQuery,
  useGetModulesLogQuery,
} from "../../../redux/api/docApiSlice";
import SideSkeleton from "../../reusable/SideSkeleton";
import useZustandStore from "../../../zustand/store";
import ModuleUpdateModal from "../../modal/ModuleUpdateModal";
import FormatDate from "../../../utils/FormatDate";
import { LogModal } from "../../modal/LogModal";

const Header = () => {
  const { selectedModule, setSelectedModule } = useZustandStore();

  const { data, isLoading, error } = useGetSingleModuleQuery(
    selectedModule?.id
  );
  const { data: moduleLogData } = useGetModulesLogQuery(selectedModule?.id);

  const LogData = moduleLogData?.data;

  useEffect(() => {
    if (data) {
      setSelectedModule(data.data);
    }
  }, [data]);

  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = React.useState(false);

  const handleCreateComponentButtonClick = () => {
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
  const handleModuleLog = () => {
    setIsLogModalOpen(true);
  };
  return (
    <>
      {isLoading ? (
        <SideSkeleton Count={1} height="200px" width="100%" />
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
                <Text as="h3">{selectedModule?.name}</Text>
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
                <Text>{FormatDate(selectedModule?.created_at)}</Text>
              </Flex>
              <Flex h="25px" gap={2}>
                <Text>Last Updated At:</Text>
                <Text>{FormatDate(selectedModule?.last_updated_at)}</Text>
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
          <HStack>
            <AddButton
              text="Add New Component"
              onClick={handleCreateComponentButtonClick}
            />
            <AddButton
              text="Module Update Log"
              iconSize="0px"
              onClick={handleModuleLog}
            />
          </HStack>
          <ComponentModal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
          />

          <ModuleUpdateModal
            module={data?.data}
            isOpen={isUpdateModalOpen}
            onRequestClose={handleCloseModal}
          />

          <LogModal
            name="Module"
            data={LogData}
            isOpen={isLogModalOpen}
            onRequestClose={handleCloseModal}
          />
        </Box>
      )}
    </>
  );
};

export default Header;

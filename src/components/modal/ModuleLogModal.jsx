/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Flex, Box, Text, VStack } from "@chakra-ui/react";
import ReactModal from "react-modal";

import useColorModeColors from "../../hooks/useColorModeColors";
import useZustandStore from "../../zustand/store";
import CustomDescription from "../reusable/Description";

const ModuleLogModal = ({ isOpen, onRequestClose }) => {
  const { modalBgColor, modulePathColor, modulePathBgColor } =
    useColorModeColors();
  const { selectedModule } = useZustandStore();
  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          margin: "auto auto",
          zIndex: 1000,
        },
        content: {
          borderRadius: "20px",
          backgroundColor: modalBgColor,

          margin: "auto auto",
          border: "none",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
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
          </Flex>
        </Flex>

        <Text marginTop="12px">
          <CustomDescription
            description={selectedModule?.description}
            word={500}
          />
        </Text>
      </Box>
    </ReactModal>
  );
};

export default ModuleLogModal;

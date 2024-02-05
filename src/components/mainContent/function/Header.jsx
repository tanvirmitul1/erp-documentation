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

import UpdateButton from "../../reusable/UpdateButton";
import AddButton from "../../reusable/AddButton";

import CustomDescription from "../../reusable/Description";
import useColorModeColors from "../../../hooks/useColorModeColors";
import CodeBlock from "./CodeBlock";

import formatCodeString from "../../../utils/FormatCode";
import identifyLanguage from "../../../utils/LanguageIdentifier";
import useZustandStore from "../../../zustand/store";
import React from "react";
import FunctionUpdateModal from "../../modal/FunctionUpdateModal";

const Header = () => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();
  const { selectedFunction } = useZustandStore();
  const language = identifyLanguage(selectedFunction?.function_code);

  const formattedCode = formatCodeString(
    selectedFunction?.function_code,
    language
  );

  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);
  const handleUpdateMOdalButtonClick = () => {
    setIsUpdateModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <Box paddingBottom="30px" marginX="20px">
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
            <Text as="h2">{selectedFunction?.name}</Text>
            <Flex marginTop="14px" gap={1}>
              <Text h="10px">Added By:</Text>
              <Text h="10px" color={modulePathColor}>
                {" "}
                {selectedFunction?.added_by_name}
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
              Function Directory Path:
            </Text>{" "}
            <Text color={modulePathColor}>
              {" "}
              {selectedFunction?.directory_path}
            </Text>
          </Flex>
        </VStack>

        <Flex flexDir="column" textAlign="center">
          <Flex h="25px" gap={1}>
            <Text>Created At:</Text>
            <Text>{selectedFunction?.created_at}</Text>
          </Flex>
          <Flex h="25px">
            <Text>Last Updated At:</Text>
            <Text>{selectedFunction?.last_update_at}</Text>
          </Flex>
          <Flex h="30px">
            <Text>last Updated By:</Text>
            <Text color={modulePathColor}>
              {selectedFunction?.last_update_by}
            </Text>
          </Flex>

          <UpdateButton
            width={{ base: "90vw", md: "auto" }}
            text={`Update ${selectedFunction.name}`}
            onClick={handleUpdateMOdalButtonClick}
            textColor={moduleTextColor}
          />
        </Flex>
      </Flex>

      <Box marginTop="12px" paddingBottom="20px" maxWidth="95vw">
        <CustomDescription description={selectedFunction?.description} />
        <Box as="h5"> Function Code</Box>
        <CodeBlock code={formattedCode} language="jsx" />
      </Box>

      <FunctionUpdateModal
        isOpen={isUpdateModalOpen}
        onRequestClose={handleCloseModal}
      />
    </Box>
  );
};

export default Header;

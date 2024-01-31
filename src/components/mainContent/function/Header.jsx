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
import CodeBlock from "./CodeBlock";

import formatCodeString from "../../../utils/FormatCode";
import identifyLanguage from "../../../utils/LanguageIdentifier";

const Header = () => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();
  const { selectedFunction } = useModuleStore();
  const language = identifyLanguage(selectedFunction.functionCode);
  const handleButtonClick = () => {
    console.log("button clicked");
  };

  const formattedCode = formatCodeString(
    selectedFunction.functionCode,
    language
  );
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
          <Flex gap="4px" flexDir={{ base: "column", md: "row" }}>
            <Text h="10px" as="h2">
              {selectedFunction.name}
            </Text>
            <Flex marginTop="14px">
              <Text h="10px">Added By:</Text>
              <Text h="10px" color={modulePathColor}>
                {" "}
                {selectedFunction.addedBy}
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
            width={{ base: "90vw", md: "auto" }}
          >
            <Text h="10px" fontWeight="bold">
              Component Directory Path:
            </Text>{" "}
            <Text h="10px" color={modulePathColor}>
              {" "}
              {selectedFunction.moduleDirectoryPath}
            </Text>
          </Flex>
        </VStack>

        <Flex flexDir="column" textAlign="center">
          <Flex h="25px">
            <Text>Created At:</Text>
            <Text>{selectedFunction.createdAt}</Text>
          </Flex>
          <Flex h="25px">
            <Text>Last Updated At:</Text>
            <Text>{selectedFunction.lastUpdateAt}</Text>
          </Flex>
          <Flex h="30px">
            <Text>last Updated By:</Text>
            <Text color={modulePathColor}>{selectedFunction.lastUpdateBy}</Text>
          </Flex>

          <UpdateButton
            width={{ base: "90vw", md: "auto" }}
            text={`Update ${selectedFunction.name}`}
            onClick={handleButtonClick}
            textColor={moduleTextColor}
          />
        </Flex>
      </Flex>

      <Box marginTop="12px" paddingBottom="20px" maxWidth="95vw">
        <CustomDescription description={selectedFunction.description} />
        <Box as="h5"> Function Code</Box>
        <CodeBlock code={formattedCode} language="jsx" />
      </Box>
    </Box>
  );
};

export default Header;

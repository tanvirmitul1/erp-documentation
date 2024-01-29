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
    <Box paddingBottom="30px" marginX="20px">
      <Flex flexDirection="row" justifyContent="space-between">
        <VStack align="left" marginTop="auto">
          <Flex alignItems="center" gap="4px">
            <Text as="h2">{selectedFunction.name}</Text>
            <HStack marginTop="26px">
              <Text>Added By:</Text>
              <Text color={modulePathColor}> {selectedFunction.addedBy}</Text>
            </HStack>
          </Flex>

          <Flex
            alignItems="center"
            gap="5px"
            backgroundColor={modulePathBgColor}
            paddingX="20px"
            paddingTop="10px"
            rounded="50px"
          >
            <Text fontWeight="bold">Function Directory Path:</Text>{" "}
            <Text color={modulePathColor}>
              {" "}
              {selectedFunction.moduleDirectoryPath}
            </Text>
          </Flex>
        </VStack>

        <Flex flexDir="column">
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
            text={`Update ${selectedFunction.name}`}
            onClick={handleButtonClick}
            textColor={moduleTextColor}
          />
        </Flex>
      </Flex>

      <Box marginTop="12px" paddingBottom="20px" marginX="40px">
        <CustomDescription description={selectedFunction.description} />
        <Box as="h5"> Function Code</Box>
        <CodeBlock code={formattedCode} language="jsx" />
      </Box>
    </Box>
  );
};

export default Header;

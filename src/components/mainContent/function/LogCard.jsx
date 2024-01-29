/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
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
import CustomDescription from "../../reusable/Description";
import useColorModeColors from "../../../hooks/useColorModeColors";
import CodeBlock from "./CodeBlock";
import identifyLanguage from "../../../utils/LanguageIdentifier";
import formatCodeString from "../../../utils/FormatCode";

const LogCard = ({ fnLog }) => {
  const { modulePathColor, modulePathBgColor } = useColorModeColors();
  const language = identifyLanguage(fnLog.functionCode);
  const formattedCode = formatCodeString(fnLog.functionCode, language);
  return (
    <Box maxW="90%" padding="30px">
      <Flex flexDirection="row" justifyContent="space-between">
        <VStack align="left" marginTop="auto">
          <Flex
            alignItems="center"
            gap="5px"
            backgroundColor={modulePathBgColor}
            paddingX="20px"
            paddingTop="10px"
            height="40px"
            rounded="50px"
          >
            <Text fontWeight="bold">Function Directory Path:</Text>{" "}
            <Text color={modulePathColor}> {fnLog.functionDirectoryPath}</Text>
          </Flex>
        </VStack>

        <Flex flexDir="column">
          <Flex h="25px">
            <Text>Updated At:</Text>
            <Text>{fnLog.updatedAt}</Text>
          </Flex>
          <Flex h="30px">
            <Text>Updated By:</Text>
            <Text color={modulePathColor}>{fnLog.updateBy}</Text>
          </Flex>
        </Flex>
      </Flex>

      <Text marginTop="12px">
        <CustomDescription description={fnLog.description} />
        <Box as="h5"> Function Code</Box>
        <CodeBlock code={formattedCode} language="jsx" />
      </Text>
    </Box>
  );
};

export default LogCard;

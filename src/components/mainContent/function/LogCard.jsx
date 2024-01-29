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
    <Box
      maxW="90%"
      padding="30px"
      borderBottom="2px solid rgba(25, 39, 59, 0.42)"
    >
      <Flex flexDir="column" gap="10px">
        <Flex align="left" marginTop="auto">
          <Flex
            alignItems="center"
            gap="5px"
            backgroundColor={modulePathBgColor}
            paddingX="20px"
            paddingTop="10px"
            rounded="50px"
          >
            <Text fontWeight="bold">Function Directory Path:</Text>{" "}
            <Text color={modulePathColor}> {fnLog.functionDirectoryPath}</Text>
          </Flex>
        </Flex>
        <Flex gap="10px" marginLeft="10px">
          <Flex h="25px" gap="5px">
            <Text>Updated At: </Text>
            <Text>{fnLog.updatedAt}</Text>
          </Flex>
          <Flex h="30px" gap="5px">
            <Text>Updated By: </Text>
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

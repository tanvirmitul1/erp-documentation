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

const LogCard = ({ fnLog ,openFullscreenModal }) => {
  const { modulePathColor, modulePathBgColor } = useColorModeColors();
  const language = identifyLanguage(fnLog.function_code);
  const formattedCode = formatCodeString(fnLog.function_code, language);

  return (
    <Box
      maxW="90%"
      paddingY="20px"
      paddingX="10px"
      borderBottom="2px solid rgba(25, 39, 59, 0.42)"
    >
      <Flex flexDir="column" gap="10px">
        <Flex align="left" marginTop="auto">
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
              Function Directory Path:
            </Text>{" "}
            <Text h="10px" color={modulePathColor}>
              {" "}
              {fnLog.directory_path}
            </Text>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          marginLeft="10px"
          flexDir={{ base: "column", md: "row" }}
        >
          <Flex h="25px" gap="5px">
            <Text>Updated At: </Text>
            <Text>{fnLog.updated_at}</Text>
          </Flex>
          <Flex h="30px" gap="5px">
            <Text>Updated By: </Text>
            <Text color={modulePathColor}>{fnLog.update_by_name}</Text>
          </Flex>
        </Flex>
      </Flex>

      <Box marginTop="12px" paddingBottom="20px" maxWidth="95vw">
        <CustomDescription description={fnLog.description} />
        <Box as="h5"> Function Code</Box>
        <CodeBlock code={formattedCode} language="jsx" />
      </Box>
    </Box>
  );
};

export default LogCard;

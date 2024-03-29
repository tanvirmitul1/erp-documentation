/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  VStack,
  HStack,
  Stack,
  useColorMode,
  Button,
  Image,
} from "@chakra-ui/react";
import EmptyIcon from "../../../assets/man.png";
import CustomDescription from "../../reusable/Description";
import useColorModeColors from "../../../hooks/useColorModeColors";
import CodeBlock from "./CodeBlock";
import identifyLanguage from "../../../utils/LanguageIdentifier";
import formatCodeString from "../../../utils/FormatCode";
import FullscreenLogModal from "../../modal/FullscreenLogModal";
import FormatDate from "../../../utils/FormatDate";

const LogCard = ({ fnLog, totalUpdate }) => {
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState(false);

  const openFullscreenModal = () => setIsFullscreenModalOpen(true);
  const closeFullscreenModal = () => setIsFullscreenModalOpen(false);
  const { modulePathColor, modulePathBgColor } = useColorModeColors();
  const language = identifyLanguage(fnLog.function_code);
  const formattedCode = formatCodeString(fnLog.function_code, language);

  return (
    <>
      {totalUpdate > 0 ? (
        <Box
          maxW="90%"
          paddingY="20px"
          paddingX="10px"
          borderBottom="2px solid rgba(25, 39, 59, 0.42)"
        >
          <Flex
            gap="8px"
            flexDir={{
              base: "column",
              md: "column",
              lg: "column",
              xl: "row",
            }}
          >
            <HStack marginBottom={6}>
              <Text as="h4">{fnLog?.name}</Text>
            </HStack>
            <Flex marginTop="10px" gap={1}>
              <Text h="10px">Added By:</Text>
              <Text h="10px" color={modulePathColor}>
                {" "}
                {fnLog?.added_by_name}
              </Text>
            </Flex>
          </Flex>
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
                <Text>{FormatDate(fnLog.updated_at)}</Text>
              </Flex>
              <Flex h="30px" gap="5px">
                <Text>Updated By: </Text>
                <Text color={modulePathColor}>{fnLog.last_up_by_name}</Text>
              </Flex>
            </Flex>
          </Flex>

          <Box marginTop="12px" paddingBottom="20px" maxWidth="95vw">
            <CustomDescription description={fnLog.description} />
            <Box as="h5"> Function Code</Box>
            <CodeBlock
              code={formattedCode}
              language="jsx"
              openFullscreenModal={openFullscreenModal}
            />
          </Box>
          <FullscreenLogModal
            code={formattedCode}
            language="jsx"
            openFullscreenModal={openFullscreenModal}
            isOpen={isFullscreenModalOpen}
            onRequestClose={closeFullscreenModal}
          />
        </Box>
      ) : (
        <Box color={`red`} fontSize={30}>
          {/* <Image marginLeft={16} src={EmptyIcon} width={200} /> */}
          <Box> No Function Available</Box>
        </Box>
      )}
    </>
  );
};

export default LogCard;

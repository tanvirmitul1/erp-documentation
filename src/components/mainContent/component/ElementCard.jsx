/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ElementCard.jsx
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
import UpdateButton from "../../reusable/UpdateButton";
import CustomDescription from "../../reusable/Description";
import AddButton from "../../reusable/AddButton";
import useColorModeColors from "../../../hooks/useColorModeColors";
import ViewButton from "../../reusable/Viewbutton";

const ElementCard = ({ element }) => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();
  return (
    <Box
      key={element.id}
      marginTop="10px"
      marginBottom="10px"
      borderBottom="2px solid rgba(105, 105, 105, 0.2)"
      paddingBottom="20px"
      paddingX="40px"
    >
      <Flex flexDirection="row" justifyContent="space-between">
        <VStack align="left" marginTop="auto">
          <Flex alignItems="center" gap="4px">
            <Text as="h2">{element.name}</Text>
            <HStack marginTop="26px">
              <Text>Added By:</Text>
              <Text color={modulePathColor}>{element.addedBy}</Text>
            </HStack>
          </Flex>

          <Flex
            alignItems="center"
            gap="5px"
            backgroundColor={modulePathBgColor}
            paddingX="20px"
            paddingTop="10px"
            height="40px"
            rounded="50px"
          >
            <Text fontWeight="bold">Element Directory Path:</Text>{" "}
            <Text color={modulePathColor}>{element.moduleDirectoryPath}</Text>
          </Flex>
        </VStack>

        <Flex flexDir="column">
          <Flex h="25px">
            <Text>Created At:</Text>
            <Text>{element.createdAt}</Text>
          </Flex>
          <Flex h="30px">
            <Text>Last Updated At:</Text>
            <Text>{element.lastUpdateAt}</Text>
          </Flex>

          <UpdateButton
            text={`Update ${element.name}`}
            textColor={moduleTextColor}
          />
        </Flex>
      </Flex>

      <Text marginTop="12px">
        <CustomDescription description={element.description} word={500} />
      </Text>
      <ViewButton text={`View ${element.name}`} textColor={moduleTextColor} />
    </Box>
  );
};

export default ElementCard;

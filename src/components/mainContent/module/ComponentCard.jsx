/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ComponentCard.jsx
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

const ComponentCard = ({ component }) => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();
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
          <Flex gap="6px" marginTop={4}>
            <Text h="20px" as="h4">
              {component.name}
            </Text>
            <Flex marginTop="6px" gap={1}>
              <Text h="20px">Added By:</Text>
              <Text h="20px" color={modulePathColor}>
                {component.addedBy}
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
          >
            <Text h="10px" fontWeight="bold">
              Component Directory Path:
            </Text>{" "}
            <Text h="10px" color={modulePathColor}>
              {component.moduleDirectoryPath}
            </Text>
          </Flex>
        </VStack>

        <Flex flexDir="column" textAlign="center">
          <Flex h="25px" gap={2}>
            <Text>Created At:</Text>
            <Text>{component.createdAt}</Text>
          </Flex>
          <Flex h="30px" gap={2}>
            <Text>Last Updated At:</Text>
            <Text>{component.lastUpdateAt}</Text>
          </Flex>

          <UpdateButton
            text={`Update ${component.name}`}
            textColor={moduleTextColor}
          />
        </Flex>
      </Flex>

      <Text marginTop="12px">
        <CustomDescription description={component.description} word={500} />
      </Text>
      <ViewButton text={`View ${component.name}`} textColor={moduleTextColor} />
    </Box>
  );
};

export default ComponentCard;

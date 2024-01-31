/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// FnCard.jsx
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

const FunctionCard = ({ fn }) => {
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
          <Flex gap="4px" marginTop={4}flexDir="column" >
            <Text h="10px" as="h5">
              {fn.name}
            </Text>
            <Flex marginTop="10px" gap={2}>
              <Text h="20px">Added By:</Text>
              <Text h="20px" color={modulePathColor}>
                {fn.addedBy}
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
              Fn Directory Path:
            </Text>{" "}
            <Text h="10px" color={modulePathColor}>
              {fn.moduleDirectoryPath}
            </Text>
          </Flex>
        </VStack>

        <Flex flexDir="column" textAlign="center">
          <Flex h="25px" gap={2}>
            <Text>Created At:</Text>
            <Text>{fn.createdAt}</Text>
          </Flex>
          <Flex h="30px"gap={2}>
            <Text>Last Updated At:</Text>
            <Text>{fn.lastUpdateAt}</Text>
          </Flex>

          <UpdateButton
            text={`Update ${fn.name}`}
            textColor={moduleTextColor}
          />
        </Flex>
      </Flex>

      <Text marginTop="12px">
        <CustomDescription description={fn.description} word={500} />
      </Text>
      <ViewButton text={`View ${fn.name}`} textColor={moduleTextColor} />
    </Box>
  );
};

export default FunctionCard;

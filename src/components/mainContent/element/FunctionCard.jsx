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
      key={fn.id}
      marginTop="10px"
      marginBottom="10px"
      borderBottom="2px solid rgba(105, 105, 105, 0.2)"
      paddingBottom="20px"
      paddingX="40px"
    >
      <Flex flexDirection="row" justifyContent="space-between">
        <VStack align="left" marginTop="auto">
          <Flex alignItems="center" gap="4px">
            <Text as="h2">{fn.name}</Text>
            <HStack marginTop="26px">
              <Text>Added By:</Text>
              <Text color={modulePathColor}>{fn.addedBy}</Text>
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
            <Text fontWeight="bold">Fn Directory Path:</Text>{" "}
            <Text color={modulePathColor}>{fn.moduleDirectoryPath}</Text>
          </Flex>
        </VStack>

        <Flex flexDir="column">
          <div style={{ display: "flex", gap: "4px" }}>
            <Text>Created At:</Text>
            <Text>{fn.createdAt}</Text>
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Text>Last Updated At:</Text>
            <Text>{fn.lastUpdateAt}</Text>
          </div>

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

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ElementCard.jsx
import { useParams } from "react-router-dom";
import useModuleStore from "../../../zustand/store";

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
import { Link } from "react-router-dom";

const ElementCard = ({ element }) => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();

  const { setSelectedElement } = useModuleStore();
  const { moduleId, componentId } = useParams();
  const handleViewClick = () => {
    setSelectedElement(element);
  };
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
          <Flex gap="4px" marginTop={4} flexDir={{ base: "column", md: "row" }}>
            <Text h="20px" as="h5">
              {element.name}
            </Text>
            <Flex marginTop="2px" gap={1}>
              <Text h="20px">Added By:</Text>
              <Text h="20px" color={modulePathColor}>
                {element.added_by_name}
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
              Element Directory Path:
            </Text>{" "}
            <Text h="10px" color={modulePathColor}>
              {element.directory_path}
            </Text>
          </Flex>
        </VStack>

        <Flex flexDir="column" textAlign="center">
          <Flex h="25px" gap={2}>
            <Text>Created At:</Text>
            <Text>{element.created_at}</Text>
          </Flex>
          <Flex h="30px" gap={2}>
            <Text>Last Updated At:</Text>
            <Text>{element.last_updated_at}</Text>
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
      <Link
        to={`/module/${moduleId}/component/${componentId}/element/${element.id}`}
        onClick={handleViewClick}
      >
        <ViewButton text={`View ${element.name}`} textColor={moduleTextColor} />
      </Link>
    </Box>
  );
};

export default ElementCard;

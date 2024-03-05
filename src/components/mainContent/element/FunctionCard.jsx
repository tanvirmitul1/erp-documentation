/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// FnCard.jsx
import React from "react";
import { Form, useParams } from "react-router-dom";
import useModuleStore from "../../../zustand/store";
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

import useColorModeColors from "../../../hooks/useColorModeColors";
import ViewButton from "../../reusable/Viewbutton";
import { Link } from "react-router-dom";
import FormatDate from "../../../utils/FormatDate";
import SubFunctionUpdateModal from "../../modal/subFunctionUpdateModal";

const FunctionCard = ({ fn }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);

  const handleCloseModal = () => {
    setIsUpdateModalOpen(false);
  };
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();

  const { selectedFunction, setSelectedFunction } = useModuleStore();
  const { moduleId, componentId, elementId } = useParams();
  const handleViewClick = () => {
    setSelectedFunction(fn);
  };

  const updateFunctionHandle = (fn) => {
    setSelectedFunction(fn);
    setIsUpdateModalOpen(true);
  };

  // console.log("selected functiobn", selectedFunction);
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
            <Text as="h4">{fn.name}</Text>
            <Flex marginTop="6px" gap={2}>
              <Text h="20px">Added By:</Text>
              <Text h="20px" color={modulePathColor}>
                {fn.added_by_name}
              </Text>
            </Flex>
          </Flex>

          <Flex
            flexDirection={{ base: "column", md: "row" }}
            gap="5px"
            backgroundColor={{ base: "", md: "", lg: modulePathBgColor }}
            padding={{ base: "", md: "", lg: "10px" }}
            paddingX={{ base: "", md: "", lg: "20px" }}
            paddingTop={{ base: "", md: "", lg: "16px" }}
            // paddingBottom={2}
            rounded="50px"
          >
            <Text
              display={{
                base: "none",
                md: "none",
                lg: "none",
                xl: "block",
              }}
              fontWeight="bold"
            >
              Function Directory Path:
            </Text>{" "}
            <Text color={modulePathColor}>{fn.directory_path}</Text>
          </Flex>
        </VStack>

        <Flex flexDir="column" textAlign="center">
          <Flex h="25px" gap={2}>
            <Text>Created At:</Text>
            <Text>{FormatDate(fn.created_at)}</Text>
          </Flex>
          <Flex h="30px" gap={2}>
            <Text>Last Updated At:</Text>
            <Text>{FormatDate(fn.last_updated_at)}</Text>
          </Flex>

          <UpdateButton
            text={`Update ${fn.name}`}
            textColor={moduleTextColor}
            onClick={() => updateFunctionHandle(fn)}
          />
        </Flex>
      </Flex>

      <Text marginTop="12px">
        <CustomDescription description={fn.description} word={500} />
      </Text>
      <Link
        to={`/module/${moduleId}/component/${componentId}/element/${elementId}/function/${fn.id}`}
        onClick={handleViewClick}
      >
        <ViewButton text={`View ${fn.name}`} textColor={moduleTextColor} />
      </Link>

      <SubFunctionUpdateModal
        isOpen={isUpdateModalOpen}
        onRequestClose={handleCloseModal}
      />
    </Box>
  );
};

export default FunctionCard;

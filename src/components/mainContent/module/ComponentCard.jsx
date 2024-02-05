/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ComponentCard.jsx
import { useParams } from "react-router-dom";
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
import useModuleStore from "../../../zustand/store";

import SubComponentUpdateModal from "../../modal/subComponentUpdateModal";

const ComponentCard = ({ component }) => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();

  const { setSelectedComponent } = useModuleStore();
  const { moduleId } = useParams();
  const handleViewClick = () => {
    setSelectedComponent(component);
  };

  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);

  const handleUpdateMOdalButtonClick = () => {
    setIsUpdateModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsUpdateModalOpen(false);
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
          <Flex gap="6px" marginTop={4} flexDir={{ base: "column", md: "row" }}>
            <Text as="h4">{component.name}</Text>
            <Flex marginTop="6px" gap={1}>
              <Text h="20px">Added By:</Text>
              <Text h="20px" color={modulePathColor}>
                {component.added_by_name}
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
              Component Directory Path:
            </Text>{" "}
            <Text color={modulePathColor}>{component.directory_path}</Text>
          </Flex>
        </VStack>

        <Flex flexDir="column" textAlign="center">
          <Flex h="25px" gap={2}>
            <Text>Created At:</Text>
            <Text>{component.created_at}</Text>
          </Flex>
          <Flex h="30px" gap={2}>
            <Text>Last Updated At:</Text>
            <Text>{component.last_updated_at}</Text>
          </Flex>

          <UpdateButton
            text={`Update ${component.name}`}
            textColor={moduleTextColor}
            onClick={handleUpdateMOdalButtonClick}
          />
        </Flex>
      </Flex>

      <Text marginTop="12px">
        <CustomDescription description={component.description} word={500} />
      </Text>

      <Link
        to={`/module/${moduleId}/component/${component.id}`}
        onClick={handleViewClick}
      >
        <ViewButton
          text={`View ${component.name}`}
          textColor={moduleTextColor}
        />
      </Link>
      <SubComponentUpdateModal
        component={component}
        isOpen={isUpdateModalOpen}
        onRequestClose={handleCloseModal}
      />
    </Box>
  );
};

export default ComponentCard;

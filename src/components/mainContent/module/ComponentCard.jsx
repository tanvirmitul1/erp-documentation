/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import UpdateButton from "../../reusable/UpdateButton";
import CustomDescription from "../../reusable/Description";
import AddButton from "../../reusable/AddButton";
import useColorModeColors from "../../../hooks/useColorModeColors";
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
const ComponentCard = ({component}) => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
  useColorModeColors();
  return (
    <Box key={component.id}>
            <Flex flexDirection="row" justifyContent="space-between">
              <VStack align="left" marginTop="auto">
                <Flex alignItems="center" gap="4px">
                  <Text as="h2">{component.name}</Text>
                  <HStack marginTop="26px">
                    <Text>Added By:</Text>
                    <Text color={modulePathColor}>
                      {component.addedBy}
                    </Text>
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
                  <Text fontWeight="bold">Module Directory Path:</Text>{" "}
                  <Text color={modulePathColor}>
                    {component.moduleDirectoryPath}
                  </Text>
                </Flex>
              </VStack>

              <Flex flexDir="column">
                <div style={{ display: "flex", gap: "4px" }}>
                  <Text>Created At:</Text>
                  <Text>{component.createdAt}</Text>
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                  <Text>Last Updated At:</Text>
                  <Text>{component.lastUpdateAt}</Text>
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                  <Text>Last Updated By:</Text>
                  <Text color={modulePathColor}>
                    {component.lastUpdateBy}
                  </Text>
                </div>

                <UpdateButton
                  width="240px"
                  text={`Update ${component.name}`}
                  // onClick={handleButtonClick}
                  textColor={moduleTextColor}
                />
              </Flex>
            </Flex>

            <Text marginTop="12px">
              <CustomDescription
                description={component.description}
                word={500}
              />
            </Text>
            <AddButton text="Add New Component" />
          </Box>
  )
}

export default ComponentCard
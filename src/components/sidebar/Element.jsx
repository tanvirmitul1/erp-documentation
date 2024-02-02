/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Text, Stack, Flex, Box, HStack } from "@chakra-ui/react";
import useColorModeColors from "../../hooks/useColorModeColors";
import useModuleStore from "../../zustand/store"; // Corrected import
import { Link } from "react-router-dom";
import { useGetFunctionQuery } from "../../redux/api/docApiSlice";
import SideSkeleton from "../reusable/SideSkeleton";

const Element = ({
  module,
  component,
  element,
  setComponentId,
  setModuleId,
}) => {
  const [elementId, setElementId] = useState("");
  const { data, error, isLoading } = useGetFunctionQuery(elementId);
  const functions = data?.data;
  const {
    selectedFunction,
    selectedElement,
    setSelectedElement,
    setSelectedFunction,
    toggleLeftBar,
  } = useModuleStore();
  const [isOpen, setIsOpen] = useState(false);

  const { elementBorderColor, functionBorderColor } = useColorModeColors();
  const handleElementClick = (elementId) => {
    setElementId(elementId);
    setSelectedElement(element);
    setIsOpen(!isOpen);
    toggleLeftBar();
  };
  const handleFunctionClick = (fn) => () => {
    setSelectedFunction(fn);
    toggleLeftBar();
  };

  return (
    <Stack
      marginLeft={isOpen ? "16px" : "4px"} // Adjust the value based on your design
      transition="margin-left 0.3s ease" // Add the transition property
      paddingX={2}
      borderLeft={`2px solid ${elementBorderColor}`}
    >
      <HStack>
        <Link
          to={`/module/${module.id}/component/${component.id}/element/${element.id}`}
        >
          <Flex
            height="auto"
            onClick={() => handleElementClick(element.id)}
            justifyContent="left"
            gap="3px"
            cursor="pointer"
          >
            <Text paddingTop="4px" fontSize={12} cursor="pointer">
              {element.name}
            </Text>
          </Flex>
        </Link>
        <Box
          marginBottom={2}
          cursor="pointer"
          onClick={() => {
            setElementId(element.id);
            setSelectedElement(element);
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </Box>
      </HStack>
      {isOpen &&
        (isLoading ? (
          <SideSkeleton Count={3} width={120} />
        ) : (
          functions?.map((fn) => (
            <Link
              to={`/module/${module.id}/component/${component.id}/element/${element.id}/function/${fn.id}`}
            >
              <Text
                onClick={handleFunctionClick(fn)}
                fontSize={12}
                cursor="pointer"
                key={fn.id}
                marginLeft={isOpen ? "16px" : "4px"} // Adjust the value based on your design
                transition="margin-left 0.3s ease" // Add the transition property
                paddingX={2}
                borderLeft={`2px solid ${functionBorderColor}`}
              >
                {fn.name}
              </Text>
            </Link>
          ))
        ))}
    </Stack>
  );
};

export default Element;

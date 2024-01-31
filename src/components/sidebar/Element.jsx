/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Text, Stack, Flex, Box, HStack } from "@chakra-ui/react";
import useColorModeColors from "../../hooks/useColorModeColors";
import useModuleStore from "../../zustand/store"; // Corrected import
import { Link } from "react-router-dom";

const Element = ({ module, component, element }) => {
  const {
    selectedFunction,
    selectedElement,
    setSelectedElement,
    setSelectedFunction,
    toggleLeftBar,
  } = useModuleStore();
  const [isOpen, setIsOpen] = useState(false);

  const { elementBorderColor, functionBorderColor } = useColorModeColors();
  const handleClick = () => {
    setSelectedElement(element);
    setIsOpen(!isOpen);
    toggleLeftBar();
  };
  const handleFunctionClick = (fn) => () => {
    setSelectedFunction(fn);
    toggleLeftBar();
  };

  console.log(
    "selected element",
    selectedElement,
    "selected fn",
    selectedFunction
  );
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
            onClick={handleClick}
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
            setSelectedElement(element);
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </Box>
      </HStack>
      {isOpen &&
        element.functions.map((fn) => (
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
        ))}
    </Stack>
  );
};

export default Element;

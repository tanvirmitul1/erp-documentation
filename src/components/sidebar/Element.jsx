/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Text, Stack, Flex, Box } from "@chakra-ui/react";
import useColorModeColors from "../../hooks/useColorModeColors";
import useModuleStore from "../../zustand/store"; // Corrected import
import { Link } from "react-router-dom";

const Element = ({ module, component, element }) => {
  const {
    selectedFunction,
    selectedElement,
    setSelectedElement,
    setSelectedFunction,
  } = useModuleStore();
  const [isOpen, setIsOpen] = useState(false);

  const { elementBorderColor, functionBorderColor } = useColorModeColors();
  const handleClick = () => {
    setSelectedElement(element);
    setIsOpen(!isOpen);
  };
  const handleFunctionClick = (fn) => () => {
    setSelectedFunction(fn);
    console.log("click fn", fn);
  };

  console.log(
    "selected element",
    selectedElement,
    "selected fn",
    selectedFunction
  );
  return (
    <Stack
      marginLeft={4}
      paddingX={2}
      borderLeft={`2px solid ${elementBorderColor}`}
    >
      <Link
        to={`/module/${module.id}/component/${component.id}/element/${element.id}`}
      >
        <Flex
          height="25px"
          onClick={handleClick}
          justifyContent="left"
          gap="3px"
          cursor="pointer"
        >
          <Text paddingTop="4px" fontSize={12} cursor="pointer">
            {element.name}
          </Text>
          <Box paddingTop="6px">
            {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </Box>
        </Flex>
      </Link>
      {isOpen &&
        element.functions.map((fn) => (
          <Link
            to={`/module/${module.id}/component/${component.id}/element/${element.id}/function/${fn.id}`}
          >
            <Text
              height="20px"
              onClick={handleFunctionClick(fn)}
              fontSize={12}
              cursor="pointer"
              key={fn.id}
              marginLeft={4}
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

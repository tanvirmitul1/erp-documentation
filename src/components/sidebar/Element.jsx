/* eslint-disable react/prop-types */

import { useState } from "react";
useColorModeColors;
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Text, Stack,  Flex, Box } from "@chakra-ui/react";
import useColorModeColors from "../../hooks/useColorModeColors";
const Element = ({ element }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { elementBorderColor ,functionBorderColor} = useColorModeColors();

  return (
    <Stack
      marginLeft={4}
      paddingX={2}
      borderLeft={`2px solid ${elementBorderColor}`}
    >
      <Flex
        onClick={() => setIsOpen(!isOpen)}
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
      {isOpen &&
        element.functions.map((fn) => (
          <Text
            fontSize={12}
            cursor="pointer"
            key={fn.id}
            marginLeft={4}
            paddingX={2}
            borderLeft={`2px solid ${functionBorderColor}`}
          >
            {fn.name}
          </Text>
        ))}
    </Stack>
  );
};

export default Element;

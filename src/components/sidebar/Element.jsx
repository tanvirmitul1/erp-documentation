/* eslint-disable react/prop-types */

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Text, Stack, useColorMode, Flex, Box } from "@chakra-ui/react";
const Element = ({ element }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { colorMode } = useColorMode();
  // Define border color based on colorMode
  const borderColor = colorMode === "light" ? "#2b6cb0" : "#0cf0e4";
  return (
    <Stack marginLeft={4} paddingX={2} borderLeft={`2px solid ${borderColor}`}>
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
            borderLeft={`2px solid ${borderColor}`}
          >
            {fn.name}
          </Text>
        ))}
    </Stack>
  );
};

export default Element;

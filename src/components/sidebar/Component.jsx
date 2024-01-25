/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
useColorModeColors;
import { Text, Stack, Flex, Box } from "@chakra-ui/react";
import Element from "./Element";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import useColorModeColors from "../../hooks/useColorModeColors";
const Component = ({ component }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { componentBorderColor } = useColorModeColors();

  return (
    <Stack
      marginLeft={4}
      paddingX={2}
      borderLeft={`2px solid ${componentBorderColor}`}
    >
      <Flex
        onClick={() => setIsOpen(!isOpen)}
        justifyContent="left"
        gap="3px"
        cursor="pointer"
      >
        <Text paddingTop="4px" fontSize={12} cursor="pointer">
          {component.name}
        </Text>
        <Box paddingTop="6px">
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </Box>
      </Flex>
      {isOpen &&
        component.elements.map((element) => (
          <Element key={element.id} element={element} />
        ))}
    </Stack>
  );
};

export default Component;

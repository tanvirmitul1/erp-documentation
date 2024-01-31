/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Text, Stack, Flex, Box, HStack } from "@chakra-ui/react";
import Element from "./Element";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import useColorModeColors from "../../hooks/useColorModeColors";
import useModuleStore from "../../zustand/store";
import { Link } from "react-router-dom";

const Component = ({ component, module }) => {
  const { setSelectedComponent, toggleLeftBar } = useModuleStore();
  const [isOpen, setIsOpen] = useState(false);
  const { componentBorderColor } = useColorModeColors();
  const handleClick = () => {
    setIsOpen(!isOpen);
    setSelectedComponent(component);
    toggleLeftBar();
  };

  return (
    <Stack
      marginLeft={isOpen ? "16px" : "4px"}
      transition="margin-left 0.3s ease"
      paddingX={2}
      borderLeft={`2px solid ${componentBorderColor}`}
    >
      <HStack>
        {/* to={`/module/${module.id}/component/${component.id}`} */}
        <Link to={`/module/${module.id}/component/${component.id}`}>
          <Flex
            height="25px"
            onClick={handleClick}
            justifyContent="left"
            gap="3px"
            cursor="pointer"
          >
            <Text paddingTop="4px" fontSize={12} cursor="pointer">
              {component.name}
            </Text>
            <Box paddingTop="6px"></Box>
          </Flex>
        </Link>

        <Box
          cursor="pointer"
          onClick={() => {
            setSelectedComponent(component);
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </Box>
      </HStack>

      {isOpen &&
        component.elements.map((element) => (
          <Element
            key={element.id}
            module={module}
            component={component}
            element={element}
          />
        ))}
    </Stack>
  );
};

export default Component;

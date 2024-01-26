/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Text, Stack, Flex, Box } from "@chakra-ui/react";
import Element from "./Element";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import useColorModeColors from "../../hooks/useColorModeColors";
import useModuleStore from "../../zustand/store";
import { Link } from "react-router-dom";

const Component = ({ component, module }) => {
  const { setSelectedComponent } = useModuleStore();
  const [isOpen, setIsOpen] = useState(false);
  const { componentBorderColor } = useColorModeColors();
  const handleClick = () => {
    setIsOpen(!isOpen);
    setSelectedComponent(component);
  };

  return (
    <Stack
      marginLeft={4}
      paddingX={2}
      borderLeft={`2px solid ${componentBorderColor}`}
    >
      {/* to={`/module/${module.id}/component/${component.id}`} */}
      <Link to={`/module/${module.id}/component/${component.id}`}>
        <Flex
          onClick={handleClick}
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
      </Link>
      {isOpen &&
        component.elements.map((element) => (
          <Element key={element.id} module={module} component={component} element={element} />
        ))}
    </Stack>
  );
};

export default Component;

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
import { useGetElementQuery } from "../../redux/api/docApiSlice";
import SideSkeleton from "../reusable/SideSkeleton";
import useZustandStore from "../../zustand/store";
const Component = ({ component, module }) => {
  const { selectedModule, setSelectedComponent, selectedComponent } =
    useZustandStore();

  const { data, isLoading, isError } = useGetElementQuery({
    moduleId: selectedComponent.moduleId,
    componentId: selectedComponent.id,
  });

  const elements = data?.data;

  const { toggleLeftBar } = useModuleStore();
  const [isOpen, setIsOpen] = useState(false);
  const { componentBorderColor } = useColorModeColors();

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
    setIsOpen(!isOpen);
    toggleLeftBar();
  };
  console.log("selected component", selectedComponent);
  return (
    <Stack
      marginLeft={isOpen ? "20px" : "16px"}
      transition="margin-left 0.3s ease"
      paddingX={2}
      borderLeft={`2px solid ${componentBorderColor}`}
    >
      <HStack>
        {/* to={`/module/${module.id}/component/${component.id}`} */}
        <Link to={`/module/${module.id}/component/${component.id}`}>
          <Flex
            height="40px"
            onClick={() => handleComponentClick(component)}
            justifyContent="left"
            gap="3px"
            cursor="pointer"
          >
            <Text paddingTop="10px" fontSize={12} cursor="pointer">
              {component.name}
            </Text>
            <Box paddingTop="6px"></Box>
          </Flex>
        </Link>

        <Box
          cursor="pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </Box>
      </HStack>
      {console.log("elements in component", elements)}
      {isOpen &&
        (isLoading ? (
          <SideSkeleton Count={3} width={130} />
        ) : (
          elements?.map((element) => {
            if (element.componentName === component.name) {
              return (
                <Element
                  key={element.id}
                  module={module}
                  component={component}
                  element={element}
                />
              );
            }
            return null; // or any other placeholder if you want to skip rendering
          })
        ))}
    </Stack>
  );
};

export default Component;

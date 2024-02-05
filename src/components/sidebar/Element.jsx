/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Text, Stack, Flex, Box, HStack } from "@chakra-ui/react";
import useColorModeColors from "../../hooks/useColorModeColors";

import { Link } from "react-router-dom";
import { useGetFunctionQuery } from "../../redux/api/docApiSlice";
import SideSkeleton from "../reusable/SideSkeleton";
import useZustandStore from "../../zustand/store";

const Element = ({
  module,
  component,
  element,
  setComponentId,
  setModuleId,
}) => {
  const {
    selectedElement,
    setSelectedElement,
    selectedFunction,
    setSelectedFunction,
    toggleLeftBar,
  } = useZustandStore();

  const [elementId, setElementId] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const { elementBorderColor, functionBorderColor } = useColorModeColors();
  const handleElementClick = (element) => {
    setSelectedElement(element);

    setIsOpen(!isOpen);
    toggleLeftBar();
  };
  const handleFunctionClick = (fn) => () => {
    setSelectedFunction(fn);
    toggleLeftBar();
  };
  const { data, error, isLoading } = useGetFunctionQuery({
    moduleId: element.moduleId,
    componentId: element.componentId,
    elementId: element.id,
  });
  const functions = data?.data;

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
            height="40px"
            onClick={() => handleElementClick(element)}
            justifyContent="left"
            gap="3px"
            cursor="pointer"
          >
            <Text paddingTop="6px" fontSize={12} cursor="pointer">
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

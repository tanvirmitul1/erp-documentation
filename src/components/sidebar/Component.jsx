/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Text, Stack, Flex, Box, HStack } from "@chakra-ui/react";
import Element from "./Element";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import useColorModeColors from "../../hooks/useColorModeColors";
import useModuleStore from "../../zustand/store";
import { Link } from "react-router-dom";
import { useGetElementQuery } from "../../redux/api/docApiSlice";
import SideSkeleton from "../reusable/SideSkeleton";
import useZustandStore from "../../zustand/store";

const Component = ({ component, module }) => {
  const { setSelectedComponent, refetchElement } = useZustandStore();

  const { data, isLoading, isError, refetch } = useGetElementQuery({
    moduleId: component.moduleId,
    componentId: component.id,
  });

  useEffect(() => {
    refetch();
  }, [refetchElement]);

  const elements = data?.data;

  const { toggleLeftBar } = useModuleStore();
  const [isOpen, setIsOpen] = useState(() => {
    return sessionStorage.getItem("componentIsOpen" + component.id) === "true"
      ? true
      : false;
  });
  const { componentBorderColor } = useColorModeColors();

  useEffect(() => {
    // Save isOpen state to sessionStorage whenever it changes
    sessionStorage.setItem("componentIsOpen" + component.id, isOpen);
  }, [isOpen, component.id]);

  const handleComponentClick = () => {
    setIsOpen(!isOpen);
    toggleLeftBar();
  };

  return (
    <Stack
      onClick={() => setSelectedComponent(component)}
      marginLeft={isOpen ? "20px" : "16px"}
      transition="margin-left 0.3s ease"
      paddingX={2}
      borderLeft={`2px solid ${componentBorderColor}`}
      position="relative"
    >
      <Box
        background={componentBorderColor}
        position="absolute"
        top="50%"
        left="-14px"
        height="2px"
        width="12px"
      />
      <HStack>
        <Link to={`/module/${module.id}/component/${component.id}`}>
          <Flex
            height="40px"
            onClick={handleComponentClick}
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

      {isOpen &&
        (isLoading ? (
          <SideSkeleton Count={3} width={130} />
        ) : (
          elements?.map((element) => {
            return (
              <Element
                key={element.id}
                module={module}
                component={component}
                element={element}
              />
            );
          })
        ))}
    </Stack>
  );
};

export default Component;

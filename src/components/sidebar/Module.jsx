/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Text, Stack, Flex, Box, HStack } from "@chakra-ui/react";
import Component from "./Component";
import { SiElementor } from "react-icons/si";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import useColorModeColors from "../../hooks/useColorModeColors";
import { Link } from "react-router-dom";
import { useGetComponentQuery } from "../../redux/api/docApiSlice";
import SideSkeleton from "../reusable/SideSkeleton";
import useZustandStore from "../../zustand/store";

const Module = ({ module }) => {
  const {
    toggleLeftBar,
    setSelectedModule,
    refetchComponent,
    setRefetchComponent,
  } = useZustandStore();
  const { data, error, isLoading, refetch } = useGetComponentQuery(module.id);

  useEffect(() => {
    refetch();
  }, [module.id, refetchComponent, setRefetchComponent]);

  const components = data?.data;

  const { moduleIconColor, componentBorderColor } = useColorModeColors();
  const [isOpen, setIsOpen] = useState(() => {
    return sessionStorage.getItem("moduleIsOpen" + module.id) === "true"
      ? true
      : false;
  });

  useEffect(() => {
    sessionStorage.setItem("moduleIsOpen" + module.id, isOpen);
  }, [isOpen, module.id]);

  const handleModuleClick = () => {
    setIsOpen(!isOpen);
    toggleLeftBar();
  };

  return (
    <Stack
      onClick={() => setSelectedModule(module)}
      marginLeft={isOpen ? "10px" : "0"}
      borderLeft={isOpen ? `2px solid ${componentBorderColor}` : "0"}
      transition="margin-left 0.3s ease"
    >
      <HStack>
        <Link to={`/module/${module.id}`}>
          <Flex
            height="40px"
            alignItems="center"
            justifyContent="left"
            gap="5px"
            cursor="pointer"
            onClick={handleModuleClick}
            marginLeft={1}
          >
            <SiElementor size={20} color={moduleIconColor} />
            <Text paddingTop="12px" fontSize={12} fontWeight="bold">
              {module.name}
            </Text>
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
          <SideSkeleton Count={5} width={150} />
        ) : (
          components?.map((component, index) => (
            <Component
              index={index}
              key={component.id}
              module={module}
              component={component}
            />
          ))
        ))}
    </Stack>
  );
};

export default Module;

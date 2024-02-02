/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Text, Stack, Flex, Box, HStack } from "@chakra-ui/react";
import Component from "./Component";
import { SiElementor } from "react-icons/si";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import useColorModeColors from "../../hooks/useColorModeColors";
import { Link } from "react-router-dom";
import { useGetComponentQuery } from "../../redux/api/docApiSlice";
import useModuleStore from "../../zustand/store";
import SideSkeleton from "../reusable/SideSkeleton";

const Module = ({ module }) => {
  const [moduleId, setModuleId] = useState("");
  const { data, error, isLoading } = useGetComponentQuery(moduleId);
  const components = data?.data;
  const { moduleIconColor } = useColorModeColors();
  const { toggleLeftBar } = useModuleStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleModuleClick = (moduleId) => {
    setModuleId(moduleId);
    setIsOpen(!isOpen);
    toggleLeftBar();
  };

  return (
    <Stack
      marginLeft={isOpen ? "16px" : "0"}
      transition="margin-left 0.3s ease"
    >
      {/* to={`/module/${module.id}`} */}

      <HStack>
        <Link to={`/module/${module.id}`}>
          <Flex
            height="40px"
            alignItems="center"
            justifyContent="left"
            gap="5px"
            cursor="pointer"
            onClick={() => handleModuleClick(module.id)}
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
            setModuleId(module.id);
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
              moduleId={moduleId}
              setModuleId={setModuleId}
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

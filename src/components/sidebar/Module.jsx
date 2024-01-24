/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { Text, Stack, Flex } from "@chakra-ui/react";
import Component from "./Component";
import { SiElementor } from "react-icons/si";
import useModuleStore from "../../zustand/store";
const Module = ({ module }) => {
  const { selectedModule, setSelectedModule } = useModuleStore();
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode } = useColorMode();

  const handleModuleClick = () => {
    
    setSelectedModule(module);
    setIsOpen(!isOpen);
  };

  console.log("selected module", selectedModule);
  return (
    <Stack>
      <Flex gap="5px">
        <SiElementor
          size={20}
          color={colorMode === "light" ? "#199FD6" : "#0cf0e4"}
        />
        <Text
          cursor="pointer"
          onClick={handleModuleClick}
          fontSize={12}
          fontWeight="bold"
        >
          {module.name}
        </Text>
      </Flex>
      {isOpen &&
        module.components.map((component) => (
          <Component key={component.id} component={component} />
        ))}
    </Stack>
  );
};
export default Module;

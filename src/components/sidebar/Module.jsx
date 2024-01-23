/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { Text, Stack, HStack } from "@chakra-ui/react";
import Component from "./Component";
import { SiElementor } from "react-icons/si";
const Module = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <Stack>
      <HStack>
        <SiElementor
          size={25}
          color={colorMode === "light" ? "#2b6cb0" : "#FE428E"}
        />
        <Text
          cursor="pointer"
          onClick={() => setIsOpen(!isOpen)}
          marginTop={3}
          fontSize={20}
          fontWeight="bold"
        >
          {module.name}
        </Text>
      </HStack>
      {isOpen &&
        module.components.map((component) => (
          <Component key={component.id} component={component} />
        ))}
    </Stack>
  );
};
export default Module;

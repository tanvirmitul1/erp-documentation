/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { Text, Stack, Flex } from "@chakra-ui/react";
import Component from "./Component";
import { SiElementor } from "react-icons/si";
const Module = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <Stack>
      <Flex gap="5px">
        <SiElementor
          size={20}
          color={colorMode === "light" ? "#2b6cb0" : "#0cf0e4"}
        />
        <Text
          cursor="pointer"
          onClick={() => setIsOpen(!isOpen)}
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

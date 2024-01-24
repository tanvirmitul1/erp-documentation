/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";

import { Text, Stack, useColorMode } from "@chakra-ui/react";
import Element from "./Element";

const Component = ({ component }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode } = useColorMode();

  // Define border color based on colorMode
  const borderColor = colorMode === "light" ? "#2b6cb0" : "#0cf0e4";

  return (
    <Stack marginLeft={4} paddingX={2} borderLeft={`2px solid ${borderColor}`}>
      <Text fontSize={12} cursor="pointer" onClick={() => setIsOpen(!isOpen)}>
        {component.name}
      </Text>
      {isOpen &&
        component.elements.map((element) => (
          <Element key={element.id} element={element} />
        ))}
    </Stack>
  );
};

export default Component;

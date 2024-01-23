/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";

import { Text, Stack, useColorMode } from "@chakra-ui/react";
import Element from "./Element";

const Component = ({ component }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode } = useColorMode();

  // Define border color based on colorMode
  const borderColor = colorMode === "light" ? "#2b6cb0" : "#FE428E";

  return (
    <Stack marginLeft={10} padding={2} borderLeft={`3px dotted ${borderColor}`}>
      <Text cursor="pointer" onClick={() => setIsOpen(!isOpen)}>
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

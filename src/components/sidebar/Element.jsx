/* eslint-disable react/prop-types */

import { useState } from "react";

import { Text, Stack, useColorMode } from "@chakra-ui/react";
const Element = ({ element }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { colorMode } = useColorMode();
  // Define border color based on colorMode
  const borderColor = colorMode === "light" ? "#2b6cb0" : "#FE428E";
  return (
    <Stack marginLeft={10} padding={2} borderLeft={`3px dotted ${borderColor}`}>
      <Text cursor="pointer" onClick={() => setIsOpen(!isOpen)}>
        {element.name}
      </Text>
      {isOpen &&
        element.functions.map((fn) => (
          <Text
            cursor="pointer"
            key={fn.id}
            marginLeft={10}
            padding={2}
            borderLeft={`3px dotted ${borderColor}`}
          >
            {fn.name}
          </Text>
        ))}
    </Stack>
  );
};

export default Element;

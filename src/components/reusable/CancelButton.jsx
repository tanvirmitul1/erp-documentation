/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// CustomButton.js
import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { Button, Text } from "@chakra-ui/react";

const CancelButton = ({
  text,
  onClick,
  iconSize,
  buttonSize,

  textColor,
}) => {
  const { colorMode } = useColorMode();

  const buttonHoverColor = colorMode === "light" ? "#ddecf0" : "#251f1f";
  const borderColor = colorMode === "light" ? "#199FD6" : "#0dd4ca";

  return (
    <Button
      border={`2px solid ${borderColor}`}
      width={150}
      height="40px"
      fontSize="14px"
      backgroundColor={colorMode === "light" ? "#ffffff" : "#0b0c0c"}
      borderRadius={30}
      size={buttonSize ? buttonSize : "lg"}
      variant="solid"
      onClick={onClick}
      _hover={{ backgroundColor: buttonHoverColor }}
    >
      <Text paddingTop={4} color={textColor}>
        {text ? text : "Add"}
      </Text>
    </Button>
  );
};

export default CancelButton;

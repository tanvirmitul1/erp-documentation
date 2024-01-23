/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// CustomButton.js
import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";

const CustomButton = ({
  text,
  onClick,
  iconSize,
  buttonSize,

  textColor,
}) => {
  const { colorMode } = useColorMode();

  const buttonHoverColor = colorMode === "light" ? "#090e11" : "#0dd4ca";

  return (
    <Button
      border="none"
      backgroundColor={colorMode === "light" ? "#2b6cb0" : "#0cf0e4"}
      borderRadius={30}
      size={buttonSize ? buttonSize : "lg"}
      variant="solid"
      onClick={onClick}
      _hover={{ backgroundColor: buttonHoverColor }}
    >
      <CiCirclePlus size={iconSize ? iconSize : 28} color={textColor} />
      <Text paddingTop={3} marginLeft={2} color={textColor}>
        {text ? text : "Add"}
      </Text>
    </Button>
  );
};

export default CustomButton;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// CustomButton.js
import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { GrUpdate } from "react-icons/gr";

const UpdateButton = ({
  text,
  onClick,
  iconSize,
  buttonSize,
  width,
  textColor,
}) => {
  const { colorMode } = useColorMode();

  const buttonHoverColor = colorMode === "light" ? "#090e11" : "#0dd4ca";

  return (
    <Button
      width={width ? width : "200px"}
      height={10}
      backgroundColor={colorMode === "light" ? "#199FD6" : "#0cf0e4"}
      borderRadius={30}
      size={buttonSize ? buttonSize : "sm"}
      onClick={onClick}
      _hover={{ backgroundColor: buttonHoverColor }}
    >
      <GrUpdate size={iconSize ? iconSize : 20} color={textColor} />
      <Text paddingTop={4} marginLeft={2} color={textColor}>
        {text ? text : "Add"}
      </Text>
    </Button>
  );
};

export default UpdateButton;

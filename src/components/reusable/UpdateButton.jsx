/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// CustomButton.js

import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { GrUpdate } from "react-icons/gr";
import useColorModeColors from "../../hooks/useColorModeColors";

const UpdateButton = ({
  text,
  onClick,
  iconSize,
  buttonSize,
  width,
  textColor,
}) => {
  const { addButtonBgColor, addButtonHoverColor } = useColorModeColors();

  return (
    <Button
      width={width ? width : "auto"}
      height={10}
      backgroundColor={addButtonBgColor}
      borderRadius={30}
      size={buttonSize ? buttonSize : "sm"}
      onClick={onClick}
      _hover={{ backgroundColor: `${addButtonHoverColor}` }}
    >
      <GrUpdate size={iconSize ? iconSize : 20} color={textColor} />
      <Text paddingTop={4} marginLeft={2} color={textColor}>
        {text ? text : "Add"}
      </Text>
    </Button>
  );
};

export default UpdateButton;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// CustomButton.js
import { FaEye } from "react-icons/fa";
import React from "react";
import { Button, Text } from "@chakra-ui/react";

import useColorModeColors from "../../hooks/useColorModeColors";

const ViewButton = ({
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
      <FaEye size={iconSize ? iconSize : 20} color={textColor} />
      <Text paddingTop={4} marginLeft={2} color={textColor}>
        {text ? text : "view"}
      </Text>
    </Button>
  );
};

export default ViewButton;

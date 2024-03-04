/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// CustomButton.js

import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { GrUpdate } from "react-icons/gr";
import useColorModeColors from "../../hooks/useColorModeColors";

const UpdateButton = ({ text, onClick, iconSize, buttonSize, width }) => {
  const {
    updateButtonBgColor,
    updateButtonHoverColor,
    updateButtonTextColor,
    updateButtonHoverTextColor,
    updateButtonBorderColor,
    updateButtonHoverBgColor,
    updateButtonHoverBorderColor,
  } = useColorModeColors();

  return (
    <Button
      width={width ? width : "auto"}
      border={`2px solid ${updateButtonBorderColor}`}
      height={10}
      backgroundColor={updateButtonBgColor}
      borderRadius={30}
      size={buttonSize ? buttonSize : "sm"}
      onClick={onClick}
      _hover={{
        backgroundColor: `${updateButtonHoverBgColor}`,
        border: `2px solid ${updateButtonHoverBorderColor}`,
        transition: "background-color 0.2s ease-in , border 0.3s ease-in-out",
      }}
    >
      <GrUpdate size={iconSize ? iconSize : 20} color={updateButtonTextColor} />
      <Text paddingTop={4} marginLeft={2} color={updateButtonTextColor}>
        {text ? text : "Add"}
      </Text>
    </Button>
  );
};

export default UpdateButton;

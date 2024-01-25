/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// CustomButton.js
import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";
import useColorModeColors from "../../hooks/useColorModeColors";

const AddButton = ({ text, onClick, iconSize, buttonSize, width }) => {
  const { addButtonBgColor, addButtonHoverColor, addButtonTextColor } =
    useColorModeColors();

  return (
    <Button
      width={width ? width : "200px"}
      height={10}
      backgroundColor={addButtonBgColor}
      borderRadius={30}
      size={buttonSize ? buttonSize : "sm"}
      onClick={onClick}
      _hover={{ backgroundColor: `${addButtonHoverColor}` }}
    >
      <CiCirclePlus
        size={iconSize ? iconSize : 20}
        color={addButtonTextColor}
      />
      <Text paddingTop={4} marginLeft={2} color={addButtonTextColor}>
        {text ? text : "Add"}
      </Text>
    </Button>
  );
};

export default AddButton;

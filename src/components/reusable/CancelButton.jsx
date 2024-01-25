/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { Button, Text } from "@chakra-ui/react";
import useColorModeColors from "../../hooks/useColorModeColors";

const CancelButton = ({
  text,
  onClick,

  buttonSize,

  textColor,
}) => {
  const {
    cancelButtonBgColor,
    cancelButtonBorderColor,
    cancelButtonHoverColor,
  } = useColorModeColors();

  return (
    <Button
      border={`2px solid ${cancelButtonBorderColor}`}
      width={150}
      height="40px"
      fontSize="14px"
      backgroundColor={cancelButtonBgColor}
      borderRadius={30}
      size={buttonSize ? buttonSize : "lg"}
      variant="solid"
      onClick={onClick}
      _hover={{ backgroundColor: `${cancelButtonHoverColor}` }}
    >
      <Text paddingTop={4} color={textColor}>
        {text ? text : "Add"}
      </Text>
    </Button>
  );
};

export default CancelButton;

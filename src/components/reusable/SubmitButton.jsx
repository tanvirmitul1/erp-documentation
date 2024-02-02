/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// CustomButton.js
import { useColorMode } from "@chakra-ui/react";
import React from "react";
import {
  Button,
  Text,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

const SubmitButton = ({
  text,
  onClick,
  iconSize,
  buttonSize,
  isLoading,
  textColor,
  width,
}) => {
  const { colorMode } = useColorMode();

  const buttonHoverColor = colorMode === "light" ? "#090e11" : "#0dd4ca";

  return (
    <Button
      isLoading={isLoading}
      loadingText="submitting"
      color={textColor}
      border="none"
      width={width ? width : "auto"}
      height="40px"
      fontSize="14px"
      backgroundColor={colorMode === "light" ? "#2b6cb0" : "#0cf0e4"}
      borderRadius={30}
      size={buttonSize ? buttonSize : "lg"}
      variant="solid"
      onClick={onClick}
      _hover={{ backgroundColor: buttonHoverColor }}
    >
      {isLoading ? (
        <CircularProgress size={10} isIndeterminate color="green.300" mt={4}>
          <CircularProgressLabel> </CircularProgressLabel>
        </CircularProgress>
      ) : (
        `${text ? text : "Add"}`
      )}
    </Button>
  );
};

export default SubmitButton;

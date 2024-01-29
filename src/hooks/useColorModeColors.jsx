import { useColorModeValue } from "@chakra-ui/react";

const useColorModeColors = () => {
  //add  and update button
  const addButtonTextColor = useColorModeValue("white", "black");
  const addButtonBgColor = useColorModeValue("#199FD6", "#0cf0e4");
  const addButtonHoverColor = useColorModeValue("#090e11", "#0dd4ca");

  //cancel button
  const cancelButtonHoverColor = useColorModeValue("#ddecf0", "#251f1f");
  const cancelButtonBgColor = useColorModeValue("#ffffff", "#0b0c0c");
  const cancelButtonBorderColor = useColorModeValue("#199FD6", "#0dd4ca");

  //searchbar
  const searchBgColor = useColorModeValue("#DDF1F9", "#2f2f30");

  //box shadow color
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.2)",
    "rgba(256, 256, 256, 0.2)"
  );

  //modal color
  const modalBgColor = useColorModeValue("white", "#212a41");
  const modalInputBgColor = useColorModeValue("#DDF1F9", "#212a41");
  const modalTextColor = useColorModeValue("#199FD6", "white");
  const modalSubmitButtonTextColor = useColorModeValue("white", "black");
  const modalCancelButtonTextColor = useColorModeValue("#199FD6", "white");
  const modalPlaceholderColor = useColorModeValue("#73caf0", "gray.600");

  //module
  const moduleIconColor = useColorModeValue("#199FD6", "#0cf0e4");
  const modulePathColor = useColorModeValue("#55c5f1", "#0DD4CA");
  const modulePathBgColor = useColorModeValue("#DDF1F9", "#2f2f30");
  const moduleTextColor = useColorModeValue("white", "black");

  //component
  const componentBorderColor = useColorModeValue("#050149", "#0cf0e4");

  //element
  const elementBorderColor = useColorModeValue("#1911b8", "#04a19a");
  //function
  const functionBorderColor = useColorModeValue("#362ddf", "#046964");

  //copy icon color

  const copyIconColor = useColorModeValue("black", "white");
  return {
    addButtonTextColor,
    addButtonBgColor,
    cancelButtonHoverColor,
    cancelButtonBgColor,
    cancelButtonBorderColor,
    addButtonHoverColor,
    searchBgColor,
    boxShadowColor,
    modalBgColor,
    modalInputBgColor,
    modalTextColor,
    modalSubmitButtonTextColor,
    modalCancelButtonTextColor,
    modalPlaceholderColor,
    moduleIconColor,
    componentBorderColor,
    elementBorderColor,
    functionBorderColor,
    modulePathColor,
    modulePathBgColor,
    moduleTextColor,
    copyIconColor,
  };
};

export default useColorModeColors;

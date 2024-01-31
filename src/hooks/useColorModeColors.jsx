import { useColorModeValue } from "@chakra-ui/react";

const useColorModeColors = () => {
  //add  and update button
  const addButtonTextColor = useColorModeValue("white", "black");
  const addButtonBgColor = useColorModeValue("#199FD6", "#33bb73");
  const addButtonHoverColor = useColorModeValue("#090e11", "#51dd93");

  //cancel button
  const cancelButtonHoverColor = useColorModeValue("#ddecf0", "#251f1f");
  const cancelButtonBgColor = useColorModeValue("#ffffff", "#0b0c0c");
  const cancelButtonBorderColor = useColorModeValue("#199FD6", "#33bb73");

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
  const moduleIconColor = useColorModeValue("#199FD6", "#33bb73");
  const modulePathColor = useColorModeValue("#55c5f1", "#33bb73");
  const modulePathBgColor = useColorModeValue("#DDF1F9", "#2f2f30");
  const moduleTextColor = useColorModeValue("white", "black");

  //component
  const componentBorderColor = useColorModeValue("#050149", "#33bb73");

  //element
  const elementBorderColor = useColorModeValue("#1911b8", "#33bb73");
  //function
  const functionBorderColor = useColorModeValue("#362ddf", "#046964");

  //copy icon color

  const copyIconColor = useColorModeValue("black", "white");

  //sidebar

  const sidebarBgColor = useColorModeValue("white", "#1A202C");

  //home header
  const homeHeaderBgColor = useColorModeValue("#1f7ca1", "#33bb73");
  const homeHeaderTextColor = useColorModeValue("#ffffff", "#ffffff");

  //module card
  const cardHoverBgColor = useColorModeValue("#d8f2fc", "#242b2a");
  const cardIconColor = useColorModeValue("#1f7ca1", "#33bb73");

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
    sidebarBgColor,
    cardHoverBgColor,
    homeHeaderBgColor,
    homeHeaderTextColor,
    cardIconColor
  };
};

export default useColorModeColors;

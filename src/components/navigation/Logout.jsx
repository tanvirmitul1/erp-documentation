/* eslint-disable no-unused-vars */
import React from "react";
import { IconButton, useToast, Flex, Text, Box } from "@chakra-ui/react";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import useColorModeColors from "../../hooks/useColorModeColors";

const Logout = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { exitHoverBgColor, profileAuthBgColor } = useColorModeColors();
  const handleLogout = () => {
    sessionStorage.removeItem("loginData");

    navigate("/login");

    toast({
      position: "top-right",
      title: "Logout successful.",
      description: "You have been logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Flex
      gap={2}
      backgroundColor={profileAuthBgColor}
      onClick={handleLogout}
      cursor="pointer"
      alignItems={`center`}
      border={`1px solid grey`}
      padding={3}
      style={{
        borderTopRightRadius: "50px",
        borderBottomRightRadius: "50px",
      }}
      _hover={{
        backgroundColor: exitHoverBgColor,
        transition: `background-color .2s ease-in-out`,
      }}
      width={120}
    >
      <LuLogOut color="red" />

      <Box fontSize={12} opacity={`.8`}>
        {" "}
        Sign Out{" "}
      </Box>
    </Flex>
  );
};

export default Logout;

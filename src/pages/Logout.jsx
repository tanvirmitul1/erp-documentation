/* eslint-disable no-unused-vars */
import React from "react";
import { IconButton, useToast, Flex, Text } from "@chakra-ui/react";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    sessionStorage.removeItem("loginData");

    navigate("/login");

    toast({
      position: "top-right",
      title: "Logout successful.",
      description: "You have been logged out.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Flex gap={2} onClick={handleLogout} cursor="pointer">
      <IconButton w={1} h={7} icon={<LuLogOut />} aria-label="Logout" />
      <Text> Log out </Text>
    </Flex>
  );
};

export default Logout;

/* eslint-disable no-unused-vars */
import React from "react";
import { IconButton, useToast } from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
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
    <IconButton
      w={1}
      h={7}
      icon={<AiOutlineLogout />}
      colorScheme="red"
      aria-label="Logout"
      onClick={handleLogout}
    />
  );
};

export default Logout;

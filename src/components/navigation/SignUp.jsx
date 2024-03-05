/* eslint-disable no-unused-vars */
import React from "react";
import { IconButton, useToast, Flex, Text, Box } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import useColorModeColors from "../../hooks/useColorModeColors";
const SingUp = () => {
  const navigate = useNavigate();

  const { exitHoverBgColor, profileAuthBgColor } = useColorModeColors();
  const handleSingUp = () => {
    navigate("/register");
  };

  return (
    <Flex
      _disabled
      gap={2}
      backgroundColor={profileAuthBgColor}
      // onClick={handleSingUp}
      cursor="not-allowed"
      alignItems={`center`}
      border={`1px solid grey`}
      padding={3}
      style={{
        borderTopLeftRadius: "50px",
        borderBottomLeftRadius: "50px",
      }}
      width={120}
      _hover={{
        backgroundColor: exitHoverBgColor,
        transition: `background-color .2s ease-in-out`,
      }}
    >
      <LuPlus color="#1ce636" />

      <Box fontSize={12} opacity={`.8`}>
        {" "}
        Add Account{" "}
      </Box>
    </Flex>
  );
};

export default SingUp;

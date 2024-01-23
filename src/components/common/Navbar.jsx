/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { HStack, Image, Box, Text, useColorModeValue } from "@chakra-ui/react";
import Logo from "../../assets/logo.jpg";
import Avatar from "../../assets/avatar.svg";
import ColorMOdeSwitch from "../navigation/ColorModeSwitch";

const NavBar = () => {
  // const textColor = useColorModeValue("white");
  // const changeColor = useColorModeValue("black", "white");
  return (
    <Box w="100vw" paddingX={12} paddingY={6}>
      <HStack justifyContent="space-between">
        <HStack>
          <Image src={Logo} width={32} />
        </HStack>
        <HStack gap={20}>
          <ColorMOdeSwitch />
          <Image src={Avatar} width={10} />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;

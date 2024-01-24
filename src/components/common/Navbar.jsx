/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  HStack,
  Image,
  Box,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "../../assets/logo.jpg";
import LogoWhite from "../../assets/logoWhite.png";
import Avatar from "../../assets/avatar.svg";
import ColorMOdeSwitch from "../navigation/ColorModeSwitch";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const boxShadowColor =
    colorMode === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(256, 256, 256, 0.2)";
  // const textColor = useColorModeValue("white");
  // const changeColor = useColorModeValue("black", "white");
  return (
    <Box
      w="100vw"
      paddingX={12}
      paddingY={2}
      boxShadow={`0 2px 4px ${boxShadowColor} `}
    >
      <HStack justifyContent="space-between">
        <Link to="/">
          {colorMode === "light" ? (
            <Image src={Logo} width={28} />
          ) : (
            <Image src={LogoWhite} width={28} />
          )}
        </Link>
        <HStack gap={20}>
          <ColorMOdeSwitch />
          <Image src={Avatar} width={10} />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;

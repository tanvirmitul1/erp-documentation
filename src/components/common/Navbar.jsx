/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  HStack,
  Image,
  Box,
  Text,
  useColorModeValue,
  useColorMode,
  Button,
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

  return (
    <Box
      w="100vw"
      paddingX={12}
      paddingY={1}
      boxShadow={`0 2px 4px ${boxShadowColor} `}
    >
      <HStack justifyContent={{ base: "right", lg: "space-between" }}>
        <Box display={{ base: "none", lg: "block" }}>
          <Link to="/module/1">
            {colorMode === "light" ? (
              <Image src={Logo} width={20} />
            ) : (
              <Image src={LogoWhite} width={20} />
            )}
          </Link>
        </Box>
        <HStack gap={10}>
          <ColorMOdeSwitch />
          <Image src={Avatar} width={8} />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;

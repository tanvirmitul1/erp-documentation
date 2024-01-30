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
      paddingRight={5}
      paddingLeft="50px"

      paddingY={1}
      boxShadow={`0 2px 4px ${boxShadowColor} `}
    >
      <HStack justifyContent="space-between">
        <Box>
          <Link to="/">
            {colorMode === "light" ? (
              <Image src={Logo} width={20} />
            ) : (
              <Image src={LogoWhite} width={20} />
            )}
          </Link>
        </Box>
        <HStack gap={5}>
          <ColorMOdeSwitch />
          <Image src={Avatar} width={8} />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;

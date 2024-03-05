/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { HStack, Image, Box, useColorMode, Avatar } from "@chakra-ui/react";
import Logo from "../../assets/logo.jpg";
import LogoWhite from "../../assets/logoWhite.png";
// import Avatar from "../../assets/avatar.svg";

import { Link } from "react-router-dom";

import { useState } from "react";
import useColorModeColors from "../../hooks/useColorModeColors";
import Profile from "../navigation/Profile";

const NavBar = () => {
  const loginData = JSON.parse(sessionStorage.getItem("loginData"));
  const [showProfile, setShowProfile] = useState(false);
  const userName = loginData?.data?.name || "Guest";
  const { profileBgColor } = useColorModeColors();
  const { colorMode } = useColorMode();
  const boxShadowColor =
    colorMode === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(256, 256, 256, 0.2)";
  const handleProfileClick = () => {
    setShowProfile((prev) => !prev);
  };
  return (
    <Box
      w="100vw"
      paddingX={12}
      paddingY={1}
      boxShadow={`0 2px 4px ${boxShadowColor} `}
    >
      <HStack justifyContent={{ base: "right", lg: "space-between" }}>
        <Box display={{ base: "none", lg: "block" }}>
          <Link to="/">
            {colorMode === "light" ? (
              <Image src={Logo} width={20} />
            ) : (
              <Image src={LogoWhite} width={20} />
            )}
          </Link>
        </Box>
        <HStack gap={10}>
          <HStack cursor="pointer" onClick={handleProfileClick}>
            <Box>{userName}</Box>
            {/* <Image src={Avatar} width={8} /> */}
            <Avatar size="sm" name={userName} />
          </HStack>
          {
            <Box
              position="absolute"
              top="45px"
              right={showProfile ? "12px" : "-370px"}
              backgroundColor={profileBgColor}
              transition="right 0.5s ease-out"
              zIndex={1000000}
              rounded="lg"
              boxShadow="-10px 10px 10px rgba(0, 0, 0, 0.5)"
            >
              <Profile handleProfileClick={handleProfileClick} />
            </Box>
          }
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;

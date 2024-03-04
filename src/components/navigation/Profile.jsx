/* eslint-disable no-unused-vars */

import { HStack, Image, Box, VStack } from "@chakra-ui/react";
Logout;
import Avatar from "../../assets/avatar.svg";
import Logout from "../../pages/Logout";
import ColorModeSwitch from "./ColorModeSwitch";
const Profile = () => {
  const loginData = JSON.parse(sessionStorage.getItem("loginData"));

  const userName = loginData?.data?.name || "Guest";

  return (
    <VStack gap={10} padding={10}>
      <HStack>
        <Box>{userName}</Box>
        <Image src={Avatar} width={8} />
      </HStack>
      <Box width={100}>
        <ColorModeSwitch />
      </Box>
      <Logout />
    </VStack>
  );
};

export default Profile;

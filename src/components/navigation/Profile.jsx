/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { RxCross2 } from "react-icons/rx";
import {
  HStack,
  Image,
  Avatar,
  Box,
  VStack,
  useColorMode,
  Flex,
  Text,
} from "@chakra-ui/react";
Logout;

import Logout from "./Logout";
import ColorModeSwitch from "./ColorModeSwitch";
import useColorModeColors from "../../hooks/useColorModeColors";
import SingUp from "./SignUp";
const Profile = ({ handleProfileClick }) => {
  const { colorMode } = useColorMode();
  const loginData = JSON.parse(sessionStorage.getItem("loginData"));
  const { exitHoverBgColor } = useColorModeColors();
  const userName = loginData?.data?.name || "Guest";
  const userEmail = loginData?.data?.email;

  return (
    <Flex
      flexDirection="column"
      padding={5}
      gap={5}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        onClick={() => handleProfileClick()}
        cursor="pointer"
        position="absolute"
        zIndex={100000000}
        top={1}
        right={1}
        rounded={`3xl`}
        padding={1}
        _hover={{
          backgroundColor: exitHoverBgColor,
          transition: `background-color .3s ease-in`,
        }}
      >
        <RxCross2 />
      </Box>
      <HStack>
        <Avatar size="lg" name={userName} src="https://bit.ly/kent-c-dodds" />
        <Box>
          <Text fontSize={20} height="15px">
            {userName}
          </Text>
          <Text fontSize={12} height="10px" opacity=".5">
            {userEmail}
          </Text>
        </Box>
      </HStack>
      <Flex height="15px">
        <Box width={100}>
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Box>
        <Box width={50}>
          <ColorModeSwitch />
        </Box>
      </Flex>
      <Flex marginTop={2} gap={4}>
        <SingUp />

        <Logout />
      </Flex>
    </Flex>
  );
};

export default Profile;

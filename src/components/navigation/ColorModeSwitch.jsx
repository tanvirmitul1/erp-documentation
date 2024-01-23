import { useColorMode, Box, Image } from "@chakra-ui/react";
import DarkTheme from "../../assets/toggleLight.png";
import LightTheme from "../../assets/toggleLight.svg";
const ColorMOdeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box cursor="pointer" onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <Image width={16} src={DarkTheme} />
      ) : (
        <Image width={16} src={LightTheme} />
      )}
    </Box>
  );
};

export default ColorMOdeSwitch;

import { useColorMode, Box, Image } from "@chakra-ui/react";
import DarkTheme from "../../assets/toggleLight.png";
import LightTheme from "../../assets/toggleLight.svg";
const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box cursor="pointer" onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <Image width={14} src={DarkTheme} />
      ) : (
        <Image width={14} src={LightTheme} />
      )}
    </Box>
  );
};

export default ColorModeSwitch;

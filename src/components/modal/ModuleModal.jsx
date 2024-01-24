/* eslint-disable react/prop-types */
import {
  useColorMode,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import ReactModal from "react-modal";

import SubmitButton from "../reusable/SubmitButton";
import CancelButton from "../reusable/CancelButton";

const ModuleModal = ({ isOpen, onRequestClose }) => {
  const { colorMode } = useColorMode();
  const bg = colorMode === "dark" ? "#212a41" : "white";
  const inputBg = colorMode === "light" ? "#DDF1F9" : "#212a41";
  const textColor = colorMode === "light" ? "#199FD6" : "white";
  const buttonTextColor = colorMode === "light" ? "white" : "black";
  const cancelButtonTextColor = colorMode === "light" ? "#199FD6" : "white";
  const placeholderColor = colorMode === "light" ? "#73caf0" : "gray.600";

  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          margin: "auto auto",
        },
        content: {
          borderRadius: "20px",
          backgroundColor: bg,
          maxWidth: "550px",
          height: "600px",
          margin: "auto auto",
          border: "none",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Flex flexDirection="column">
        <FormControl isRequired>
          <FormLabel fontSize="16px" color={textColor} marginY={4}>
            Module Name
          </FormLabel>
          <Input
            paddingX={6}
            rounded={50}
            backgroundColor={inputBg}
            placeholder="Select Module"
            _placeholder={{
              opacity: 1,
              color: `${placeholderColor}`,
              fontSize: "16px",
            }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize="16px" color={textColor} marginY={4}>
            Module Directory path
          </FormLabel>
          <Input
            fontSize="16px"
            paddingX={6}
            rounded={50}
            backgroundColor={inputBg}
            placeholder="localhost/phpadmin/index.php"
            _placeholder={{
              opacity: 1,
              color: `${placeholderColor}`,
              fontSize: "16px",
            }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize="16px" color={textColor} marginY={4}>
            Description
          </FormLabel>
          <Textarea
            fontSize="16px"
            overflowX="hidden"
            overflowY="auto"
            height="200px"
            padding={4}
            rounded={30}
            backgroundColor={inputBg}
          />
        </FormControl>
        <Flex justifyContent="center" marginTop={10} gap={10}>
          <CancelButton
            onClick={onRequestClose}
            textColor={cancelButtonTextColor}
            text="Cancel"
          />
          <SubmitButton textColor={buttonTextColor} text="Submit" />
        </Flex>
      </Flex>
    </ReactModal>
  );
};

export default ModuleModal;

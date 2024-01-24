/* eslint-disable react/prop-types */
import {
  useColorMode,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import ReactModal from "react-modal";

const ModuleModal = ({ isOpen, onRequestClose }) => {
  const { colorMode } = useColorMode();
  const bg = colorMode === "dark" ? "#212a41" : "white";
  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          borderRadius: "20px",
          backgroundColor: bg,
          maxWidth: "600px",
          position: "absolute",
          left: "35%",
          border: "none",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Flex flexDirection="column">
        <FormControl isRequired>
          <FormLabel>Module Name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Module Directory path</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="First name" />
        </FormControl>
        <Button colorScheme="blue">Button</Button>
      </Flex>
    </ReactModal>
  );
};

export default ModuleModal;

/* eslint-disable react/prop-types */
import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import ReactModal from "react-modal";

import SubmitButton from "../reusable/SubmitButton";
import CancelButton from "../reusable/CancelButton";
import useColorModeColors from "../../hooks/useColorModeColors";

const ModuleModal = ({ isOpen, onRequestClose }) => {
  const {
    modalBgColor,
    modalInputBgColor,
    modalTextColor,
    modalSubmitButtonTextColor,
    modalCancelButtonTextColor,
    modalPlaceholderColor,
  } = useColorModeColors();

  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          margin: "auto auto",
        },
        content: {
          borderRadius: "20px",
          backgroundColor: modalBgColor,
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
          <FormLabel fontSize="16px" color={modalTextColor} marginY={4}>
            Module Name
          </FormLabel>
          <Input
            paddingX={6}
            rounded={50}
            backgroundColor={modalInputBgColor}
            placeholder="Select Module"
            _placeholder={{
              opacity: 1,
              color: `${modalPlaceholderColor}`,
              fontSize: "16px",
            }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize="16px" color={modalTextColor} marginY={4}>
            Module Directory path
          </FormLabel>
          <Input
            fontSize="16px"
            paddingX={6}
            rounded={50}
            backgroundColor={modalInputBgColor}
            placeholder="localhost/phpadmin/index.php"
            _placeholder={{
              opacity: 1,
              color: `${modalPlaceholderColor}`,
              fontSize: "16px",
            }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize="16px" color={modalTextColor} marginY={4}>
            Description
          </FormLabel>
          <Textarea
            fontSize="16px"
            overflowX="hidden"
            overflowY="auto"
            height="200px"
            padding={4}
            rounded={30}
            backgroundColor={modalInputBgColor}
          />
        </FormControl>
        <Flex justifyContent="center" marginTop={10} gap={10}>
          <CancelButton
            onClick={onRequestClose}
            textColor={modalCancelButtonTextColor}
            text="Cancel"
          />
          <SubmitButton textColor={modalSubmitButtonTextColor} text="Submit" />
        </Flex>
      </Flex>
    </ReactModal>
  );
};

export default ModuleModal;

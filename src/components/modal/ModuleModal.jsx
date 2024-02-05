/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  useToast,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import ReactModal from "react-modal";
import SubmitButton from "../reusable/SubmitButton";
import CancelButton from "../reusable/CancelButton";
import useColorModeColors from "../../hooks/useColorModeColors";
import { useAddModuleMutation } from "../../redux/api/docApiSlice"; // Make sure this path is correct

const ModuleModal = ({ isOpen, onRequestClose, setModules }) => {
  const [addModule, { isLoading }] = useAddModuleMutation();
  const toast = useToast();
  const {
    modalBgColor,
    modalInputBgColor,
    modalTextColor,
    modalSubmitButtonTextColor,
    modalCancelButtonTextColor,
    modalPlaceholderColor,
  } = useColorModeColors();

  const [formData, setFormData] = useState({
    name: "",
    directory_path: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    if (!formData.name || !formData.directory_path || !formData.description) {
      toast({
        position: "top-right",
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return; // Prevent the form submission
    }

    try {
      const payload = await addModule(formData).unwrap();

      // Update state with the new module
      setModules((prevModules) => [...prevModules, payload?.data]);

      console.log("payload in add module", payload?.data);
      toast({
        position: "top-right",
        title: "Module Added.",
        description: "Your module has been added successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onRequestClose();
    } catch (err) {
      toast({
        zIndex: 100000,
        position: "top-right",
        title: "Adding Module failed.",
        description: err.data?.message || "Could not add the module.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          margin: "auto auto",
          zIndex: 1000,
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
      <form>
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
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              name="directory_path"
              value={formData.directory_path}
              onChange={handleChange}
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
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </FormControl>
          <Flex justifyContent="center" marginTop={10} gap={10}>
            <CancelButton
              onClick={onRequestClose}
              textColor={modalCancelButtonTextColor}
              text="Cancel"
            />
            <SubmitButton
              onClick={handleSubmit}
              isLoading={isLoading}
              textColor={modalSubmitButtonTextColor}
              text="Submit"
            ></SubmitButton>
          </Flex>
        </Flex>
      </form>
    </ReactModal>
  );
};

export default ModuleModal;

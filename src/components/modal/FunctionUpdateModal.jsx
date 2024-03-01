/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import ReactModal from "react-modal";
import SubmitButton from "../reusable/SubmitButton";
import CancelButton from "../reusable/CancelButton";
import useColorModeColors from "../../hooks/useColorModeColors";
import { useUpdateFunctionMutation } from "../../redux/api/docApiSlice"; // Adjust the hook name if necessary
import useZustandStore from "../../zustand/store";
import FormatDate from "../../utils/FormatDate";

const FunctionUpdateModal = ({ isOpen, onRequestClose }) => {
  const { selectedFunction, setSelectedFunction, setRefetchFunction } =
    useZustandStore(); // Assuming useZustandStore has a selectedFunction

  const [updateFunction, { isLoading }] = useUpdateFunctionMutation(); // Adjust according to your actual mutation hook
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
    function_id: selectedFunction ? selectedFunction.id : "",
    element_id: selectedFunction ? selectedFunction.elementId : "",
    component_id: selectedFunction ? selectedFunction.componentId : "",
    module_id: selectedFunction ? selectedFunction.moduleId : "",
    name: selectedFunction ? selectedFunction.name : "",
    function_code: selectedFunction ? selectedFunction.function_code : "",
    directory_path: selectedFunction ? selectedFunction.directory_path : "",
    description: selectedFunction ? selectedFunction.description : "",
  });

  useEffect(() => {
    setFormData({
      function_id: selectedFunction ? selectedFunction.id : "",
      element_id: selectedFunction ? selectedFunction.elementId : "",
      component_id: selectedFunction ? selectedFunction.componentId : "",
      module_id: selectedFunction ? selectedFunction.moduleId : "",
      name: selectedFunction ? selectedFunction.name : "",
      function_code: selectedFunction ? selectedFunction.function_code : "",
      directory_path: selectedFunction ? selectedFunction.directory_path : "",
      description: selectedFunction ? selectedFunction.description : "",
    });
  }, [selectedFunction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.directory_path ||
      !formData.description ||
      !formData.function_code
    ) {
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
      const payload = await updateFunction(formData).unwrap();
      if (payload.status === 200) {
        setSelectedFunction({
          ...payload.data,
          last_updated_by_name: payload.data.updated_by_name,
        });
        toast({
          position: "top-right",
          title: "Function Updated.",
          description: "Your function has been updated successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        onRequestClose();
        setRefetchFunction();
      } else {
        toast({
          zIndex: 100000,
          position: "top-right",
          title: "Updating Function failed.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        zIndex: 100000,
        position: "top-right",
        title: "Updating Function failed.",
        description: err.data?.message || "Could not update the function.",
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
          height: "auto", // Adjust to auto for content size
          margin: "auto auto",
          border: "none",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <form onSubmit={handleSubmit}>
        <Flex flexDirection="column">
          <FormControl isRequired>
            <FormLabel fontSize="16px" color={modalTextColor} marginY={4}>
              Function Name
            </FormLabel>
            <Input
              paddingX={6}
              rounded={50}
              backgroundColor={modalInputBgColor}
              placeholder="Enter Function Name"
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
              Function Code
            </FormLabel>
            <Textarea
              fontSize="16px"
              overflowX="hidden"
              overflowY="auto"
              height="200px"
              padding={4}
              rounded={30}
              backgroundColor={modalInputBgColor}
              name="function_code"
              value={formData.function_code}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="16px" color={modalTextColor} marginY={4}>
              Function Directory Path
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
            />
          </Flex>
        </Flex>
      </form>
    </ReactModal>
  );
};

export default FunctionUpdateModal;

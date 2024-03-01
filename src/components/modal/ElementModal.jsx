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
  Box,
} from "@chakra-ui/react";
import ReactModal from "react-modal";
import SubmitButton from "../reusable/SubmitButton";
import CancelButton from "../reusable/CancelButton";
import useColorModeColors from "../../hooks/useColorModeColors";

import useZustandStore from "../../zustand/store";
import { useAddElementMutation } from "../../redux/api/docApiSlice";

const ElementModal = ({ isOpen, onRequestClose }) => {
  const { selectedComponent, setRefetchElement } = useZustandStore();

  const [addElement, { isLoading }] = useAddElementMutation();

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
    module_id: selectedComponent.moduleId,
    component_id: selectedComponent.id,
    name: "",
    directory_path: "",
    description: "",
  });

  // Update formData when selectedComponent changes
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      module_id: selectedComponent.moduleId,
      component_id: selectedComponent.id,
    }));
  }, [selectedComponent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = await addElement(formData).unwrap();

      if (payload.status === 200) {
        toast({
          position: "top-right",
          title: "Element Added.",
          description: "Your element has been added successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          zIndex: 100000,
          position: "top-right",
          title: "Adding Element failed.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }

      onRequestClose();
      setRefetchElement();
    } catch (err) {
      toast({
        zIndex: 100000,
        position: "top-right",
        title: "Adding Element failed.",
        description: err.data?.message || "Could not add the element.",
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
        },
        content: {
          borderRadius: "20px",
          backgroundColor: modalBgColor,
          maxWidth: "550px",
          maxHeight: "730px",
          margin: "auto auto",
          border: "none",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <form>
        <Flex flexDirection="column">
          <FormControl>
            <FormLabel fontSize="14px" color={modalTextColor}>
              Module Name
            </FormLabel>
            <Box
              border={`2px solid rgba(149, 154, 160, 0.5)`}
              color={modalTextColor}
              fontSize="14px"
              padding={2}
              paddingX={10}
              height={10}
              rounded={50}
              backgroundColor={modalInputBgColor}
            >
              {selectedComponent ? selectedComponent.moduleName : ""}
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel fontSize="14px" color={modalTextColor} marginY={4}>
              Component Name
            </FormLabel>
            <Box
              border={`2px solid rgba(149, 154, 160, 0.5)`}
              color={modalTextColor}
              fontSize="14px"
              padding={2}
              paddingX={10}
              height={10}
              rounded={50}
              backgroundColor={modalInputBgColor}
            >
              {selectedComponent ? selectedComponent.name : ""}
            </Box>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="14px" color={modalTextColor} marginY={4}>
              Element Name
            </FormLabel>
            <Input
              paddingX={6}
              rounded={50}
              backgroundColor={modalInputBgColor}
              placeholder="Enter Element Name"
              _placeholder={{
                opacity: 1,
                color: `${modalPlaceholderColor}`,
                fontSize: "14px",
              }}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="14px" color={modalTextColor} marginY={4}>
              Element Directory Path
            </FormLabel>
            <Input
              fontSize="14px"
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
          <Flex justifyContent="center" marginTop={5} gap={10}>
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

export default ElementModal;

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
import { useAddComponentMutation } from "../../redux/api/docApiSlice";

const ComponentModal = ({ isOpen, onRequestClose }) => {
  // const { selectedModule, setComponents } = useZustandStore();
  // const refetchComponent = useZustandStore((state) => state.refetchComponent);
  // const refetchModule = useZustandStore((state) => state.refetchModule);
  const {
    selectedModule,
    refetchComponent,
    refetchModule,
    setRefetchComponent,
  } = useZustandStore();

  const [addComponent, { isLoading }] = useAddComponentMutation();

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
    module_id: selectedModule?.id,
    name: "",
    directory_path: "",
    description: "",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      module_id: selectedModule?.id,
    }));
  }, [selectedModule]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.directory_path || !formData.description) {
      toast({
        position: "top-right",
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const payload = await addComponent({
      ...formData,
      module_id: selectedModule?.id,
    }).unwrap();

    if (payload.status === 200) {
      toast({
        position: "top-right",
        title: "Component Added.",
        description: "Your component has been added successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      onRequestClose();

      setRefetchComponent();
    } else {
      toast({
        zIndex: 100000,
        position: "top-right",
        title: "Adding Component failed.",
        description: "Could not add the component.",
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
          height: "650px",
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
              {selectedModule ? selectedModule.name : ""}
            </Box>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="14px" color={modalTextColor} marginY={4}>
              Component Name
            </FormLabel>
            <Input
              paddingX={6}
              rounded={50}
              backgroundColor={modalInputBgColor}
              placeholder="Enter Component Name"
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
              Component Directory path
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

export default ComponentModal;

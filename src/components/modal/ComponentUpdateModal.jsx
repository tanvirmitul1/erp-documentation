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

import useZustandStore from "../../zustand/store";
import { useUpdateComponentMutation } from "../../redux/api/docApiSlice";
import FormatDate from "../../utils/FormatDate";

const ComponentUpdateModal = ({ isOpen, onRequestClose }) => {
  const { selectedComponent, setSelectedComponent } = useZustandStore();
  const refetchComponent = useZustandStore((state) => state.refetchComponent);
  const refetchModule = useZustandStore((state) => state.refetchModule);

  const [updateComponent, { isLoading }] = useUpdateComponentMutation();
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
    component_id: selectedComponent ? selectedComponent.id : "",
    module_id: selectedComponent ? selectedComponent.moduleId : "",
    name: selectedComponent ? selectedComponent.name : "",
    directory_path: selectedComponent ? selectedComponent.directory_path : "",
    description: selectedComponent ? selectedComponent.description : "",
  });

  useEffect(() => {
    setFormData({
      component_id: selectedComponent ? selectedComponent.id : "",
      module_id: selectedComponent ? selectedComponent.moduleId : "",
      name: selectedComponent ? selectedComponent.name : "",
      directory_path: selectedComponent ? selectedComponent.directory_path : "",
      description: selectedComponent ? selectedComponent.description : "",
    });
  }, [selectedComponent]);

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

    const payload = await updateComponent(formData).unwrap();

    if (payload.status === 200) {
      setSelectedComponent({
        ...payload.data,
        last_updated_by_name: payload.data.updated_by_name,
      });

      toast({
        position: "top-right",
        title: "Component Added.",
        description: "Your component has been added successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onRequestClose();
      refetchComponent();
      refetchModule();
    } else {
      toast({
        zIndex: 100000,
        position: "top-right",
        title: "Adding Component failed.",
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
          height: "600px", // Adjust height as needed
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
                fontSize: "16px",
              }}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="16px" color={modalTextColor} marginY={4}>
              Component Directory path
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

export default ComponentUpdateModal;

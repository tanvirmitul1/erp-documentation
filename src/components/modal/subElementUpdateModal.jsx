/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
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
import { useUpdateElementMutation } from "../../redux/api/docApiSlice"; // Adjust the hook name if necessary
import useZustandStore from "../../zustand/store";

const SubElementUpdateModal = ({ isOpen, onRequestClose, element }) => {
  const { setRefetchElement } = useZustandStore();
  const [updateElement, { isLoading }] = useUpdateElementMutation(); // Adjust according to your actual mutation hook
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
    element_id: element ? element.id : "",
    component_id: element ? element.componentId : "",
    module_id: element ? element.moduleId : "",
    name: element ? element.name : "",
    directory_path: element ? element.directory_path : "",
    description: element ? element.description : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = await updateElement(formData).unwrap();
      if (payload.status === 200) {
        toast({
          position: "top-right",
          title: "Element Updated.",
          description: "Your element has been updated successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        onRequestClose();
        setRefetchElement();
      } else {
        toast({
          zIndex: 100000,
          position: "top-right",
          title: "Updating Element failed.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        zIndex: 100000,
        position: "top-right",
        title: "Updating Element failed.",
        description: err.data?.message || "Could not update the element.",
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
                fontSize: "16px",
              }}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="16px" color={modalTextColor} marginY={4}>
              Element Directory Path
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

export default SubElementUpdateModal;

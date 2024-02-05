import { create } from "zustand";

const useZustandStore = create((set) => ({
  //modules
  selectedModule: {
    id: 1,
    name: "Authentication Module",
    directory_path: "127.0.0.1:8000/api/modules/authentication",
    description: "no description",
    added_by: "2",
    last_updated_by: "2",
    last_updated_at: "2024-02-05 09:34:08",
    created_at: "2024-02-05T06:22:28.000000Z",
    updated_at: "2024-02-05T09:34:08.000000Z",
    added_by_id: "2",
    added_by_name: "Tanvir Mitul",
    last_updated_by_id: "2",
    last_updated_by_name: "Tanvir Mitul",
  },
  setSelectedModule: (module) => set({ selectedModule: module }),

  //components
  selectedComponent: {
    id: 1,
    module_id: "1",
    name: "User Authentication",
    directory_path: "localhostsrc/modules/authentication/user",
    description:
      "This component manages the authentication of user accounts. It includes functionalities such as user login, logout, password reset, and account creation. The module interacts with the database to validate user credentials and maintain session information",
    added_by: "2",
    last_updated_by: null,
    last_updated_at: null,
    created_at: "2024-02-05T07:30:29.000000Z",
    updated_at: "2024-02-05T07:30:29.000000Z",
    moduleId: "1",
    moduleName: "Authentication Module",
    added_by_id: "2",
    added_by_name: "Tanvir Mitul",
    last_updated_by_id: null,
    last_updated_by_name: null,
  },
  setSelectedComponent: (component) => set({ selectedComponent: component }),

  //elements
  selectedElement: {
    id: 1,
    module_id: "1",
    component_id: "1",
    name: "User Auth Element 1",
    directory_path: "127.0.0.1:8000/api/modules/element",
    description: "no description",
    added_by: "2",
    last_updated_by: "2",
    last_updated_at: "2024-02-05 09:53:42",
    created_at: "2024-02-05T09:42:33.000000Z",
    updated_at: "2024-02-05T09:53:42.000000Z",
    moduleId: "1",
    moduleName: "Authentication Module",
    componentId: "1",
    componentName: "User Authentication",
    added_by_id: "2",
    added_by_name: "Tanvir Mitul",
    last_updated_by_id: "2",
    last_updated_by_name: "Tanvir Mitul",
  },
  setSelectedElement: (newSelectedElement) =>
    set({ selectedElement: newSelectedElement }),

  //functions
  selectedFunction: {
    id: 1,
    module_id: "1",
    component_id: "1",
    element_id: "1",
    name: "Authentication Function",
    function_code:
      '/* eslint-disable no-unused-vars */\n/* eslint-disable react/prop-types */\nimport React, { useState } from "react";\nimport {\n  Flex,\n  FormControl,\n  Input,\n  FormLabel,\n  Textarea,\n  useToast,\n} from "@chakra-ui/react";\nimport ReactModal from "react-modal";\nimport SubmitButton from "../reusable/SubmitButton";\nimport CancelButton from "../reusable/CancelButton";\nimport useColorModeColors from "../../hooks/useColorModeColors";\nimport { useUpdateElementMutation } from "../../redux/api/docApiSlice"; // Adjust the hook name if necessary\nimport useZustandStore from "../../zustand/store";\n\nconst ElementUpdateModal = ({ isOpen, onRequestClose }) => {\n  const { selectedElement, setSelectedElement } = useZustandStore(); // Assuming useZustandStore has a selectedElement\n\n  const [updateElement, { isLoading }] = useUpdateElementMutation(); // Adjust according to your actual mutation hook\n  const toast = useToast();\n  const {\n    modalBgColor,\n    modalInputBgColor,\n    modalTextColor,\n    modalSubmitButtonTextColor,\n    modalCancelButtonTextColor,\n    modalPlaceholderColor,\n  } = useColorModeColors();\n\n  const [formData, setFormData] = useState({\n    element_id: selectedElement ? selectedElement.id : "",\n    component_id: selectedElement ? selectedElement.componentId : "",\n    module_id: selectedElement ? selectedElement.moduleId : "",\n    name: selectedElement ? selectedElement.name : "",\n    directory_path: selectedElement ? selectedElement.directory_path : "",\n    description: selectedElement ? selectedElement.description : "",\n  });\n\n  console.log("form data from element", formData);\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData((prevData) => ({ ...prevData, [name]: value }));\n  };\n\n  const handleSubmit = async (e) => {\n    e.preventDefault();\n\n    try {\n      const payload = await updateElement(formData).unwrap();\n      if (payload.status === 200) {\n        // setSelectedElement((prevSelectedElement) => ({\n        //   ...prevSelectedElement,\n        //   ...payload.data,\n        // }));\n\n        console.log("elment update payload data", payload);\n        toast({\n          position: "top-right",\n          title: "Element Updated.",\n          description: "Your element has been updated successfully.",\n          status: "success",\n          duration: 5000,\n          isClosable: true,\n        });\n        onRequestClose();\n      } else {\n        toast({\n          zIndex: 100000,\n          position: "top-right",\n          title: "Updating Element failed.",\n          status: "error",\n          duration: 5000,\n          isClosable: true,\n        });\n      }\n    } catch (err) {\n      toast({\n        zIndex: 100000,\n        position: "top-right",\n        title: "Updating Element failed.",\n        description: err.data?.message || "Could not update the element.",\n        status: "error",\n        duration: 5000,\n        isClosable: true,\n      });\n    }\n  };\n\n  return (\n    <ReactModal\n      style={{\n        overlay: {\n          backgroundColor: "rgba(0, 0, 0, 0.6)",\n          margin: "auto auto",\n          zIndex: 1000,\n        },\n        content: {\n          borderRadius: "20px",\n          backgroundColor: modalBgColor,\n          maxWidth: "550px",\n          height: "600px",\n          margin: "auto auto",\n          border: "none",\n        },\n      }}\n      isOpen={isOpen}\n      onRequestClose={onRequestClose}\n    >\n      <form>\n        <Flex flexDirection="column">\n          <FormControl isRequired>\n            <FormLabel fontSize="16px" color={modalTextColor} marginY={4}>\n              Element Name\n            </FormLabel>\n            <Input\n              paddingX={6}\n              rounded={50}\n              backgroundColor={modalInputBgColor}\n              placeholder="Enter Element Name"\n              _placeholder={{\n                opacity: 1,\n                color: `${modalPlaceholderColor}`,\n                fontSize: "16px",\n              }}\n              name="name"\n              value={formData.name}\n              onChange={handleChange}\n            />\n          </FormControl>\n          <FormControl isRequired>\n            <FormLabel fontSize="16px" color={modalTextColor} marginY={4}>\n              Element Directory Path\n            </FormLabel>\n            <Input\n              fontSize="16px"\n              paddingX={6}\n              rounded={50}\n              backgroundColor={modalInputBgColor}\n              placeholder="localhost/phpadmin/index.php"\n              _placeholder={{\n                opacity: 1,\n                color: `${modalPlaceholderColor}`,\n                fontSize: "16px",\n              }}\n              name="directory_path"\n              value={formData.directory_path}\n              onChange={handleChange}\n            />\n          </FormControl>\n          <FormControl isRequired>\n            <FormLabel fontSize="16px" color={modalTextColor} marginY={4}>\n              Description\n            </FormLabel>\n            <Textarea\n              fontSize="16px"\n              overflowX="hidden"\n              overflowY="auto"\n              height="200px"\n              padding={4}\n              rounded={30}\n              backgroundColor={modalInputBgColor}\n              name="description"\n              value={formData.description}\n              onChange={handleChange}\n            />\n          </FormControl>\n          <Flex justifyContent="center" marginTop={10} gap={10}>\n            <CancelButton\n              onClick={onRequestClose}\n              textColor={modalCancelButtonTextColor}\n              text="Cancel"\n            />\n            <SubmitButton\n              onClick={handleSubmit}\n              isLoading={isLoading}\n              textColor={modalSubmitButtonTextColor}\n              text="Submit"\n            />\n          </Flex>\n        </Flex>\n      </form>\n    </ReactModal>\n  );\n};\n\nexport default ElementUpdateModal;',
    directory_path: "localhost/inventory-module",
    description: "no description",
    added_by: "2",
    last_updated_by: null,
    last_updated_at: null,
    created_at: "2024-02-05T10:00:38.000000Z",
    updated_at: "2024-02-05T10:00:38.000000Z",
    moduleId: "1",
    moduleName: "Authentication Module",
    componentId: "1",
    componentName: "User Authentication",
    elementId: "1",
    elementName: "User Auth Element 1",
    added_by_id: "2",
    added_by_name: "Tanvir Mitul",
    last_updated_by_id: null,
    last_updated_by_name: null,
  },
  setSelectedFunction: (newSelectedFunction) =>
    set({ selectedFunction: newSelectedFunction }),

  showLeftBar: false,
  toggleLeftBar: () => set((state) => ({ showLeftBar: !state.showLeftBar })),

  //sidebar component
  components: [],

  setComponents: (newData) => {
    set({ components: newData });
  },
}));

export default useZustandStore;

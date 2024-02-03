import { create } from "zustand";

const useZustandStore = create((set) => ({
  //modules
  selectedModule: {
    id: 1,
    name: "DM Module",
    directory_path: "127.0.0.1:8000/api/store-module/asdasdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.",
    added_by: "1",
    last_updated_by: null,
    last_updated_at: null,
    created_at: "2024-02-02T05:46:51.000000Z",
    updated_at: "2024-02-02T05:46:51.000000Z",
    added_by_id: "1",
    added_by_name: "Rayhan",
    last_updated_by_id: null,
    last_updated_by_name: null,
  },
  setSelectedModule: (module) => set({ selectedModule: module }),

  //components
  selectedComponent: {
    id: 1,
    module_id: "1",
    name: "DM Lead",
    directory_path: "127.0.0.1:8000/api/store-component/adsdasdasdasd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.",
    added_by: "1",
    last_updated_by: null,
    last_updated_at: null,
    created_at: "2024-02-02T05:47:33.000000Z",
    updated_at: "2024-02-02T05:47:33.000000Z",
    moduleId: "1",
    moduleName: "DM Module",
    added_by_id: "1",
    added_by_name: "Rayhan",
    last_updated_by_id: null,
    last_updated_by_name: null,
  },
  setSelectedComponent: (component) => set({ selectedComponent: component }),

  //elements
  selectedElement: {
    id: 1,
    module_id: "1",
    component_id: "1",
    name: "Element 1",
    directory_path: "https://erp-doc.netlify.app/#/module/1/component/1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.",
    added_by: "1",
    last_updated_by: null,
    last_updated_at: null,
    created_at: "2024-02-02T05:48:07.000000Z",
    updated_at: "2024-02-02T05:48:07.000000Z",
    moduleId: "1",
    moduleName: "DM Module",
    componentId: "1",
    componentName: "DM Lead",
    added_by_id: "1",
    added_by_name: "Rayhan",
    last_updated_by_id: null,
    last_updated_by_name: null,
  },
  setSelectedElement: (newSelectedElement) =>
    set({ selectedElement: newSelectedElement }),

  //functions
  selectedFunction: {
    id: 1,
    module_id: "1",
    component_id: "1",
    element_id: "1",
    name: "Lorem ipsum dolor sit amet",
    function_code:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.",
    directory_path: "abc.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.",
    added_by: "1",
    last_updated_by: null,
    last_updated_at: null,
    created_at: "2024-02-02T05:48:25.000000Z",
    updated_at: "2024-02-02T05:48:25.000000Z",
    moduleId: "1",
    moduleName: "DM Module",
    componentId: "1",
    componentName: "DM Lead",
    elementId: "1",
    elementName: "Element 1",
    added_by_id: "1",
    added_by_name: "Rayhan",
    last_updated_by_id: null,
    last_updated_by_name: null,
  },
  setSelectedFunction: (newSelectedFunction) =>
    set({ selectedFunction: newSelectedFunction }),

  showLeftBar: false,
  toggleLeftBar: () => set((state) => ({ showLeftBar: !state.showLeftBar })),
}));

export default useZustandStore;

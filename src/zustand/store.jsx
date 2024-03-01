import { create } from "zustand";

const useZustandStore = create((set) => {
  // Initialize state with data from sessionStorage, if available
  const initialSelectedModule = localStorage.getItem("selectedModule");
  const initialSelectedComponent = localStorage.getItem("selectedComponent");
  const initialSelectedElement = localStorage.getItem("selectedElement");
  const initialSelectedFunction = localStorage.getItem("selectedFunction");
  const initialShowLeftBar = sessionStorage.getItem("showLeftBar");

  const initialState = {
    selectedModule: initialSelectedModule
      ? JSON.parse(initialSelectedModule)
      : null,
    selectedComponent: initialSelectedComponent
      ? JSON.parse(initialSelectedComponent)
      : null,
    selectedElement: initialSelectedElement
      ? JSON.parse(initialSelectedElement)
      : null,
    selectedFunction: initialSelectedFunction
      ? JSON.parse(initialSelectedFunction)
      : null,
    showLeftBar: initialShowLeftBar ? JSON.parse(initialShowLeftBar) : false,
    modules: [], // Initialize modules as an empty array
    refetchModule: null,
    refetchComponents: null, // Stores refetch functions by module ID
  };

  return {
    ...initialState,

    // Functions to update state and persist it to sessionStorage
    setSelectedModule: (module) => {
      set({ selectedModule: module });
      localStorage.setItem("selectedModule", JSON.stringify(module));
    },

    setSelectedComponent: (component) => {
      set({ selectedComponent: component });
      localStorage.setItem("selectedComponent", JSON.stringify(component));
    },

    setSelectedElement: (element) => {
      set({ selectedElement: element });
      localStorage.setItem("selectedElement", JSON.stringify(element));
    },

    setSelectedFunction: (func) => {
      set({ selectedFunction: func });
      localStorage.setItem("selectedFunction", JSON.stringify(func));
    },

    // Toggle left bar function
    toggleLeftBar: () =>
      set((state) => {
        const newState = !state.showLeftBar;
        sessionStorage.setItem("showLeftBar", JSON.stringify(newState));
        return { showLeftBar: newState };
      }),

    // Function to update modules
    setModules: (newModules) => {
      set({ modules: newModules });
    },
    setRefetchModule: (refetchFunction) =>
      set({ refetchModule: refetchFunction }),

    setRefetchComponent: (refetchFunction) =>
      set({ refetchComponent: refetchFunction }),
  };
});

export default useZustandStore;

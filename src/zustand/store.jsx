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
    modules: [],
    refetchModule: null,
    refetchComponent: 0,
    refetchElement: 0,
    refetchFunction: 0,
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
    setRefetchComponent: () => {
      set((state) => {
        const newState = state.refetchComponent + 1;
        return { refetchComponent: newState };
      });
    },
    setRefetchElement: () => {
      set((state) => {
        const newState = state.refetchElement + 1;
        return { refetchElement: newState };
      });
    },
    setRefetchFunction: () => {
      set((state) => {
        const newState = state.refetchFunction + 1;
        return { refetchFunction: newState };
      });
    },
  };
});

export default useZustandStore;

import create from "zustand";

const useModuleStore = create((set) => ({
  selectedModule: {
    id: 1,
    name: "Sales Module",
    addedBy: "Riadus Salehin",
    lastUpdateBy: "Riadus Salehin",
    createdAt: "10th Oct 2023",
    moduleDirectoryPath: "localhost/phpmyadmin/index.php",
    description:
      "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",

    components: [
      {
        id: 1,
        name: "Lead",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
            ],
          },
          {
            id: 2,
            name: "Element1",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Component2",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Element1",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
          {
            id: 2,
            name: "Element1",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
    ],
  },

  setSelectedModule: (module) => set({ selectedModule: module }),
}));

export default useModuleStore;

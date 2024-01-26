import { create } from "zustand";

const useModuleStore = create((set) => ({
  //modules
  selectedModule: {
    id: 1,
    name: "Sales Module",
    addedBy: "Riadus Salehin",
    lastUpdateBy: "Riadus Salehin",
    lastUpdateAt: "10th Oct 2023",
    createdAt: "10th Oct 2023 08:45:56 PM",
    moduleDirectoryPath: "localhost/phpmyadmin/index.php",
    description:
      "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",

    components: [
      {
        id: 1,
        name: "Lead",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
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
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "deal",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
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
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Lead Status",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
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
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Deal status",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
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
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Convert Lead to Deal",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
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
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              { id: 1, name: "Function1" },
              { id: 2, name: "Function2" },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Edit Lead",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        elements: [
          {
            id: 1,
            name: "Lead Creation Form",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
            functions: [
              {
                id: 1,
                name: "Lead Create Function",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
              },
              {
                id: 2,
                name: "Function2",
                addedBy: "Riadus Salehin",
                lastUpdateBy: "Riadus Salehin",
                createdAt: "10th Oct 2023",
                moduleDirectoryPath: "localhost/phpmyadmin/index.php",
                description:
                  "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
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
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
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

  //components
  selectedComponent: {
    id: 1,
    name: "Lead",
    addedBy: "Riadus Salehin",
    lastUpdateBy: "Riadus Salehin",
    createdAt: "10th Oct 2023",
    moduleDirectoryPath: "localhost/phpmyadmin/index.php",
    description:
      "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfsdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
    elements: [
      {
        id: 1,
        name: "Lead Creation Form",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        functions: [
          {
            id: 1,
            name: "Lead Create Function",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
          },
          {
            id: 2,
            name: "Function2",
            addedBy: "Riadus Salehin",
            lastUpdateBy: "Riadus Salehin",
            createdAt: "10th Oct 2023",
            moduleDirectoryPath: "localhost/phpmyadmin/index.php",
            description:
              "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
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
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdfdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
        functions: [
          { id: 1, name: "Function1" },
          { id: 2, name: "Function2" },
        ],
      },
    ],
  },
  setSelectedComponent: (component) => set({ selectedComponent: component }),

  //elements
  selectedElement: {
    id: 1,
    name: "Lead Creation Form",
    addedBy: "Riadus Salehin",
    lastUpdateBy: "Riadus Salehin",
    createdAt: "10th Oct 2023",
    moduleDirectoryPath: "localhost/phpmyadmin/index.php",
    description:
      "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
    functions: [
      {
        id: 1,
        name: "Lead Create Function",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
      },
      {
        id: 2,
        name: "Function2",
        addedBy: "Riadus Salehin",
        lastUpdateBy: "Riadus Salehin",
        createdAt: "10th Oct 2023",
        moduleDirectoryPath: "localhost/phpmyadmin/index.php",
        description:
          "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassaa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
      },
    ],
  },

  setSelectedElement: (element) => set({ selectedElement: element }),

  //functions
  selectedFunction: {
    id: 1,
    name: "Lead Create Function",
    addedBy: "Riadus Salehin",
    lastUpdateBy: "Riadus Salehin",
    createdAt: "10th Oct 2023",
    moduleDirectoryPath: "localhost/phpmyadmin/index.php",
    description:
      "dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdffdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affdadfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda dfadfa fdafdfassadfdfds afdafdsa asdfdsfsa fdf affda",
  },

  setSelectedFunction: (fn) => set({ selectedFunction: fn }),
}));

export default useModuleStore;

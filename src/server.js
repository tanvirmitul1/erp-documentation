// src/server.js
import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      module: Model,
      component: Model,
      element: Model,
      function: Model,
    },

    seeds(server) {
      // Module 1
      server.create("module", {
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
      });

      // Module 2
      server.create("module", {
        id: 2,
        name: "Module2",
        components: [
          {
            id: 1,
            name: "Component1",
            elements: [
              {
                id: 1,
                name: "Element1",
                functions: [
                  { id: 1, name: "Function1" },
                  { id: 2, name: "Function2" },
                ],
              },
            ],
          },
        ],
      });

      // Module 3
      server.create("module", {
        id: 3,
        name: "Module3",
        components: [
          {
            id: 1,
            name: "Component1",
            elements: [
              {
                id: 1,
                name: "Element1",
                functions: [
                  { id: 1, name: "Function1" },
                  { id: 2, name: "Function2" },
                ],
              },
            ],
          },
        ],
      });

      // Module 4
      server.create("module", {
        id: 4,
        name: "Module4",
        components: [
          {
            id: 1,
            name: "Component1",
            elements: [
              {
                id: 1,
                name: "Element1",
                functions: [
                  { id: 1, name: "Function1" },
                  { id: 2, name: "Function2" },
                ],
              },
            ],
          },
        ],
      });

      // Module 5
      server.create("module", {
        id: 5,
        name: "Module5",
        components: [
          {
            id: 1,
            name: "Component1",
            elements: [
              {
                id: 1,
                name: "Element1",
                functions: [
                  { id: 1, name: "Function1" },
                  { id: 2, name: "Function2" },
                ],
              },
            ],
          },
        ],
      });
    },
    routes() {
      this.namespace = "api";

      this.get("/modules", (schema) => {
        return schema.db.modules; // Assuming you want to return all modules
      });
    },
  });

  return server;
}

/* eslint-disable no-unused-vars */
import { MdOutlineChevronRight } from "react-icons/md";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import useModuleStore from "../../../zustand/store";

import React from "react";
import { Link, useParams } from "react-router-dom";

const BreadCrumb = () => {
  const { moduleId, componentId, elementId, functionId } = useParams();

  const {
    selectedComponent,
    selectedModule,
    selectedElement,
    selectedFunction,
  } = useModuleStore();

  return (
    <Breadcrumb
      fontSize={{ base: "10px", lg: "16px" }}
      h="20px"
      separator={<MdOutlineChevronRight />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to={`/module/${moduleId}`}>
          {selectedModule.name}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          to={`/module/${moduleId}/component/${componentId}`}
        >
          {selectedComponent.name}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          to={`/module/${moduleId}/component/${componentId}/element/${elementId}`}
        >
          {selectedElement.name}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          to={`/module/${moduleId}/component/${componentId}/element/${elementId}/function/${functionId}`}
        >
          {selectedFunction.name}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumb;

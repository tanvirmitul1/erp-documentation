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
  const { moduleId, componentId } = useParams();

  const { selectedComponent, selectedModule } = useModuleStore();

  return (
    <Breadcrumb
     
      separator={<MdOutlineChevronRight />}
      fontSize={{ base: "14px", lg: "16px" }}
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
    </Breadcrumb>
  );
};

export default BreadCrumb;

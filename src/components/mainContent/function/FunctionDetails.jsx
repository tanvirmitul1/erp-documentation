/* eslint-disable no-unused-vars */
import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import FunctionsLog from "./FunctionsLog";
import BreadCrumb from "./BreadCrumb";
const FunctionDetails = () => {
  return (
    <Box>
      <BreadCrumb />
      <Header />
      <FunctionsLog />
    </Box>
  );
};

export default FunctionDetails;

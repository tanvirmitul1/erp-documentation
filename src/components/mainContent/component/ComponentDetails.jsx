/* eslint-disable no-unused-vars */
import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import AllElements from "./AllElements";
import BreadCrumb from "./BreadCrumb";
const ComponentDetails = () => {
  return (
    <Box>
      <BreadCrumb />
      <Header />
      <AllElements />
    </Box>
  );
};

export default ComponentDetails;

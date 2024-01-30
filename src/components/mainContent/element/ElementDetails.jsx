/* eslint-disable no-unused-vars */
import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import AllFunctions from "./AllFunctions";
import BreadCrumb from "./BreadCrumb";
const ElementDetails = () => {
  return (
    <Box>
      <BreadCrumb />
      <Header />
      <AllFunctions />
    </Box>
  );
};

export default ElementDetails;

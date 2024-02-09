/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import AllComponents from "./AllComponents";
import { Box } from "@chakra-ui/react";

const ModuleDetails = () => {
  const navigate = useNavigate();

  // Check for existing token on component mount
  useEffect(() => {
    const storedData = sessionStorage.getItem("loginData");

    if (!storedData) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Box>
      <Header />
      <AllComponents />
    </Box>
  );
};

export default ModuleDetails;

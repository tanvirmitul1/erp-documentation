/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const ErrorComponent = ({ error }) => {
  const onReload = () => {
    window.location.reload();
  };

  return (
    <Box
      p={4}
      borderWidth="2px"
      borderRadius="lg"
      backgroundColor="red.100"
      borderColor="red.300"
      textAlign="center"
      display={{ lg: "block" }}
      maxWidth={{ lg: "550px" }}
      position="absolute"
      top="50%"
      left="50%"
    >
      <Heading as="h2" color="red.500" mb={2}>
        {" "}
        Error{" "}
      </Heading>

      <Button colorScheme="red" onClick={onReload}>
        Click to Get Data
      </Button>
    </Box>
  );
};

export default ErrorComponent;

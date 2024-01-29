/* eslint-disable no-unused-vars */
// FrontPage.js

import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const FrontPage = () => {
  return (
    <Box className="front-page">
      {/* Header */}
      <Box className="header" color="#61dafb" py={20} textAlign="center">
        <Container maxW="container.xl">
          <Heading as="h1" fontSize="3xl">
            Project Documentation
          </Heading>
          <Text fontSize="xl">
            Welcome to the official documentation for SeoPage1!
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default FrontPage;

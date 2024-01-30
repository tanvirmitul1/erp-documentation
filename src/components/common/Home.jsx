/* eslint-disable no-unused-vars */
// FrontPage.js
import Searchbar from "../reusable/SearchBar";
import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const FrontPage = () => {
  return (
    <Box>
      <Box py={20} textAlign="center">
        <Container >
          <Heading as="h1" fontSize="3xl">
            Documentation
          </Heading>
          <Text fontSize="xl">
            Welcome to the official documentation for SeoPage1!
          </Text>
          <Searchbar
            width={{ base: "90vw", lg: "500px" }}
            placeholder="Search Module"
          />
        </Container>
      </Box>
    </Box>
  );
};

export default FrontPage;

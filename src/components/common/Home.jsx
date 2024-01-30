/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import Searchbar from "../reusable/SearchBar";
import React from "react";

import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  CardBody,
  Flex,
} from "@chakra-ui/react";
import useColorModeColors from "../../hooks/useColorModeColors";
import useModuleStore from "../../zustand/store";
import { useGetModuleQuery } from "../../redux/api/docApiSlice";
import CustomDescription from "../reusable/Description";

const FrontPage = () => {
  const { data: modules, error, isLoading } = useGetModuleQuery();
  const { selectedModules } = useModuleStore();
  const { addButtonBgColor, addButtonTextColor } = useColorModeColors();
  return (
    <Box>
      <Container
        textAlign="center"
        paddingY="20px"
        display="flex"
        flexDir="column"
        alignItems="center"
        maxW="100%"
        backgroundColor={addButtonBgColor}
      >
        <Heading as="h1" fontSize="3xl" color={addButtonTextColor}>
          Documentation
        </Heading>
        <Text fontSize="xl" color={addButtonTextColor}>
          Welcome to the official documentation for SeoPage1!
        </Text>
        <Box>
          <Searchbar
            width={{ base: "80vw", lg: "500px" }}
            placeholder="Search Module"
          />
        </Box>
      </Container>

      <Flex
        marginX={{ base: "10px", md: "40px", lg: "100px" }}
        direction="row"
        wrap="wrap"
        justify="center"
        align="center"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 1,
        }}
      >
        {modules?.map((module, index) => (
          <Card
            cursor="pointer"
            key={index}
            W={{ base: "10%", lg: "400px" }}
            m={{ base: 2, lg: 4 }}
            _hover={{
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s ease-in-out",
            }}
          >
            <CardBody>
              <Text>{module.name}</Text>
              <CustomDescription
                description={module.description}
                word="50"
                seeMoreButton={false}
              />
              
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default FrontPage;

/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import Searchbar from "../reusable/SearchBar";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
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
import { RiSoundModuleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import HomeSkeleton from "../reusable/HomeSkeleton";
useGetModuleQuery;

const Home = () => {
  const ITEMS_PER_PAGE = 12;
  const { data, error, isLoading } = useGetModuleQuery();
  const { selectedModules, setSelectedModule } = useModuleStore();
  const {
    addButtonBgColor,
    addButtonTextColor,
    cardHoverBgColor,
    homeHeaderBgColor,
    homeHeaderTextColor,
    cardIconColor,
  } = useColorModeColors();

  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // Step 1

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const modules = data?.data;
  const filteredModules = modules?.filter((module) =>
    module.name.toLowerCase().includes(searchQuery.toLowerCase())
  ); // Step 2

  const pageCount = Math.ceil(filteredModules?.length / ITEMS_PER_PAGE);

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentModules = filteredModules?.slice(
    offset,
    offset + ITEMS_PER_PAGE
  );

  const handleClickCard = (module) => {
    setSelectedModule(module);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0); // Reset page when a new search is performed
  };

  return (
    <Box>
      <Container
        rounded="10px"
        textAlign="center"
        paddingY="20px"
        display="flex"
        flexDir="column"
        alignItems="center"
        maxW="100%"
        backgroundColor={homeHeaderBgColor}
      >
        <Heading
          as="h1"
          fontSize="3xl"
          color={homeHeaderTextColor}
          opacity=".9"
        >
          Documentation
        </Heading>
        <Text fontSize="xl" color={homeHeaderTextColor} opacity=".6">
          Welcome to the official documentation for SeoPage1!
        </Text>
        <Box>
          <Searchbar
            width={{ base: "80vw", lg: "500px" }}
            placeholder="Search Module"
            onChange={handleSearchChange} // Step 3
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
        {isLoading ? (
          <HomeSkeleton />
        ) : (
          currentModules?.map((module, index) => (
            <Card
              onClick={() => handleClickCard(module)}
              cursor="pointer"
              key={index}
              W={{ base: "10%", lg: "400px" }}
              m={{ base: 2, lg: 4 }}
              _hover={{
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                backgroundColor: cardHoverBgColor,
                transition: "all 0.3s ease-in-out",
              }}
            >
              <CardBody textAlign="center" marginX="auto">
                <Link
                  to={`/module/${module.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Flex gap={5}>
                    <Box>
                      <RiSoundModuleFill size={25} color={cardIconColor} />
                    </Box>
                    <Text fontWeight="bold">{module.name}</Text>
                  </Flex>
                  <CustomDescription
                    description={module.description}
                    word="20"
                    seeMoreButton={false}
                  />
                </Link>
              </CardBody>
            </Card>
          ))
        )}
      </Flex>

      <Flex justifyContent="center" mt={10}>
        <ReactPaginate
          previousLabel={
            <IconContext.Provider value={{ size: "36px" }}>
              <AiFillLeftCircle />
            </IconContext.Provider>
          }
          nextLabel={
            <IconContext.Provider value={{ size: "36px" }}>
              <AiFillRightCircle />
            </IconContext.Provider>
          }
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
        />
      </Flex>
    </Box>
  );
};

export default Home;

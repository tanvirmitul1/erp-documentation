/* eslint-disable no-unused-vars */
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

import { Box, Flex } from "@chakra-ui/react";
import Searchbar from "../../reusable/SearchBar";
import useModuleStore from "../../../zustand/store";

import ElementCard from "./ElementCard";

const AllElements = () => {
  const { selectedComponent } = useModuleStore();
  const elements = selectedComponent.elements;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;

  const indexOfLastComponent = (currentPage + 1) * itemsPerPage;
  const indexOfFirstComponent = indexOfLastComponent - itemsPerPage;
  const currentElements = elements.slice(
    indexOfFirstComponent,
    indexOfLastComponent
  );
  //pagination end

  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <Flex
      flexWrap="wrap"
      flexDir="column"
      alignItems="center"
      justifyContent={{ base: "left", md: "center" }}
      marginTop="20px"
    >
      <Box marginRight={{ base: "150px", md: "0" }}>
        <Searchbar width="250px" placeholder="Search Element" />
      </Box>
      <Box>
        {currentElements.map((element) => (
          <ElementCard element={element} key={element.id} />
        ))}
      </Box>

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
        pageCount={Math.ceil(elements.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
      />
    </Flex>
  );
};

export default AllElements;

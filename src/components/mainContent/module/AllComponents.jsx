/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// AllComponents.jsx
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import {
  Text,
  Box,
  Flex,
  VStack,
  HStack,
  Stack,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import Searchbar from "../../reusable/SearchBar";
import useModuleStore from "../../../zustand/store";

import ComponentCard from "./ComponentCard";

const AllComponents = () => {
  // pagination start
  const paginationStyle = {
    container: {
      display: "flex",
      listStyleType: "none",
      justifyContent: "center",
      padding: 0,
    },
    item: {
      margin: "0 4px",
      padding: "8px 16px",
      borderRadius: "5px",
      border: "1px solid #d4d4d4",
      color: "#555",
      cursor: "pointer",
      userSelect: "none",
    },
    itemActive: {
      backgroundColor: "#007bff",
      color: "white",
      border: "1px solid #007bff",
    },
    itemDisabled: {
      color: "#d4d4d4",
      cursor: "not-allowed",
    },
  };

  const { selectedModule } = useModuleStore();
  const components = selectedModule.components;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const indexOfLastComponent = (currentPage + 1) * itemsPerPage;
  const indexOfFirstComponent = indexOfLastComponent - itemsPerPage;
  const currentComponents = components.slice(
    indexOfFirstComponent,
    indexOfLastComponent
  );
  //pagination end

  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      marginTop="20px"
    >
      <Box>
        <Searchbar width="350px" placeholder="Search Component" />
      </Box>
      <Box>
        {currentComponents.map((component) => (
          <ComponentCard component={component} key={component.id} />
        ))}
      </Box>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(components.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
        disabledClassName={"disabled"}
        style={paginationStyle.container}
        pageClassName={"page-item"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeLinkClassName={"active"}
        disabledLinkClassName={"disabled"}
      />
    </Flex>
  );
};

export default AllComponents;

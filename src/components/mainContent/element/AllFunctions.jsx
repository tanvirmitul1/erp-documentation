/* eslint-disable no-unused-vars */
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

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

import useColorModeColors from "../../../hooks/useColorModeColors";

import FunctionCard from "./FunctionCard";

const AllFunctions = () => {
  const { addButtonBgColor, addButtonHoverColor, addButtonTextColor } =
    useColorModeColors();
  // pagination start

  const { selectedElement } = useModuleStore();
  const functions = selectedElement.functions;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;

  const indexOfLastComponent = (currentPage + 1) * itemsPerPage;
  const indexOfFirstComponent = indexOfLastComponent - itemsPerPage;
  const currentFunctions = functions.slice(
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
        {currentFunctions.map((fn) => (
          <FunctionCard fn={fn} key={fn.id} />
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
        pageCount={Math.ceil(functions.length / itemsPerPage)}
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

export default AllFunctions;

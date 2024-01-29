/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// AllComponents.jsx
import React, { useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
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
import useColorModeColors from "../../../hooks/useColorModeColors";

const AllComponents = () => {
  const { addButtonBgColor, addButtonHoverColor, addButtonTextColor } =
    useColorModeColors();
  // pagination start

  const { selectedModule } = useModuleStore();
  const components = selectedModule.components;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

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
        pageCount={Math.ceil(components.length / itemsPerPage)}
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

export default AllComponents;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

import { Box, Flex } from "@chakra-ui/react";
import Searchbar from "../../reusable/SearchBar";

import ElementCard from "./ElementCard";
import useZustandStore from "../../../zustand/store";
import { useGetElementQuery } from "../../../redux/api/docApiSlice";
import SubElementUpdateModal from "../../modal/subElementUpdateModal";
import SideSkeleton from "../../reusable/SideSkeleton";

const AllElements = () => {
  const [elementName, setElementName] = useState("");
  const { selectedComponent } = useZustandStore();
  const { data, isLoading, isError } = useGetElementQuery({
    moduleId: selectedComponent.moduleId,
    componentId: selectedComponent.id,
  });

  const elements = data?.data;

  const handleChange = (e) => {
    setElementName(e.target.value);
    setCurrentPage(0); // Reset to first page when search term changes
  };

  const filteredElements = elements?.filter((element) =>
    element.name.toLowerCase().includes(elementName.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const pageCount = Math.ceil(filteredElements?.length / itemsPerPage);

  const indexOfLastElement = (currentPage + 1) * itemsPerPage;
  const indexOfFirstElement = indexOfLastElement - itemsPerPage;
  const currentElements = filteredElements?.slice(
    indexOfFirstElement,
    indexOfLastElement
  );

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
        {currentElements && (
          <Searchbar
            width="250px"
            placeholder="Search Element"
            onChange={handleChange}
          />
        )}
      </Box>
      <Box width="100%">
        {!currentElements ? (
          <SideSkeleton Count={6} height="150px" width="100%" />
        ) : (
          currentElements?.map((element) => (
            <ElementCard element={element} key={element.id} />
          ))
        )}
      </Box>

      {currentElements && (
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
      )}
    </Flex>
  );
};

export default AllElements;

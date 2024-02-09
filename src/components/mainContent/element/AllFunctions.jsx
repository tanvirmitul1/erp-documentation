/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

import { Box, Flex } from "@chakra-ui/react";
import Searchbar from "../../reusable/SearchBar";

import FunctionCard from "./FunctionCard";
import useZustandStore from "../../../zustand/store";
import { useGetFunctionQuery } from "../../../redux/api/docApiSlice";
import SideSkeleton from "../../reusable/SideSkeleton";

const AllFunctions = () => {
  const [functionName, setFunctionName] = useState("");
  const { selectedElement } = useZustandStore();

  const { data, error, isLoading } = useGetFunctionQuery({
    moduleId: selectedElement.moduleId,
    componentId: selectedElement.componentId,
    elementId: selectedElement.id,
  });

  const functions = data?.data;

  const handleChange = (e) => {
    setFunctionName(e.target.value);
    setCurrentPage(0); // Reset to first page when search term changes
  };

  const filteredFunctions = functions?.filter((fn) =>
    fn.name.toLowerCase().includes(functionName.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const pageCount = Math.ceil(filteredFunctions?.length / itemsPerPage);

  const indexOfLastFunction = (currentPage + 1) * itemsPerPage;
  const indexOfFirstFunction = indexOfLastFunction - itemsPerPage;
  const currentFunctions = filteredFunctions?.slice(
    indexOfFirstFunction,
    indexOfLastFunction
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
        {currentFunctions && (
          <Searchbar placeholder="Search Function" onChange={handleChange} />
        )}
      </Box>
      <Box width="100%">
        {!currentFunctions ? (
          <SideSkeleton Count={6} height="150px" width="100%" />
        ) : (
          currentFunctions?.map((fn) => <FunctionCard fn={fn} key={fn.id} />)
        )}
      </Box>

      {currentFunctions && (
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

export default AllFunctions;

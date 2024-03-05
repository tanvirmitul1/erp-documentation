/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import EmptyIcon from "../../../assets/man.png";
import { Box, Flex, Image } from "@chakra-ui/react";
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
  const itemsPerPage = 10;
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
    <>
      {filteredFunctions?.length > 0 ? (
        <Flex
          flexWrap="wrap"
          flexDir="column"
          alignItems="center"
          justifyContent={{ base: "left", md: "center" }}
          marginTop="20px"
          marginX={{ base: "0", md: "30px" }}
        >
          <Box marginRight={{ base: "150px", md: "0" }}>
            {currentFunctions && (
              <Searchbar
                placeholder="Search Function"
                onChange={handleChange}
              />
            )}
          </Box>
          <Box width="100%">
            {!currentFunctions ? (
              <SideSkeleton Count={6} height="150px" width="100%" />
            ) : (
              currentFunctions?.map((fn) => (
                <FunctionCard fn={fn} key={fn.id} />
              ))
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
      ) : (
        <Box
          position="absolute"
          top={{ base: "40%", lg: "50%" }}
          left={{ base: "12%", lg: "45%" }}
          color={`red`}
          fontSize={30}
        >
          <Image marginLeft={16} src={EmptyIcon} width={200} />
          <Box> No Function Available</Box>
        </Box>
      )}
    </>
  );
};

export default AllFunctions;

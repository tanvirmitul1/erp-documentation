/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import EmptyIcon from "../../../assets/man.png";
import { Box, Flex, Image } from "@chakra-ui/react";
import Searchbar from "../../reusable/SearchBar";

import ElementCard from "./ElementCard";
import useZustandStore from "../../../zustand/store";
import { useGetElementQuery } from "../../../redux/api/docApiSlice";
import SideSkeleton from "../../reusable/SideSkeleton";

const AllElements = () => {
  const [elementName, setElementName] = useState("");
  const { selectedComponent } = useZustandStore();
  const { data, error, isLoading } = useGetElementQuery({
    moduleId: selectedComponent.moduleId,
    componentId: selectedComponent.id,
  });

  const elements = data?.data;
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handleChange = (e) => {
    setElementName(e.target.value);
    setCurrentPage(0);
  };

  const filteredElements = elements?.filter((element) =>
    element.name.toLowerCase().includes(elementName.toLowerCase())
  );

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
    <>
      {filteredElements?.length > 0 ? (
        <Flex
          flexWrap="wrap"
          flexDir="column"
          alignItems="center"
          justifyContent={{ base: "left", md: "center" }}
          marginTop="20px"
          marginX={{ base: "0", md: "30px" }}
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
      ) : (
        <Box
          position="absolute"
          top={{ base: "40%", lg: "50%" }}
          left={{ base: "12%", lg: "45%" }}
          color={`red`}
          fontSize={30}
        >
          <Image marginLeft={16} src={EmptyIcon} width={200} />
          <Box> No Element Available</Box>
        </Box>
      )}
    </>
  );
};

export default AllElements;

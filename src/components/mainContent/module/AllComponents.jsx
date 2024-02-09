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
import ComponentCard from "./ComponentCard";
import useColorModeColors from "../../../hooks/useColorModeColors";
import { useGetComponentQuery } from "../../../redux/api/docApiSlice";
import useZustandStore from "../../../zustand/store";
import SideSkeleton from "../../reusable/SideSkeleton";

const AllComponents = () => {
  const [componentName, setComponentName] = useState("");
  const { selectedModule } = useZustandStore();
  const { data, error, isLoading } = useGetComponentQuery(selectedModule.id);
  const { addButtonBgColor, addButtonHoverColor, addButtonTextColor } =
    useColorModeColors();

  const components = data?.data;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const handleChange = (e) => {
    setComponentName(e.target.value);
    setCurrentPage(0); // Reset to first page when search term changes
  };

  const filteredComponents = components?.filter((component) =>
    component.name.toLowerCase().includes(componentName.toLowerCase())
  );

  const pageCount = Math.ceil(filteredComponents?.length / itemsPerPage);

  const indexOfLastComponent = (currentPage + 1) * itemsPerPage;
  const indexOfFirstComponent = indexOfLastComponent - itemsPerPage;
  const currentComponents = filteredComponents?.slice(
    indexOfFirstComponent,
    indexOfLastComponent
  );

  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <>
      <Flex
        flexWrap="wrap"
        flexDir="column"
        alignItems="center"
        justifyContent={{ base: "left", md: "center" }}
        marginTop="20px"
      >
        <Box marginRight={{ base: "150px", md: "0" }}>
          {currentComponents && (
            <Searchbar placeholder="Search Component" onChange={handleChange} />
          )}
        </Box>
        <Box width="100%">
          {!currentComponents ? (
            <SideSkeleton Count={6} height="150px" width="100%" />
          ) : (
            currentComponents.map((component) => (
              <ComponentCard component={component} key={component.id} />
            ))
          )}
        </Box>

        {currentComponents && (
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
    </>
  );
};

export default AllComponents;

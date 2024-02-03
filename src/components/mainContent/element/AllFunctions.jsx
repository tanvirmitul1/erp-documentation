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
import useZustandStore from "../../../zustand/store";
import { useGetFunctionQuery } from "../../../redux/api/docApiSlice";

const AllFunctions = () => {
  const { addButtonBgColor, addButtonHoverColor, addButtonTextColor } =
    useColorModeColors();
  // pagination start
  const [functionName, setFunctionName] = useState("");
  const { selectedElement } = useZustandStore();

  const { data, error, isLoading } = useGetFunctionQuery({
    moduleId: selectedElement.moduleId,
    componentId: selectedElement.componentId,
    elementId: selectedElement.id,
  });

  const functions = data?.data;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;

  const indexOfLastComponent = (currentPage + 1) * itemsPerPage;
  const indexOfFirstComponent = indexOfLastComponent - itemsPerPage;
  const currentFunctions = functions?.slice(
    indexOfFirstComponent,
    indexOfLastComponent
  );
  //pagination end
  const handleChange = (e) => {
    setFunctionName(e.target.value);
  };

  const filteredFunctions = functions?.filter((fn) =>
    fn.name?.toLowerCase().includes(functionName?.toLowerCase())
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
        <Searchbar placeholder="Search Function" onChange={handleChange} />
      </Box>
      <Box>
        {filteredFunctions?.map((fn) => (
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
        pageCount={Math.ceil(functions?.length / itemsPerPage)}
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

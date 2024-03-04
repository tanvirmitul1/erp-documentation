/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

import useColorModeColors from "../../../hooks/useColorModeColors";
import useModuleStore from "../../../zustand/store";
import LogCard from "./LogCard";
import { useGetFunctionsLogQuery } from "../../../redux/api/docApiSlice";
import useZustandStore from "../../../zustand/store";
import SideSkeleton from "../../reusable/SideSkeleton";
const FunctionsLog = () => {
  const { selectedFunction } = useZustandStore();
  const { data, isLoading } = useGetFunctionsLogQuery({
    moduleId: selectedFunction.moduleId,
    componentId: selectedFunction.componentId,
    elementId: selectedFunction.elementId,
    functionId: selectedFunction.id,
  });

  const [viewLog, setViewLog] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const handleViewLogClick = () => {
    setViewLog(!viewLog);
  };

  const { addButtonBgColor, addButtonTextColor } = useColorModeColors();
  const functionLog = data?.data || [];

  // const filteredLogs = functionLog.filter(
  //   (fnLog) => fnLog.function_id == selectedFunction.id
  // );

  const pageCount = Math.ceil(functionLog?.length / itemsPerPage);
  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <Box>
      <Flex
        onClick={handleViewLogClick}
        cursor="pointer"
        justifyContent="space-between"
        maxW="90vw"
        as="h4"
        bg={addButtonBgColor}
        color={addButtonTextColor}
        height="60px"
        paddingX="20px"
        paddingTop="15px"
        rounded="50px"
      >
        <Box>View Change Logs</Box>
        <Box top="10px">
          {viewLog ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </Box>
      </Flex>

      {viewLog && (
        <>
          {!functionLog ? (
            <SideSkeleton Count={4} height="300px" width="100%" />
          ) : (
            functionLog
              .slice(
                currentPage * itemsPerPage,
                (currentPage + 1) * itemsPerPage
              )
              .map((fnLog, index) => (
                <Box key={fnLog.id}>
                  <LogCard fnLog={fnLog} index={index} />
                </Box>
              ))
          )}

          <Box marginLeft="45%" marginTop="20px">
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
          </Box>
        </>
      )}
    </Box>
  );
};

export default FunctionsLog;

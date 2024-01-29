/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

import useColorModeColors from "../../../hooks/useColorModeColors";
import useModuleStore from "../../../zustand/store";
import LogCard from "./LogCard";

const FunctionsLog = () => {
  const [viewLog, setViewLog] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const handleViewLogClick = () => {
    setViewLog(!viewLog);
  };

  const { addButtonBgColor, addButtonTextColor } = useColorModeColors();
  const { selectedFunction } = useModuleStore();
  const functionLog = selectedFunction?.functionLog || [];

  const indexOfLastLog = (currentPage + 1) * itemsPerPage;
  const indexOfFirstLog = indexOfLastLog - itemsPerPage;
  const currentLogs = functionLog.slice(indexOfFirstLog, indexOfLastLog);

  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <Box>
      <Flex
        onClick={handleViewLogClick}
        cursor="pointer"
        justifyContent="space-between"
        maxW="90%"
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
          {currentLogs.map((fnLog) => (
            <LogCard key={fnLog.id} fnLog={fnLog} />
          ))}

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
              pageCount={Math.ceil(functionLog.length / itemsPerPage)}
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

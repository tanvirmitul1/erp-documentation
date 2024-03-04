/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import { Flex, Box, Text, VStack, HStack } from "@chakra-ui/react";
import ReactModal from "react-modal";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import useColorModeColors from "../../hooks/useColorModeColors";
import CustomDescription from "../reusable/Description";
import ReactPaginate from "react-paginate";
import FormatDate from "../../utils/FormatDate";

export const LogModal = ({ isOpen, onRequestClose, data, name }) => {
  const { modalBgColor, modulePathColor, modulePathBgColor } =
    useColorModeColors();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(data?.length / itemsPerPage);
  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          margin: "auto auto",
          zIndex: 1000,
        },
        content: {
          borderRadius: "20px",
          backgroundColor: modalBgColor,

          margin: "auto auto",
          border: "none",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6
          style={{
            fontSize: "25px",
            marginBottom: "0",
          }}
        >
          {name} Log
        </h6>
        <button
          onClick={onRequestClose}
          className="d-flex justify-content-center align-items-center rounded-circle"
          style={{
            backgroundColor: "gray",
            padding: "2px 4px 2px 4px",
            color: "white",
            width: "24px",
            height: "24px",
          }}
        >
          <IoClose />
        </button>
      </div>
      {data?.length === 0 && <Box>No data found</Box>}
      {data &&
        data
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((data, index) => (
            <Box
              key={data.id}
              borderBottom="1px solid rgb(197, 184, 184)"
              paddingBottom="30px"
              marginX="20px"
              marginBottom={10}
            >
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                justifyContent="space-between"
              >
                <VStack align="left" marginTop="auto">
                  <Flex
                    gap="8px"
                    flexDir={{
                      base: "column",
                      md: "column",
                      lg: "column",
                      xl: "row",
                    }}
                  >
                    <HStack>
                      <Text as="h4">{index + 1}.</Text>
                      <Text as="h4">{data?.name}</Text>
                    </HStack>
                    <Flex marginTop="10px" gap={1}>
                      <Text h="10px">Added By:</Text>
                      <Text h="10px" color={modulePathColor}>
                        {" "}
                        {data?.added_by_name}
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    flexDirection={{ base: "column", md: "row" }}
                    gap="5px"
                    backgroundColor={{
                      base: "",
                      md: "",
                      lg: modulePathBgColor,
                    }}
                    padding={{ base: "", md: "", lg: "10px" }}
                    paddingX={{ base: "", md: "", lg: "20px" }}
                    paddingTop={{ base: "", md: "", lg: "16px" }}
                    // paddingBottom={2}
                    rounded="50px"
                  >
                    <Text
                      display={{
                        base: "none",
                        md: "none",
                        lg: "none",
                        xl: "block",
                      }}
                      fontWeight="bold"
                    >
                      {name} Directory Path:
                    </Text>{" "}
                    <Text color={modulePathColor}> {data?.directory_path}</Text>
                  </Flex>
                </VStack>

                <Flex flexDir="column">
                  <Flex gap={2}>
                    <Text>Updated At:</Text>
                    <Text>{FormatDate(data?.updated_at)}</Text>
                  </Flex>
                  <Flex gap={2}>
                    <Text>Updated By:</Text>
                    <Text color={modulePathColor}>{data?.last_up_by_name}</Text>
                  </Flex>
                </Flex>
              </Flex>
              {console.log(data)}
              <Text marginTop="12px">
                <CustomDescription description={data?.description} word={500} />
              </Text>
            </Box>
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
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
        />
      </Box>
    </ReactModal>
  );
};

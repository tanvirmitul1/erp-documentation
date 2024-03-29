/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// AllComponents.jsx
import React, { useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import ReactPaginate from "react-paginate";
import { Box, Flex, Image } from "@chakra-ui/react";
import Searchbar from "../../reusable/SearchBar";
import ComponentCard from "./ComponentCard";
import { useGetComponentQuery } from "../../../redux/api/docApiSlice";
import useZustandStore from "../../../zustand/store";
import SideSkeleton from "../../reusable/SideSkeleton";
import EmptyIcon from "../../../assets/man.png";
const AllComponents = () => {
  const [componentName, setComponentName] = useState("");
  const { selectedModule } = useZustandStore();

  const { data, error, isLoading } = useGetComponentQuery(selectedModule.id);

  const components = data?.data;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handleChange = (e) => {
    setComponentName(e.target.value);
    setCurrentPage(0);
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
      {filteredComponents?.length > 0 ? (
        <Flex
          flexWrap="wrap"
          flexDir="column"
          alignItems="center"
          justifyContent={{ base: "left", md: "center" }}
          marginTop="20px"
          marginX={{ base: "0", md: "30px" }}
        >
          <Box marginRight={{ base: "150px", md: "0" }}>
            {currentComponents && (
              <Searchbar
                placeholder="Search Component"
                onChange={handleChange}
              />
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
      ) : (
        <Box
          position="absolute"
          top={{ base: "40%", lg: "50%" }}
          left={{ base: "12%", lg: "45%" }}
          color={`red`}
          fontSize={30}
        >
          <Image marginLeft={16} src={EmptyIcon} width={200} />
          <Box> No Component Available</Box>
        </Box>
      )}
    </>
  );
};

export default AllComponents;

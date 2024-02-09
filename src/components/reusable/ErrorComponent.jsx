/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { TfiReload } from "react-icons/tfi";

const ErrorComponent = ({ error }) => {
  const [hasAttemptedReload, setHasAttemptedReload] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("hasAttemptedReload")) {
      setTimeout(() => {
        sessionStorage.setItem("hasAttemptedReload", "true");
        window.location.reload();
      }, 1);
    }
  }, [hasAttemptedReload]);

  // const onReload = () => {
  //   if (!hasAttemptedReload) {
  //     sessionStorage.setItem("hasAttemptedReload", "true");
  //     setHasAttemptedReload(true);
  //     window.location.reload();
  //   }
  // };

  return (
    <Box
    // p={4}
    // borderWidth="2px"
    // borderRadius="lg"
    // backgroundColor="red.100"
    // borderColor="red.300"
    // textAlign="center"
    // display={{ lg: "block" }}
    // maxWidth={{ lg: "550px" }}
    // position="absolute"
    // top="50%"
    // left="50%"
    // transform="translate(-50%, -50%)"
    >
      {" "}
      {/* Loading data */}
      {/* <Heading as="h2" color="red.500" mb={2}>
        Internal Server Error
      </Heading> */}
      {/* <Button colorScheme="red" onClick={onReload}>
        <TfiReload />
        <span style={{ marginLeft: "10px" }}>Reload</span>
      </Button> */}
    </Box>
  );
};

export default ErrorComponent;

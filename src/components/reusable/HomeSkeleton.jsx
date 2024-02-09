/* eslint-disable no-unused-vars */
// Import necessary Chakra UI components and icons
import { Box, Flex, Text, Skeleton } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Box
      cursor="pointer"
      // W={{ base: "100%", lg: "400px" }}
      m={{ base: 2, lg: 4 }}
      _hover={{
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Skeleton height="150px" width="100%" borderRadius="10px" />
    </Box>
  );
};

// Usage in your component, within the loop
const HomeSkeleton = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </>
  );
};

export default HomeSkeleton;

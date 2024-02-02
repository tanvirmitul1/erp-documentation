/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Skeleton, Stack } from "@chakra-ui/react";

const SideSkeleton = ({ Count, width }) => {
  const skeletonCount = Count ? Count : 10;
  const skeletons = [];

  for (let index = 0; index < skeletonCount; index++) {
    skeletons.push(
      <Skeleton key={index} height="20px" width={width ? width : 200} />
    );
  }

  return <Stack>{skeletons}</Stack>;
};

export default SideSkeleton;

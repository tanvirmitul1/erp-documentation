/* eslint-disable no-unused-vars */
import { Skeleton, Stack } from "@chakra-ui/react";

const SideSkeleton = () => {
  const skeletonCount = 5;
  const skeletons = [];

  for (let index = 0; index < skeletonCount; index++) {
    skeletons.push(<Skeleton marginTop="10px" key={index} height="20px" />);
  }

  return <Stack>{skeletons}</Stack>;
};

export default SideSkeleton;

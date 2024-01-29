/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

import useColorModeColors from "../../../hooks/useColorModeColors";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import useModuleStore from "../../../zustand/store";
import LogCard from "./LogCard";

const FunctionsLog = () => {
  const [viewLog, setViewLog] = React.useState(false);

  const handleViewLogClick = () => {
    setViewLog(!viewLog);
  };
  const { addButtonBgColor, addButtonTextColor } = useColorModeColors();
  const { selectedFunction } = useModuleStore();
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
        {" "}
        <Box>View Change Logs</Box>
        <Box top="10px">
          {viewLog ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </Box>
      </Flex>

      {viewLog &&
        selectedFunction?.functionLog.map((fnLog) => (
          <LogCard key={fnLog.id} fnLog={fnLog} />
        ))}
    </Box>
  );
};

export default FunctionsLog;

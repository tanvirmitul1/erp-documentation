/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
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
import UpdateButton from "../../reusable/UpdateButton";
import CustomDescription from "../../reusable/Description";
import AddButton from "../../reusable/AddButton";
import ComponentCard from "./ComponentCard";

const AllComponents = () => {
  const { modulePathColor, modulePathBgColor, moduleTextColor } =
    useColorModeColors();

  const { selectedModule } = useModuleStore();
  const components = selectedModule.components;

  return (
    <Box>
      <Searchbar width="350px" placeholder="Search Component" />
      <Box>
        {components.map((component) => (
          <ComponentCard component={component} />
        ))}
      </Box>
    </Box>
  );
};

export default AllComponents;

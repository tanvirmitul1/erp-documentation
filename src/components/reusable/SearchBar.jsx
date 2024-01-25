/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// SearchInput.js
import { useColorMode } from "@chakra-ui/react";

import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import useColorModeColors from "../../hooks/useColorModeColors";

const Searchbar = ({
  value,
  onChange,
  placeholder,
  iconSize,
  inputSize,
  width,
}) => {
  const { searchBgColor } = useColorModeColors();
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" paddingLeft={4}>
        <FiSearch size={iconSize ? iconSize : 16} />
      </InputLeftElement>
      <Input
        padding={2}
        paddingLeft={12}
        borderRadius={24}
        size={inputSize ? inputSize : "md"}
        width={width ? width : "200px"}
        backgroundColor={searchBgColor}
        type="text"
        placeholder={placeholder ? placeholder : "search"}
        _placeholder={{ opacity: 1, color: "gray.400" }}
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default Searchbar;

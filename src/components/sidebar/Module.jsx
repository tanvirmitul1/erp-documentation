/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Text, Stack, Flex } from "@chakra-ui/react";
import Component from "./Component";
import { SiElementor } from "react-icons/si";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import useModuleStore from "../../zustand/store";
import useColorModeColors from "../../hooks/useColorModeColors";
import { Link } from "react-router-dom";
const Module = ({ module }) => {
  const { moduleIconColor } = useColorModeColors();
  const { setSelectedModule } = useModuleStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleModuleClick = () => {
    setSelectedModule(module);
    setIsOpen(!isOpen);
  };

  return (
    <Stack>
      {/* to={`/module/${module.id}`} */}
      <Link to={`/module/${module.id}`}>
        <Flex
          alignItems="center"
          justifyContent="left"
          gap="5px"
          cursor="pointer"
          onClick={handleModuleClick}
        >
          <SiElementor size={20} color={moduleIconColor} />
          <Text paddingTop="12px" fontSize={12} fontWeight="bold">
            {module.name}
          </Text>
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </Flex>
      </Link>
      {isOpen &&
        module.components.map((component) => (
          <Component key={component.id} module={module} component={component} />
        ))}
    </Stack>
  );
};
export default Module;

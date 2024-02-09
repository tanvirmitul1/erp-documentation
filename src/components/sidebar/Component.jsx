/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Text, Stack, Flex, Box, HStack } from '@chakra-ui/react';
import Element from './Element';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import useColorModeColors from '../../hooks/useColorModeColors';
import useModuleStore from '../../zustand/store';
import { Link } from 'react-router-dom';
import { useGetElementQuery } from '../../redux/api/docApiSlice';
import SideSkeleton from '../reusable/SideSkeleton';
import useZustandStore from '../../zustand/store';

const Component = ({ component, module }) => {
  const { selectedModule, setSelectedComponent, selectedComponent } =
    useZustandStore();

  const { data, isLoading, isError } = useGetElementQuery({
    moduleId: component.moduleId,
    componentId: component.id,
  });

  const elements = data?.data;

  const { toggleLeftBar } = useModuleStore();
  const [isOpen, setIsOpen] = useState(() => {
    // Load isOpen state from sessionStorage or default to false
    return sessionStorage.getItem('componentIsOpen' + component.id) === 'true'
      ? true
      : false;
  });
  const { componentBorderColor } = useColorModeColors();

  useEffect(() => {
    // Save isOpen state to sessionStorage whenever it changes
    sessionStorage.setItem('componentIsOpen' + component.id, isOpen);
  }, [isOpen, component.id]);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
    setIsOpen(!isOpen);
    toggleLeftBar();
  };

  return (
    <Stack
      marginLeft={isOpen ? '20px' : '16px'}
      transition='margin-left 0.3s ease'
      paddingX={2}
      borderLeft={`2px solid ${componentBorderColor}`}
    >
      <HStack>
        <Link to={`/module/${module.id}/component/${component.id}`}>
          <Flex
            height='40px'
            onClick={() => handleComponentClick(component)}
            justifyContent='left'
            gap='3px'
            cursor='pointer'
          >
            <Text paddingTop='10px' fontSize={12} cursor='pointer'>
              {component.name}
            </Text>
            <Box paddingTop='6px'></Box>
          </Flex>
        </Link>

        <Box
          cursor='pointer'
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </Box>
      </HStack>

      {isOpen &&
        (isLoading ? (
          <SideSkeleton Count={3} width={130} />
        ) : (
          elements?.map((element) => {
            if (element.componentName === component.name) {
              return (
                <Element
                  key={element.id}
                  module={module}
                  component={component}
                  element={element}
                />
              );
            }
            return null; // or any other placeholder if you want to skip rendering
          })
        ))}
    </Stack>
  );
};

export default Component;

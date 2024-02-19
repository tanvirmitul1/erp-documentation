import React from "react";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  Collapse,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  const [modulesOpen, setModulesOpen] = React.useState(true);
  const [componentsOpen, setComponentsOpen] = React.useState(false);
  const [elementsOpen, setElementsOpen] = React.useState(false);

  const handleModulesToggle = () => setModulesOpen(!modulesOpen);
  const handleComponentsToggle = () => setComponentsOpen(!componentsOpen);
  const handleElementsToggle = () => setElementsOpen(!elementsOpen);

  return (
    <Drawer isOpen={true} placement="left" size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Navigation</DrawerHeader>
        <DrawerBody>
          <List spacing={3}>
            <ListItem position="relative">
              <Flex align="center">
                <Box
                  w="2px"
                  h="10px"
                  bg="gray.500"
                  position="absolute"
                  top="0"
                  left="0"
                  bottom="0"
                  ml={-1}
                  display={modulesOpen ? "block" : "none"}
                />
                <Text onClick={handleModulesToggle} cursor="pointer">
                  Modules{" "}
                  {modulesOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Text>
              </Flex>
            </ListItem>
            <Collapse in={modulesOpen}>
              <List ml={4} spacing={2}>
                <ListItem position="relative">
                  <Flex align="center">
                    <Box
                      w="2px"
                      h="10px"
                      bg="gray.500"
                      position="absolute"
                      top="0"
                      left="0"
                      bottom="0"
                      ml={-1}
                      display={componentsOpen ? "block" : "none"}
                    />
                    <Text onClick={handleComponentsToggle} cursor="pointer">
                      Components{" "}
                      {componentsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </Text>
                  </Flex>
                </ListItem>
                <Collapse in={componentsOpen}>
                  <List ml={4} spacing={2}>
                    <ListItem position="relative">
                      <Flex align="center">
                        <Box
                          w="2px"
                          h="10px"
                          bg="gray.500"
                          position="absolute"
                          top="0"
                          left="0"
                          bottom="0"
                          ml={-1}
                          display={elementsOpen ? "block" : "none"}
                        />
                        <Text onClick={handleElementsToggle} cursor="pointer">
                          Elements{" "}
                          {elementsOpen ? (
                            <ChevronUpIcon />
                          ) : (
                            <ChevronDownIcon />
                          )}
                        </Text>
                      </Flex>
                    </ListItem>
                    <Collapse in={elementsOpen}>
                      <List ml={4} spacing={2}>
                        {/* Add your functions here */}
                        <ListItem>Function 1</ListItem>
                        <ListItem>Function 2</ListItem>
                      </List>
                    </Collapse>
                  </List>
                </Collapse>
              </List>
            </Collapse>
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;

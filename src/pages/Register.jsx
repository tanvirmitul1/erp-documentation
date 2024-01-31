/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

function Register() {
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      position: "top-right",
      title: "Registration successful.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    // Redirect to home after the toast is displayed
    setTimeout(() => {
      navigate("/login");
    }, 1000); // Change the delay time as needed
  };

  return (
    <Container centerContent p={4}>
      <Flex
        width="full"
        maxW="500px"
        p={4}
        overflow="hidden"
        flexDir="column"
        marginTop={{ base: "80px", md: 0 }}
      >
        <Box textAlign="center" mb={8}>
          <Image
            className="animate__animated animate__zoomIn"
            src="https://erp.seopage1.net/custom/img/login.png"
            alt="IMG"
            m="auto"
            maxH={230}
          />
        </Box>
        <form id="register-form" onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email*</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email*"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="password">Password*</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="gray.300" />}
                />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password*"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="confirm-password">
                Confirm Password*
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="gray.300" />}
                />
                <Input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Confirm Password*"
                />
              </InputGroup>
            </FormControl>

            <Button
              width="full"
              mt={4}
              colorScheme="blue"
              id="submit-register"
              type="submit"
            >
              Sign Up
            </Button>
          </Stack>
        </form>
      </Flex>
    </Container>
  );
}

export default Register;

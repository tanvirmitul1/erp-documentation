/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useLoginUserMutation } from "../redux/api/docApiSlice"; // Uncomment and use appropriately

function Login() {
  const [loginUser, { isLoading }] = useLoginUserMutation(); // Uncomment and use appropriately
  const navigate = useNavigate();
  const toast = useToast();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Uncomment and adjust according to your login logic and API

    try {
      const payload = await loginUser(formData).unwrap();
      localStorage.setItem("userData", JSON.stringify(payload));
      toast({
        position: "top-right",
        title: "Login successful.",
        description: "Welcome back!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast({
        position: "top-right",
        title: "Login failed.",
        description: err.data?.message || "Could not log in.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      setTimeout(() => navigate("/"), 1000);
    }
  };

  return (
    <Container centerContent p={4}>
      <Flex maxH="100vh" width="full" p={10} overflow="hidden" flexDir="column">
        <Box textAlign="center" mb={8} width={220} marginX="auto">
          <Image
            className="animate__animated animate__zoomIn"
            src="https://erp.seopage1.net/custom/img/login.png"
            alt="IMG"
            m="auto"
            maxH={230}
          />
        </Box>

        <form id="login-form" onSubmit={handleSubmit}>
          <Stack spacing={4}>
            {inputField("email", "Email*", <EmailIcon color="gray.300" />)}
            {inputField(
              "password",
              "Password*",
              <LockIcon color="gray.300" />,
              "password"
            )}

            <Button
              width="full"
              mt={4}
              colorScheme="blue"
              id="submit-login"
              type="submit"
              isLoading={isLoading} // Uncomment when you use the mutation
              loadingText="Logging in"
            >
              {/* Uncomment when you use the mutation */}
              {!isLoading && "Login"}
            </Button>
          </Stack>
        </form>
        {/* Link to the register page */}
        <Box mt={4} textAlign="center">
          <Link to="/register">Don't have an account? Register here</Link>
        </Box>
      </Flex>
    </Container>
  );

  // Helper function for rendering input fields
  function inputField(name, placeholder, leftIcon, type = "text") {
    return (
      <FormControl key={name} isRequired>
        <FormLabel htmlFor={name}>{placeholder}</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={leftIcon} />
          <Input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
          />
        </InputGroup>
      </FormControl>
    );
  }
}

export default Login;

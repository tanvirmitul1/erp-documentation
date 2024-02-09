/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
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
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import LogoWhite from "../../src/assets/logo.jpg";
import { useLoginUserMutation } from "../redux/api/authApiSlice";
import useColorModeColors from "../hooks/useColorModeColors";

function Login() {
  const [submitData, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const toast = useToast();
  const { authTextColor } = useColorModeColors();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Check for existing token on component mount
  useEffect(() => {
    let token = "";

    if (sessionStorage.getItem("loginData")) {
      token = Object.keys(JSON.parse(sessionStorage.getItem("loginData")))[1];
    } else {
      token = "";
    }

    if (token === "token") {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = await submitData(formData).unwrap();
      sessionStorage.setItem("loginData", JSON.stringify(payload));

      if (payload.status === 422) {
        toast({
          position: "top-right",
          title: "Invalid Credentials",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top-right",
          title: "Login successful.",
          description: "Welcome back!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }

      setTimeout(() => {
        if (payload.token) {
          navigate("/");
        }
      }, 500);
    } catch (err) {
      toast({
        position: "top-right",
        title: "Login failed.",
        description: err.data?.message || "Could not log in.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      color={authTextColor}
      h="100vh"
      gap={8}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#E7F5FA"
    >
      <Flex
        flexDir={{ base: "column", md: "row" }}
        backgroundColor="#FFFFFF"
        padding={20}
        rounded={30}
      >
        <Box mr={{ base: 0, md: 8 }}>
          <Image
            className="animate__animated animate__zoomIn"
            src="https://erp.seopage1.net/custom/img/login.png"
            alt="IMG"
            m="auto"
            maxW="1000px"
          />
        </Box>

        <Box>
          <Image
            src={LogoWhite}
            marginBottom={2}
            width={200}
            marginLeft={5}
            display={{ base: "none", md: "block" }}
          />
          <form>
            <Stack spacing={4}>
              {inputField("email", "Email", <EmailIcon color="gray.300" />)}
              {inputField(
                "password",
                "Password",
                <LockIcon color="gray.300" />,
                "password"
              )}

              <Button
                width="full"
                mt={4}
                colorScheme="blue"
                onClick={handleSubmit}
                isLoading={isLoading}
                loadingText="Logging in"
              >
                {isLoading ? (
                  <CircularProgress
                    size={10}
                    isIndeterminate
                    color="green.300"
                    mt={4}
                  >
                    <CircularProgressLabel></CircularProgressLabel>
                  </CircularProgress>
                ) : (
                  "Login"
                )}
              </Button>
            </Stack>
          </form>

          <Box mt={4} textAlign="center">
            <Link to="/register">Don't have an account? Register here</Link>
          </Box>
        </Box>
      </Flex>
    </Stack>
  );

  // Helper function for rendering input fields
  function inputField(name, placeholder, leftIcon, type = "text") {
    return (
      <FormControl key={name} isRequired>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={leftIcon} />
          <Input
            color={authTextColor}
            border="1px solid gray"
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            _placeholder={{ opacity: 0.4, color: authTextColor }}
          />
        </InputGroup>
      </FormControl>
    );
  }
}

export default Login;

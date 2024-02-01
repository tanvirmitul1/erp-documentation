/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import { RxAvatar } from "react-icons/rx";
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
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import LogoWhite from "../../src/assets/logo.jpg";
import { useRegisterUserMutation } from "../redux/api/authApiSlice";
import useColorModeColors from "../hooks/useColorModeColors";

function Register() {
  const { authTextColor } = useColorModeColors();
  const [submitData, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  console.log(submitData, isLoading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.password.length < 8) {
      return toast({
        position: "top-right",
        title: "Error.",
        description: "Password must be at least 8 characters long.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    if (formData.password !== formData.password_confirmation) {
      return toast({
        position: "top-right",
        title: "Error.",
        description: "Passwords don't match.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    try {
      const payload = await submitData(formData).unwrap();
      toast({
        position: "top-right",
        title: "Registration successful.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      console.log("payload", payload);

      setTimeout(() => navigate("/login"), 500);
    } catch (err) {
      if (err.status === 422) {
        for (const key in err.data.errors) {
          toast({
            position: "top-right",
            title: "Validation Error",
            description: err.data.errors[key],
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      } else {
        toast({
          position: "top-right",
          title: "Registration failed.",
          description: err.data?.message || "Could not register.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
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
              {inputField("name", "Name", <RxAvatar />)}
              {inputField("email", "Email", <EmailIcon />)}
              {inputField("password", "Password ", <LockIcon />, "password")}
              {inputField(
                "password_confirmation",
                "Confirm Password",
                <LockIcon />,
                "password"
              )}

              <Button
                width="full"
                mt={4}
                colorScheme="blue"
                id="submit-register"
                type="submit"
                isLoading={isLoading}
                loadingText="Submitting"
                onClick={handleSubmit}
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
                  "Register"
                )}
              </Button>
            </Stack>
          </form>

          {/* Link to the login page */}
          <Box mt={4} textAlign="center">
            <Link to="/login">Already registered? Login here</Link>
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

export default Register;

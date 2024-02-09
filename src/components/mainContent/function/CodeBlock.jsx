/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// CodeBlock.jsx
import { FaCopy } from "react-icons/fa";
import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import { Highlight } from "prism-react-renderer";
import copy from "copy-to-clipboard";
import theme from "./themeForCode";
import useColorModeColors from "../../../hooks/useColorModeColors";
import { IconButton } from "@chakra-ui/react";
import { FaExpand } from "react-icons/fa";
const CodeBlock = ({ code, language, openFullscreenModal }) => {
  const { copyIconColor, moduleTextColor } = useColorModeColors();
  const toast = useToast();
  const handleCopy = () => {
    copy(code);

    toast({
      position: "top-right",
      title: "Copied to clipboard!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box
      marginLeft="5px"
      position="relative"
      maxW={{ base: "90%", md: "1000px" }}
      maxH="300px"
      overflow="scroll"
      fontSize={{ base: "10px", md: "inherit" }}
    >
      <Button
        bgColor={moduleTextColor}
        size="sm"
        onClick={handleCopy}
        position="absolute"
        right="50px"
        top="5px"
      >
        <FaCopy color={copyIconColor} />
      </Button>

      <IconButton
        bgColor={moduleTextColor}
        size="sm"
        onClick={openFullscreenModal}
        position="absolute"
        right="5px"
        top="5px"
        icon={<FaExpand />}
        aria-label="Open fullscreen code preview"
      />

      <Highlight theme={theme} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: "20px",
              overflow: "auto",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default CodeBlock;

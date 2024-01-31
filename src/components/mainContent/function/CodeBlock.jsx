/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// CodeBlock.jsx
import { FaCopy } from "react-icons/fa";
import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Highlight } from "prism-react-renderer";
import copy from "copy-to-clipboard";
import theme from "./themeForCode";
import useColorModeColors from "../../../hooks/useColorModeColors";

const CodeBlock = ({ code, language }) => {
  const { copyIconColor, moduleTextColor } = useColorModeColors();

  const handleCopy = () => {
    copy(code);

    alert("Copied to clipboard!");
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
        right="5px"
        top="5px"
      >
        <FaCopy color={copyIconColor} />
      </Button>

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

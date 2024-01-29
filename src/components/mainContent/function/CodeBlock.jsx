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
useColorModeColors;
const CodeBlock = ({ code, language }) => {
  const { copyIconColor } = useColorModeColors();
  const [copyColor, setCopyColor] = React.useState(copyIconColor); // Set initial color

  const handleCopy = () => {
    copy(code);

    setCopyColor("blue");
    alert("Copied to clipboard!");
  };

  return (
    <Box
      margin="0 auto"
      position="relative"
      maxW="90%"
      maxH="300px"
      overflow="scroll"
    >
      <Button
        size="sm"
        onClick={handleCopy}
        style={{ position: "absolute", right: "5px", top: "5px" }}
      >
        <FaCopy color={copyColor} />
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

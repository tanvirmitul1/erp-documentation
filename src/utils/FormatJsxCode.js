/* eslint-disable no-useless-escape */
const formatJSXCodeString = (code) => {
  // Add a newline before comments, import statements, and specified keywords

  if (code) {
    code = code.replace(
      /(\/\/|import |(?<!^)(const |let |if |else |export |function |for |switch ))/gm,
      "\n$1"
    );

    // Handle "return" separately to add a newline before and after
    code = code.replace(/(?<!^)return /gm, "\nreturn ");
    code = code.replace(/return (.*);/g, "return $1;\n");

    // Add a newline after every semicolon (consider context)
    code = code.replace(/;(?![^\[]*\])\s*/g, ";\n");

    // Handle self-closing JSX tags by adding a newline after them
    code = code.replace(/(\/>)/g, "$1\n");

    // Handle JSX opening and closing tags
    code = code.replace(/(>)/g, "$1\n");
    code = code.replace(/(<\/)/g, "\n$1");

    // Add indentation for JSX (basic)
    let indentLevel = 0;
    code = code
      .split("\n")
      .map((line) => {
        if (line.includes("</")) {
          indentLevel--;
        }

        let newLine = " ".repeat(indentLevel * 4) + line;

        if (
          line.includes("<") &&
          !line.includes("/>") &&
          !line.includes("</")
        ) {
          indentLevel++;
        }

        return newLine;
      })
      .join("\n");

    return code.trim();
  }
  return "No code available";
};

export default formatJSXCodeString;

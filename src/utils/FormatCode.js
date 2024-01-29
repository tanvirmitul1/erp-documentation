/* eslint-disable no-useless-escape */
const formatCodeString = (code, language) => {
  if (!code) {
    return "No code available";
  }

  switch (language) {
    case "js":
      return formatJSXCodeString(code);
    case "php":
      return formatPHPCodeString(code);
    case "laravel":
      return formatLaravelCodeString(code);
    default:
      return formatPHPCodeString(code);
  }
};

const formatJSXCodeString = (code) => {
  // JSX formatting logic (as provided in your original code)
  if (code) {
    code = code.replace(
      /(\/\/|import |(?<!^)(const |let |if |else |export |function |for |switch ))/gm,
      "\n$1"
    );

    code = code.replace(/(?<!^)return /gm, "\nreturn ");
    code = code.replace(/return (.*);/g, "return $1;\n");

    code = code.replace(/;(?![^\[]*\])\s*/g, ";\n");

    code = code.replace(/(\/>)/g, "$1\n");

    code = code.replace(/(>)/g, "$1\n");
    code = code.replace(/(<\/)/g, "\n$1");

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

const formatPHPCodeString = (code) => {
  // Basic formatting logic for PHP code
  code = code.replace(/(\(|\)|{|})/g, " $1 ");
  code = code.replace(/;/g, ";\n");

  return code.trim();
};

const formatLaravelCodeString = (code) => {
  // Basic formatting logic for Laravel code
  code = code.replace(/(\(|\)|{|})/g, " $1 ");
  code = code.replace(/;/g, ";\n");

  return code.trim();
};

export default formatCodeString;

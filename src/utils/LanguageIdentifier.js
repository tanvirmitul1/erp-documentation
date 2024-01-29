/* eslint-disable no-useless-escape */
const identifyLanguage = (code) => {
  if (/\bimport\b/.test(code)) {
    return "js";
  } else if (/\<[a-z]/.test(code)) {
    return "jsx";
  } else if (/\bfunction\b|\bif\b|\belse\b|\bfor\b|\bswitch\b/.test(code)) {
    return "js";
  } else if (/\b<\?php\b/.test(code)) {
    return "php";
  } else if (/\bIlluminate\b|\bRoute\b|\bview\b/.test(code)) {
    return "laravel";
  } else {
    return "unknown";
  }
};

export default identifyLanguage;

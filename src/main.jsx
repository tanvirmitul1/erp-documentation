/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.js";
// import { makeServer } from "./server.js";

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" });
// }

// theme={theme}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

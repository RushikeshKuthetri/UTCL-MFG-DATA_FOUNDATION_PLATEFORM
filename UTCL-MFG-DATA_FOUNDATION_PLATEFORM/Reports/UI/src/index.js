import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { store } from "./redux/app/store";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { config } from "./data/auth/Config";
import "./index.css";

import "react-toastify/dist/ReactToastify.css";

const msalInstance = new PublicClientApplication(config);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="/reports">
      <MsalProvider instance={msalInstance}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </MsalProvider>
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>
  document.getElementById("root")
);
reportWebVitals();

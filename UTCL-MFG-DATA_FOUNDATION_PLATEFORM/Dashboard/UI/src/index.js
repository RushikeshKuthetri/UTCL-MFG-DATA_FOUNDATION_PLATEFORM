import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { store } from "./redux/app/store";
import { BrowserRouter } from "react-router-dom";
import { config } from "./data/auth/Config";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
const msalInstance = new PublicClientApplication(config);
window.onbeforeunload = function (e) {
  localStorage.setItem("ParentClosed", "true");
};

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>
  document.getElementById("root")
);

reportWebVitals();

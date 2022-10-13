import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./scss/app.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-tailwind/react";

import "antd/dist/antd.css";

import AuthenticatorContextProvider, {
  AuthenticatorContext,
} from "./context/authenticatorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AuthenticatorContext> */}
    <AuthenticatorContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthenticatorContextProvider>
    {/* </AuthenticatorContext> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

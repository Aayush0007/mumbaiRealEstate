import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import ReactGA from "react-ga4";

// Initialize GA4 once at app start
ReactGA.initialize("G-X26L1R2KHL");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

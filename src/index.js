import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Clear the root element before rendering
const rootElement = document.getElementById("root");
rootElement.innerHTML = ""; // Clear existing children

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// Optionally, you can log performance metrics
reportWebVitals();

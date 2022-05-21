import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/index.css";
import App from "./App";

import { store } from "./store";

import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

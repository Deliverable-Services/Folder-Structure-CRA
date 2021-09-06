import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ReactQueryClient } from "./helpers";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={ReactQueryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

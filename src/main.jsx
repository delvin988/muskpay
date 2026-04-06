import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";

import "./assets/scss/app.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
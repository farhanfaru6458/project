// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import LabourProfile from "./pages/LabourProfile";
import ManagerProfile from "./pages/Manager/ManagerProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
<App/>
{/* <LabourProfile/> */}
{/* <ManagerProfile/> */}
  </BrowserRouter>
);

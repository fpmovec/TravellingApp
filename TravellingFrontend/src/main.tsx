import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/shared.scss"
import 'font-awesome/css/font-awesome.min.css'
import DatePickerWrapper from "./Components/DatePickerWrapper.tsx";
import Router from "./Components/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DatePickerWrapper>
      <Router />
    </DatePickerWrapper>
  </React.StrictMode>
);

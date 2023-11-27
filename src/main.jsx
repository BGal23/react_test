import React from "react";
import ReactDOM from "react-dom/client";
import FirstCode from "./FirstCode.jsx";
import Name from "./NameCode.jsx";
import Form from "./FormCode.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstCode />
    <Name />
    <Form />
  </React.StrictMode>
);

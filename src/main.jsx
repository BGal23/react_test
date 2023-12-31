//import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./lesson1/App.jsx";
//import App_2 from "./lesson2/App_2.jsx";
//import App_3 from "./lesson3/App_3.jsx";
//import App_4 from "./lesson4/App_4";
import App_5 from "./lesson5/App_5";
//import App_6 from "./lesson6/App_6";
import { Provider } from "react-redux";
import { store } from "./lesson6/redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Provider store={store}>
    <App_5 />
  </Provider>
  //</React.StrictMode>
);

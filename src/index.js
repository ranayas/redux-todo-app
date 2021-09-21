import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import setupServer from "./api/setupServer";
import * as ReactRedux from "react-redux";
import store from "./store";

setupServer()

ReactDOM.render(
  <React.StrictMode>
    <ReactRedux.Provider store={store}>
      <App />
    </ReactRedux.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

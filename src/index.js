import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./views/App";
import { configureStore } from "./store";

const store = configureStore();
// console.log("Mystore:", store.getState());

ReactDOM.render(
  //---- provider connect store to app
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

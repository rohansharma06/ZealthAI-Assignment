import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer/auth";

let store;

export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk));

  return store;
}

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Task from "./Task";
import UseMemo_additional from "./UseMemo_additional";
import UseRef_additional from "./UseRef_additional";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import UseReducer from "./useReducer";
import UseReducer_additional from "./useReducer_additional";
import All_hooks_in_one from "./all hooks practice/All_hooks_in_one";
import Redux from "./redux_practise/redux_task";
import UseEffect_again from "./UseEffect_again";
function loo(state = { so: "lets turn ourl life to better toward" }, action) {
  switch (action.type) {
    case "NO":
      state = {
        so: state.so,
      };
  }
  return state;
}
function countReducer(state = { count: 0, name: "" }, action) {
  switch (action.type) {
    case "ADD":
      state = {
        count: state.count + action.payLoad.caption,
      };
      break;
    case "BADD":
      state = {
        count: state.count - action.payLoad.caption,
      };
      break;
    case "MUL":
      state = {
        count: state.count * action.payLoad.caption,
      };
      break;
    case "SUB":
      state = {
        count: state.count / action.payLoad.caption,
      };
      break;
  }
  return state;
}
const store = createStore(
  combineReducers({
    countRed: countReducer,
    nothing: loo,
  }) /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <UseEffect_again />
      {/* <UseReducer_additional /> */}
      {/* <All_hooks_in_one />
      <Redux /> */}
    </div>
  </Provider>,
  document.getElementById("root")
);

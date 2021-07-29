import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./redux/rootReducer";
import { sagaWatcher } from "./redux/sagas";
import App from "./App";
import "./index.scss";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, saga),
))

saga.run(sagaWatcher)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

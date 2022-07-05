import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "./redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <TodoList />
    </React.StrictMode>
  </Provider>,
);

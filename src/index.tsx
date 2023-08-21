/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CodeEditor from "./pages/CodeEditor"
import { Provider } from "react-redux";
import { store } from "app/store";
import { Paths } from "Paths";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <App />,
  },
      {
        path: Paths.CodeEditor,
        element: <CodeEditor />,
      },
      {
        path: Paths.documentation,
        element: <h1>register</h1>,
      },
      {
        path: Paths.employee,
        element: <h1>employee</h1>,
      },
      {
        path: Paths.login,
        element: <h1>login</h1>,
      },



]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

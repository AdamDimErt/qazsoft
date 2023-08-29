/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CodeEditor from "./pages/CodeEditor";
import { Provider } from "react-redux";
import { store } from "app/store";
import { Paths } from "Paths";
import { Home } from "./pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Home type='login' />,
  },
  {
    path: Paths.login,
    element: <Home type='login' />,
  },
  {
    path: Paths.register,
    element: <Home type='register' />,
  },
  {
    path: Paths.history,
    element: <Home type='history' />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

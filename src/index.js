import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./App";
import ScrollToTop from "./components/layout/ScrollToTop";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

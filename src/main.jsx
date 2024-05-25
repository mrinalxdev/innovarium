import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home"
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="min-h-screen"><Home /></div>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

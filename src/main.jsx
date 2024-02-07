import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import ProductMenu from "./pages/ProductMenu/ProductMenu";
import HowToUse from "./pages/HowToUse/HowToUse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/productMenu",
    element: <ProductMenu />,
  },
  {
    path: "/how-to-use",
    element: <HowToUse />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

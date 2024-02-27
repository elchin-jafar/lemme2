import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import ProductMenu, {
  productMenuLoader,
} from "./pages/ProductMenu/ProductMenu";
import HowToUse from "./pages/HowToUse/HowToUse";
import SkinType from "./pages/SkinType/SkinType";
import SkinTypeResult from "./pages/SkinTypeResult/SkinTypeResult";
import FirstLook from "./pages/FirstLook/FirstLook";
import Ingredients from "./pages/Ingredients/Ingredients";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "productMenu/:id",
    element: <ProductMenu />,
    loader: productMenuLoader,
  },
  {
    path: "productMenu/:id/how-to-use",
    element: <HowToUse />,
  },
  {
    path: "productMenu/:id/first-look",
    element: <FirstLook />,
  },
  {
    path: "productMenu/:id/ingredients",
    element: <Ingredients />,
  },
  {
    path: "skin-type",
    element: <SkinType />,
  },
  {
    path: "skin-type/skin-type-res",
    element: <SkinTypeResult />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

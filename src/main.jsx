import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/Homepage.jsx";
import { Movies } from "./pages/Movies.jsx";
import { Actors } from "./pages/Actors.jsx";
import { RootLayout } from "./pages/RootLayout";
import { ProductDetails } from "./pages/ProductDetails";
import { ProductList } from "./pages/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "actors",
        element: <Actors />,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <ProductList />,
          },
          {
            path: ":productId",
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

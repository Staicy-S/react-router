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
import { MovieDetails } from "./components/MovieDetails";
import { ActorDetails } from "./components/ActorDetails";

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
        children: [
          {
            index: true,
            element: <Movies />,
          },
          {
            path: ":movieId",
            element: <MovieDetails />,
          },
        ],
      },
      {
        path: "actors",
        children: [
          {
            index: true,
            element: <Actors />,
          },
          {
            path: ":actorId",
            element: <ActorDetails />,
          },
        ],
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

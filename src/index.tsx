import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import { PokemonDetails } from "./components/PokemonDetails";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Home />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "pokemons/",
        children: [
          {
            path: "",
            element: <Navigate to="/" />,
          },
          {
            path: ":nameOrId",
            element: <PokemonDetails />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<div>Loading spinner</div>}
    />
  </React.StrictMode>
);

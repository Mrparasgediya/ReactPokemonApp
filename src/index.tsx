import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { PokemonDetails } from "./components/PokemonDetails";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";

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

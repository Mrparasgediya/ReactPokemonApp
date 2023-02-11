import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import AddPokemonPage from "./pages/AddPokemonPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import PowersPage from "./pages/PowersPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <HomePage />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "powers",
        element: <PowersPage />,
      },
      {
        path: "pokemons/",
        children: [
          {
            path: "",
            element: <Navigate to="/" />,
          },
          {
            path: "new",
            element: <AddPokemonPage />,
          },
          {
            path: ":nameOrId",
            element: <PokemonDetailsPage />,
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

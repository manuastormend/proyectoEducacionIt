import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Alta from "./pages/Alta";
import Nosotros from "./pages/Nosotros";
import NosotrosCopy from "./pages/NosotrosCopy";
import Contacto from "./pages/Contacto";
import Detalle from "./pages/Detalle";
import "./main.scss";
import Carrito from "./pages/Carrito";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/alta",
    element: <Alta />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/nosotros",
    element: <NosotrosCopy />,
  },
  {
    path: "/detalle/:id",
    element: <Detalle />,
  },
  {
    path: "/cart",
    element: <Carrito />,
  },

  {
    fallbackElement: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

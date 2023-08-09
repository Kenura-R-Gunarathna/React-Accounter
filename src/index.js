import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* import layouts */
import Root from "./layouts/Root";

/* import pages */
import Error from "./pages/Error";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

/* import (tailwind) styles */
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  }, {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  }, {
    path: "/login",
    element: <LogIn />,
    errorElement: <Error />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
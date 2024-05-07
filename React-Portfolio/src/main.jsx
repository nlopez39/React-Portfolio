// import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Resume from "./pages/Resume";
// import './index.css'
//define accessible routes and which componenets respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/Project",
        element: <Project />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

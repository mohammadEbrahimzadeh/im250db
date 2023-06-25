import { Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Crime from "./Pages/Crime/Crime";
import Drama from "./Pages/Drama/Drama";
import Action from "./Pages/Action/Action";
import Biography from "./Pages/Biography/Biography";
import History from "./Pages/History/History";
import Adventure from "./Pages/Adventure/Adventure";
import AboutFilm from "./Pages/AboutFilm/AboutFilm";
import { Component } from "react";
const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "/home", element: <Home /> },
  { path: "/crime", element: <Crime /> },
  { path: "/drama", element: <Drama /> },
  { path: "/action", element: <Action /> },
  { path: "/biography", element: <Biography /> },
  { path: "/history", element: <History /> },
  { path: "/adventure", element: <Adventure /> },

  {
    exact: false,
    // ایدی متغیر است و از کامپوننت هدر می اید
    path: "/aboutFilm/:id",
    element: <AboutFilm />,
  },

  { path: "*", element: <Home /> },
];
export default Routes;

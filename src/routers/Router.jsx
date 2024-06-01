import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import Home from "../pages/home/Home";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);
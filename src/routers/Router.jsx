import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <App></App>,
        },
      ],
    },
  ]);
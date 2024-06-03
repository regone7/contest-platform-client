import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../layout/dashboard/Dashboard";
import MyparticipateContest from "../dashboardElement/userdashboard/MyparticipateContest";
import Mywinningcontest from "../dashboardElement/userdashboard/Mywinningcontest";
import Myprofile from "../dashboardElement/userdashboard/Myprofile";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "/dashboard",
          element: <MyparticipateContest></MyparticipateContest>,
        },
        {
          path: "/dashboard/mywincontest",
          element: <Mywinningcontest></Mywinningcontest>,
        },
        {
          path: "/dashboard/myprofile",
          element: <Myprofile></Myprofile>,
        },
        
      ],
    },
  ]);
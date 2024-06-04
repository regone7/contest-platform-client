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
import ManageUser from "../dashboardElement/admindashboard/ManageUser";
import ManageContest from "../dashboardElement/admindashboard/ManageContest";
import WelcomeDD from "../dashboardElement/WelcomeDD";
import ChangeBlocks from './../assets/update/ChangeBlocks';
import ChangeRole from "../assets/update/ChangeRole";
import AddContest from "../dashboardElement/creatorDashboard/AddContest";
import MyCreatedConts from "../dashboardElement/creatorDashboard/MyCreatedConts";
import ContestSubmit from "../dashboardElement/creatorDashboard/ContestSubmit";


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
          element: <WelcomeDD></WelcomeDD>,
        },
        {
          path: "/dashboard/myparticipatecount",
          element: <MyparticipateContest></MyparticipateContest>,
        },
        {
          path: "/dashboard/roleud/:id",
          element: <ChangeRole></ChangeRole>,
          loader: ({params}) => fetch(`http://localhost:7000/userRole/${params.id}`)
        },
        {
          path: "/dashboard/blockud/:id",
          element: <ChangeBlocks></ChangeBlocks>,
          loader: ({params}) => fetch(`http://localhost:7000/userRole/${params.id}`)
        },
        {
          path: "/dashboard/mywincontest",
          element: <Mywinningcontest></Mywinningcontest>,
        },
        {
          path: "/dashboard/myprofile",
          element: <Myprofile></Myprofile>,
        },
        {
          path: "/dashboard/ddmanageuser",
          element: <ManageUser></ManageUser>,
        },
        {
          path: "/dashboard/ddmanagecontest",
          element: <ManageContest></ManageContest>,
        },
        {
          path: "/dashboard/addcontest",
          element: <AddContest></AddContest>,
        },
        {
          path: "/dashboard/mycreatedconts",
          element: <MyCreatedConts></MyCreatedConts>,
        },
        {
          path: "/dashboard/contestsubmit",
          element: <ContestSubmit></ContestSubmit>,
        },
        
      ],
    },
  ]);
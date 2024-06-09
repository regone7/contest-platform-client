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
import UpdateContest from "../updates/UpdateContest";
import ChangeConform from "../assets/update/ChangeConform";
import CommentAdmin from "../assets/update/CommentAdmin";
import AllContest from "../pages/allcontest/AllContest";
import AllcontestDiteals from './../pages/ditels/AllcontestDiteals';
import PaymentApply from "../pages/payment/PaymentApply";
import UserList from "../dashboardElement/creatorDashboard/contestwin/UserList";


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
        {
          path: "/allcontest",
          element: <AllContest></AllContest>,
        },
        {
          path: "/allcontestditeals/:id",
          element: <AllcontestDiteals></AllcontestDiteals>,
          loader: ({params}) => fetch(`http://localhost:7000/diteals/${params.id}`)
        },
        {
          path: "/paymentandapply/:id",
          element: <PaymentApply></PaymentApply>,
          loader: ({params}) => fetch(`http://localhost:7000/diteals/${params.id}`)
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
          path: "/dashboard/ddmanagecontest",
          element: <ManageContest></ManageContest>,
        },
        {
          path: "/dashboard/conformconst/:id",
          element: <ChangeConform></ChangeConform>,
          loader: ({params}) => fetch(`http://localhost:7000/conformss/${params.id}`)
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
        {
          path: "/dashboard/userlist/:id",
          element: <UserList></UserList>,
          loader: ({params}) => fetch(`http://localhost:7000/userlistess/${params.id}`)
        },
        {
          path: "/dashboard/updatecontest/:id",
          element: <UpdateContest></UpdateContest>,
          loader: ({params}) => fetch(`http://localhost:7000/updatecontest/${params.id}`)
        },
        {
          path: "/dashboard/comment/:id",
          element: <CommentAdmin></CommentAdmin>,
          loader: ({params}) => fetch(`http://localhost:7000/userlistes/${params.id}`)
        },
        
      ],
    },
  ]);
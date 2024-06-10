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
import Errorpage from "../components/Errorpage";
import PrivateRoutes from './../privateroute/PrivateRoutes';






  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Errorpage></Errorpage>,
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
          element: <PrivateRoutes><AllcontestDiteals></AllcontestDiteals></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:7000/diteals/${params.id}`)
        },
        {
          path: "/paymentandapply/:id",
          element: <PrivateRoutes><PaymentApply></PaymentApply></PrivateRoutes>,
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
          element: <PrivateRoutes><MyparticipateContest></MyparticipateContest></PrivateRoutes>,
        },
        {
          path: "/dashboard/mywincontest",
          element: <PrivateRoutes><Mywinningcontest></Mywinningcontest></PrivateRoutes>,
        },
        {
          path: "/dashboard/myprofile",
          element: <PrivateRoutes><Myprofile></Myprofile></PrivateRoutes>,
        },
        {
          path: "/dashboard/ddmanageuser",
          element: <PrivateRoutes><ManageUser></ManageUser></PrivateRoutes>,
        },
        {
          path: "/dashboard/roleud/:id",
          element: <PrivateRoutes><ChangeRole></ChangeRole></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:7000/userRole/${params.id}`)
        },
        {
          path: "/dashboard/blockud/:id",
          element: <PrivateRoutes><ChangeBlocks></ChangeBlocks></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:7000/userRole/${params.id}`)
        },
        {
          path: "/dashboard/ddmanagecontest",
          element: <PrivateRoutes><ManageContest></ManageContest></PrivateRoutes>,
        },
        {
          path: "/dashboard/conformconst/:id",
          element: <PrivateRoutes><ChangeConform></ChangeConform></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:7000/conformss/${params.id}`)
        },
        {
          path: "/dashboard/addcontest",
          element: <PrivateRoutes><AddContest></AddContest></PrivateRoutes>,
        },
        {
          path: "/dashboard/mycreatedconts",
          element: <PrivateRoutes><MyCreatedConts></MyCreatedConts></PrivateRoutes>,
        },
        {
          path: "/dashboard/contestsubmit",
          element: <PrivateRoutes><ContestSubmit></ContestSubmit></PrivateRoutes>,
        },
        {
          path: "/dashboard/userlist/:id",
          element: <PrivateRoutes><UserList></UserList></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:7000/userlistess/${params.id}`)
        },
        {
          path: "/dashboard/updatecontest/:id",
          element: <PrivateRoutes><UpdateContest></UpdateContest></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:7000/updatecontest/${params.id}`)
        },
        {
          path: "/dashboard/comment/:id",
          element: <PrivateRoutes><CommentAdmin></CommentAdmin></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:7000/userlistes/${params.id}`)
        },
        
      ],
    },
  ]);
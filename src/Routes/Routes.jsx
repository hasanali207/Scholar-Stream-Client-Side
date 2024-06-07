import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login";
import Register from "../Pages/Shared/Register";
import AllScholarship from "../Pages/AllScholarship/AllScholarship";
import Details from "../components/Details";
import AddScholarship from "../Pages/AddScholarShip/AddScholarship";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile";
import MyApplication from "../Pages/Dashboard/MyApplication";
import MyReview from "../Pages/Dashboard/MyReview";

const router = createBrowserRouter([
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
            element: <Register></Register>
        },
        {
            path: "/allScholarship",
            element: <AllScholarship></AllScholarship>
        },
        {
            path: "/addScholarship/:id",
            element: <PrivateRoute><AddScholarship></AddScholarship></PrivateRoute>,
            
        },
        {
            path: "/items/:id",
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader:({params}) => fetch(`http://localhost:5000/singleItem/${params.id}`)
            
        }
      ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'profile',
                element:  <MyProfile></MyProfile>
            },
            {
                path:'applicaiton',
                element:  <MyApplication></MyApplication>
            },
            {
                path:'review',
                element:  <MyReview></MyReview>
            },
        ]
    }
  ]);
  export default router;    
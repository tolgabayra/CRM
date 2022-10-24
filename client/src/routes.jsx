import { Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Register from "./pages/Register";

import BoardLayout from "./layouts/board/Index"
import Sales from "./pages/boards/Sales";
import Welcome from "./pages/boards/Welcome";
import Dasboard from "./pages/boards/Dasboard";
import Documents from "./pages/boards/Documents";
import Contacts from "./pages/boards/Contacts";
import { useSelector } from "react-redux";
import Profile from "./pages/boards/Profile";
import Settings from "./pages/boards/Settings";
import ResetPassword from "./pages/ResetPassword";


const ProtectedRoute = () => {
  const user = useSelector((state)=> state.auth.user)
  if(!user){
    return <Login />
  }
  return <BoardLayout />
}



export default function Router(){
    return useRoutes([
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "reset_password",
            element: <ResetPassword />
        },
        {
            path: "*",
            element: <Page404 />
        },
        {
            path: "/boards",
            element: <ProtectedRoute />,
            children: [
                {path: "sales", element: <Sales />},
                {path: "", element: <Dasboard />},
                {path: "documents", element: <Documents />},
                {path: "contacts", element: <Contacts />},
                {path: "profile", element: <Profile />},
                {path: "settings", element: <Settings />},

            ]
        },
        {
            path: "/",
            children:[
                {
                    path: "/", element: <Home />
                }
            ]
        }
    ])
}
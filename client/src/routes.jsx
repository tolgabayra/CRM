import { Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Register from "./pages/Register";



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
            path: "*",
            element: <Page404 />
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
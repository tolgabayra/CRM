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
            path: "/boards",
            element: <BoardLayout />,
            children: [
                {path: "sales", element: <Sales />},
                {path: "", element: <Dasboard />},
                {path: "documents", element: <Documents />},
                {path: "contacts", element: <Contacts />}

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
import { createBrowserRouter } from "react-router";
import RootLayout from "@/Layouts/RootLayout";
import AppLayout from "@/Layouts/AppLayout";

import Homepage from "@/Pages/Homepage";
import NotFound from "@/Pages/NotFound";
import Register from "@/Pages/Register";
import Login from "@/Pages/Login";
import AuthSync from "@/Pages/AuthSync";
import Inbox from "@/Pages/Inbox";

import appAction from "@/Routes/actions/AppActions";

import type { RouteObject } from "react-router";

const rootRouteChildren: RouteObject[] =  [
    {
        index: true,
        element: <Homepage />
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "auth-sync",
        element: <AuthSync />
    }
]

const rootAppChildren: RouteObject[] = [
    {
        path: "inbox",
        element: <Inbox /> 
    }
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: rootRouteChildren,
        errorElement: <NotFound />
    },
    {
        path: "/app",
        element: <AppLayout />,
        children: rootAppChildren,
        errorElement: <NotFound />,
        action: appAction,
    }
])

export default router
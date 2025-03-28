import { createBrowserRouter } from "react-router";
import RootLayout from "@/Layouts/RootLayout";

import Homepage from "@/Pages/Homepage";
import NotFound from "@/Pages/NotFound";
import Register from "@/Pages/Register";
import Login from "@/Pages/Login";
import AuthSync from "@/Pages/AuthSync";

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

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: rootRouteChildren,
        errorElement: <NotFound />
    },
])

export default router
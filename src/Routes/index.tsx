import { createBrowserRouter } from "react-router";
import RootLayout from "@/Layouts/RootLayout";
import Homepage from "@/Pages/Homepage";
import NotFound from "@/Pages/NotFound";
import Register from "@/Pages/Register";

import type { RouteObject } from "react-router";

const rootRouteChildren: RouteObject[] =  [
    {
        index: true,
        element: <Homepage />
    },
    {
        path: "register",
        element: <Register />
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
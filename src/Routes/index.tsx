import { createBrowserRouter } from "react-router";
import RootLayout from "@/Layouts/RootLayout";
import AppLayout from "@/Layouts/AppLayout";

import Homepage from "@/Pages/Homepage";
import NotFound from "@/Pages/NotFound";
import Register from "@/Pages/Register";
import Login from "@/Pages/Login";
import AuthSync from "@/Pages/AuthSync";
import Inbox from "@/Pages/Inbox";
import TodayPage from "@/Pages/TodayPage";
import UpcomingPage from "@/Pages/UpcomingPage";
import CompletedPage from "@/Pages/CompletedPage";

import appAction from "@/Routes/actions/AppActions";

import inboxTaskLoader, { upcomingTaskLoader } from "./Loaders/InboxLoader";
import { todayTaskLoader } from "./Loaders/InboxLoader";

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
        element: <Inbox />, 
        loader: inboxTaskLoader
    },
    {
        path: "today",
        element: <TodayPage />,
        loader: todayTaskLoader
    },
    {
        path: "upcoming",
        element: <UpcomingPage />,
        loader: upcomingTaskLoader
    },
    {
        path: "completed",
        element: <CompletedPage />,
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
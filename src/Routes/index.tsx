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
import Projects from "@/Pages/Projects";

import appAction from "@/Routes/actions/AppActions";
import ProjectActions from "./actions/ProjectActions";

import inboxTaskLoader, { completedTasksLoader, upcomingTaskLoader } from "./Loaders/InboxLoader";
import { todayTaskLoader } from "./Loaders/InboxLoader";
import projectsLoader from "./Loaders/ProjectLoader";
import ProjectDetails from "@/Pages/ProjectDetails";
import ProjectDetailsLoader from "./Loaders/ProjectDetailsLoader";

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
        loader: completedTasksLoader
    },
    {
        path: "projects",
        element: <Projects />,
        action: ProjectActions,
        loader: projectsLoader
    },
    {
        path: "projects/:projectId",
        element: <ProjectDetails />,
        loader: ProjectDetailsLoader
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
        loader: projectsLoader
    }
])

export default router
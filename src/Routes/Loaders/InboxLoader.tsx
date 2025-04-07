import { databases, Query } from "@/lib/appwrite";

import { getUserId } from "@/Service/appActionHelper";
import type { LoaderFunction } from "react-router";
import { startOfToday, startOfTomorrow } from "date-fns";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const getTasks = async ({ todayTasks = false, upcomingTasks = false, completedTasks = false } = {}) => {

    const Queries = [
        Query.equal("completed", false),
        Query.equal("userId", getUserId()),
        Query.isNull("projectId"),
    ]

    if(todayTasks){
        Queries.push(
            Query.and([
                Query.greaterThanEqual("due_date", startOfToday().toISOString()),
                Query.lessThan("due_date", startOfTomorrow().toISOString())
            ])
        )
    } 
    else if(upcomingTasks){
        Queries.push(
            Query.greaterThanEqual("due_date", startOfTomorrow().toISOString())
        )
    } 
    else if(completedTasks){
        Queries[0] = Query.equal("completed", true);
    }

    try {
        return await databases.listDocuments(
            APPWRITE_DATABASE_ID,
            APPWRITE_COLLECTION_ID,
            Queries
        )
    } catch(err) {
        console.log("Fehler beim Laden der Tasks");
        console.log(err);   
    }
}

// for all tasks - inside router
const inboxTaskLoader: LoaderFunction = async () => {
    const tasks = await getTasks();
    return { tasks }
}

// for only today tasks - inside router
const todayTaskLoader: LoaderFunction = async () => {
    const todayTasks = await getTasks({todayTasks: true});
    return { todayTasks }
}

const upcomingTaskLoader: LoaderFunction = async () => {
    const upcomingTasks = await getTasks({completedTasks: true});
    return { upcomingTasks }
}

export default inboxTaskLoader
export { todayTaskLoader, upcomingTaskLoader };
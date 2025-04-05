import { databases, Query } from "@/lib/appwrite";

import { getUserId } from "@/Service/appActionHelper";
import type { LoaderFunction } from "react-router";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const getTasks = async () => {
    try {
        return await databases.listDocuments(
            APPWRITE_DATABASE_ID,
            APPWRITE_COLLECTION_ID,
            [
                Query.equal("completed", false),
                Query.equal("userId", getUserId()),
                Query.isNull("projectId")
            ]
        )
    } catch(err) {
        console.log("Fehler beim Laden der Tasks");
        console.log(err);   
    }
}

const inboxTaskLoader: LoaderFunction = async () => {
    const tasks = await getTasks();
    return { tasks }
}

export default inboxTaskLoader
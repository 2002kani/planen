import type { ActionFunction } from "react-router";

import { databases } from "@/lib/appwrite";
import { generateID, getUserId } from "@/Service/appActionHelper";

import { Project } from "@/Types/typesIndex";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const createProjects = async (data: Project) => {
    try{
        return await databases.createDocument(
            APPWRITE_DATABASE_ID,
            "projects",
            generateID(),
            { ...data, id: getUserId() }
        );
    }catch(err){
        console.log(err);  
    }
}

const ProjectActions: ActionFunction = async ({ request }) => {
    const data = await request.json() as Project;

    if(request.method === "POST"){
        return await createProjects(data);
    }
}  

export default ProjectActions
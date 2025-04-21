import type { LoaderFunction } from "react-router";

import { getUserId } from "@/Service/appActionHelper";
import { databases } from "@/lib/appwrite";


const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const getProject = async (projectId: string) => {
    try{
        const project = await databases.getDocument(
            APPWRITE_DATABASE_ID,
            "projects",
            projectId
        );

        if(project.userId !== getUserId()){
            throw new Error("Unauthorized");
        }

        return project;

    }catch(err){
        console.log("Loader Error for Project Details: ", err);
    }
}

const ProjectDetailsLoader: LoaderFunction = async ({ params }) => {
    const { projectId } = params as { projectId: string }

    const projects = await getProject(projectId);
    
    return { projects }
}

export default ProjectDetailsLoader
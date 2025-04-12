import type { ActionFunction } from "react-router";
import { redirect } from "react-router";
import { Models } from "appwrite";

import { databases } from "@/lib/appwrite";
import { generateID, getUserId } from "@/Service/appActionHelper";

import { ProjectForm } from "@/Types/typesIndex";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const createProject = async (data: ProjectForm) => {
    let project: Models.Document | null = null;
    const aiTaskGen = data.ai_task_gen;
    const taskGenPrompt = data.task_gen_prompt;

    try{
        project = await databases.createDocument(
            APPWRITE_DATABASE_ID,
            "projects",
            generateID(),
            {
                name: data.name,
                color_name: data.color_name,
                color_hex: data.color_hex,
                userId: getUserId()
            }
        );
    }catch(err){
        console.log(err);  
    }

    return redirect(`app/projects/${project?.$id}`);
}

const ProjectActions: ActionFunction = async ({ request }) => {
    const data = await request.json() as ProjectForm;

    if(request.method === "POST"){
        return await createProject(data);
    } 
}  

export default ProjectActions
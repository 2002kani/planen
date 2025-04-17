import { redirect } from "react-router";
import { Models } from "appwrite";

import { databases } from "@/lib/appwrite";
import { generateID, getUserId } from "@/Service/appActionHelper";

import { ProjectForm } from "@/Types/typesIndex";
import { generateProjectTasks } from "@/Api/googleAi";

import type { ActionFunction } from "react-router";

type aiGenTask = {
    content: string;
    due_date: Date | null;
}

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

let aiGeneratedTask: aiGenTask[] = [];

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

    /* If ai generation available, generate the tasks based on prompt */
    if(aiTaskGen){
        try{
            aiGeneratedTask = JSON.parse(await generateProjectTasks(taskGenPrompt) || "");
            console.log(aiGeneratedTask);
        }catch(err){
            console.log("Error in generating task: ", err);
        }
    }

    /* ai generated tasks into database */
    if(aiGeneratedTask.length){
        const promises = aiGeneratedTask.map((task) => {
            return databases.createDocument(
                APPWRITE_DATABASE_ID,
                "67ed0d8900282a2be0f4",
                generateID(),
                {
                    ...task, 
                    projectId: project?.$id,
                    userId: getUserId()
                }
            );
        });

        try{
            await Promise.all(promises)
        }catch(err){
            console.log("Error creating project tasks: ",err);
        }
    }


    return redirect(`/app/projects/${project?.$id}`);
}

const deleteProject = async (data: ProjectForm) => {
    try {

    }catch(err){
        console.log("Api Deletion Fail: ", err)
    }
}

const ProjectActions: ActionFunction = async ({ request }) => {
    const data = await request.json() as ProjectForm;

    if(request.method === "POST"){
        return await createProject(data);
    } else if(request.method === "DELETE"){
        return await deleteProject(data);
    }
}  

export default ProjectActions
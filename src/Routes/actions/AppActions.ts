import type { ActionFunction } from "react-router";
import type { Task } from "@/Types/typesIndex";
import { databases } from "@/lib/appwrite";
import { generateID, getUserId } from "@/Service/appActionHelper";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const createTask = async (data: Task) => {
  try{
    return await databases.createDocument(
      APPWRITE_DATABASE_ID,
      "67ed0d8900282a2be0f4",
      generateID(),
      { ...data, userId: getUserId() }
    );
  } catch(err){
    console.log(err);
  }
}

const appAction: ActionFunction = async ({ request }) => {
  const data = await request.json() as Task;
  if(request.method === "POST"){
    return await createTask(data);
  }
}

export default appAction
import type { ActionFunction } from "react-router";
import type { Task } from "@/Types/typesIndex";

const createTask = async (data: Task) => {
  try{
    console.log(data);
    
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
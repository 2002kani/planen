import model from "@/lib/googleAi";

const generateProjectTasks = async (prompt: string) => {
    model.generationConfig = {
        responseMimeType: "application/json"
    }

    try{
        const result = await model.generateContent(`
            Generate and return a list of tasks based on the provided
            prompt and the given JSON schema.

            Prompt: ${prompt}
            
            Task Schema:
            {
                content: string; // Description of the task
                due_date: Date | null; // Due date of the task or null if no specific due date is provided
            }

            Requirements:
            1. Ensure tasks align with the provided prompt
            2. Set the "due_date" relative to todays date: ${new Date()}.
            3. Return an array of tasks matching the schema
            4. the task text should be the same language as the prompt

            Output: Array<Task>
        `);

        return result.response.text();
        
    }catch(err){
        console.log("Error generating tasks: ", err);
    }
}

export { generateProjectTasks }
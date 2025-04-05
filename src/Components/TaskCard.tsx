import { Models } from "appwrite"
import { cn } from "@/lib/utils"

import { dateCustomFormat, getTaskDueDateColor } from "@/Service/TaskFormHelper"

import { Check, CalendarDays } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"

interface ITaskCardProps {
    id: string,
    content: string,
    completed: boolean,
    due_date: Date,
    projectId: Models.Document | null
}

const TaskCard: React.FC<ITaskCardProps> = ({ id, content, completed, due_date, projectId }) => {

  return (
    <div className="">
        <Button 
        variant="outline" 
        size="icon"
        className={cn("group/button rounded-full w-5 h-5 mt-2", completed && "bg-border")}
        role="checkbox"
        aria-label={`Markiere Aufgabe als ${completed ? "incomplete" : "complete"}`}
        aria-describedby="task-content"
        >
            <Check
            strokeWidth={4}
            className={cn("!w-3 !h-3 text-muted-foreground group-hover/ button:opacity-100 transition-opacity", completed ? "opacity-100" : "opacity-0")}
            />

        </Button>

        <Card>
            <CardContent>
                <p className={cn("text-sm max-md:me-16", completed && "text-muted-foreground line-through")}>
                    {content}
                </p>
            </CardContent>

            <CardFooter>
                <div className=""></div>
            </CardFooter>
        </Card>
    </div>
  )
}

export default TaskCard
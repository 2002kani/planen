import { Models } from "appwrite"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { useFetcher } from "react-router"

import { dateCustomFormat, getTaskDueDateColor } from "@/Service/TaskFormHelper"
import TaskForm from "./TaskForm"

import { Check, CalendarDays, Hash, Inbox, Edit, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

interface ITaskCardProps {
    id: string,
    content: string,
    completed: boolean,
    due_date: Date,
    project: Models.Document | null
}

const TaskCard: React.FC<ITaskCardProps> = ({ id, content, completed, due_date, project }) => {

    const fetcher = useFetcher();

    const [taskFormShow, setTaskFormShow] = useState(false);

  return (
    <>
    { !taskFormShow && (
        <div className="group/card relative grid grid-cols-[max-content,minmax(0,1fr)] gap-3 border-b">
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

        <Card className="rounded-none py-2 space-y-1.5 border-none">
            <CardContent className="p-0">
                <p className={cn("text-sm max-md:me-16", completed && "text-muted-foreground line-through")}>
                    {content}
                </p>
            </CardContent>

            <CardFooter className="p-0 flex gap-4">
                { due_date && ( 
                    <div className={cn("flex items-center gap-1 text-xs text-muted-foreground", getTaskDueDateColor(due_date, completed))}>
                        <CalendarDays size={14} />
                        {dateCustomFormat(due_date)}
                    </div>
                )}

                <div className="grid grid-cols-[minmax(0,180px),max-content] items-center gap-1 text-xs text-muted-foreground ms-auto">
                    <div className="truncate text-right">
                        {project?.name || "Inbox"}
                    </div>
                    {project ? <Hash size={14} /> : <Inbox size={14} className="text-muted-foreground"/>}
                </div>
            </CardFooter>
        </Card>

        <div className="absolute top-1.5 right-0 bg-background ps-1 shadow-[-10px_0_5px_hst(var(--background))] flex items-center gap-1 opacity-0 group-hover/card:opacity-100 focus-within:opacity-100 max-md:opacity-100">
            {!completed && (
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button 
                        variant="ghost" 
                        size="icon" 
                        className="w-6 h-6 text-muted-foreground" 
                        aria-label="Bearbeiten"
                        onClick={() => setTaskFormShow(!taskFormShow)}
                        >
                            <Edit />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent> Aufgabe Bearbeiten </TooltipContent>
                </Tooltip>
            )}

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button 
                        variant="ghost" 
                        size="icon" 
                        className="w-6 h-6 text-muted-foreground" 
                        aria-label="Entfernen"
                        onClick={() => {{
                            fetcher.submit(JSON.stringify({ id: id}), {
                                action: "/app",
                                method: "DELETE",
                                encType: "application/json"
                            })
                        };
                        }}
                        >
                            <Trash2 />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent> Aufgabe entfernen </TooltipContent>
                </Tooltip>
        </div>
        </div>
    )}

    { taskFormShow && (
        <TaskForm
        className="my-1"
        defaultFormData={{
            id,
            content,
            due_date: due_date,
            projectId: project && project?.$id,
        }}
        mode="edit"
        onCancel={() => setTaskFormShow(!taskFormShow)}
        onSubmit={(formData) => {{
            fetcher.submit(JSON.stringify(formData), {
                action: "/app", 
                method: "PUT", 
                encType: "application/json"
            })
        }; setTaskFormShow(!taskFormShow);}}
        />
    )}
    </>
  )
}

export default TaskCard
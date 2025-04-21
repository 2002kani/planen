import { useState, useEffect, useCallback } from "react"
import * as chrono from 'chrono-node';
import { cn } from "@/lib/utils";
import { useLoaderData } from "react-router";
import { Models } from "appwrite";

import { Card, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Separator } from "./ui/separator"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import { Calendar } from "./ui/calendar"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "./ui/command"
import { ScrollArea } from "./ui/scroll-area"

import { CalendarIcon, X, Inbox, Hash, ChevronDown, SendHorizonal, Check } from "lucide-react"

import type { ClassValue } from "clsx"
import type { TaskForm } from "@/Types/typesIndex"

import { dateCustomFormat, getTaskDueDateColor } from "@/Service/TaskFormHelper"

interface ITaskFormProps {
    defaultFormData?: TaskForm;
    className?: ClassValue;
    mode: "create" | "edit";
    onCancel?: () => void;
    onSubmit?: (FormData: TaskForm) => void;
}

const DEFAULT_FORM_DATA: TaskForm = {
    content: "",
    due_date: null,
    projectId: null,
}

type DataType = {
  projects: Models.DocumentList<Models.Document>;
}

const TaskForm: React.FC<ITaskFormProps> = ({
    defaultFormData = DEFAULT_FORM_DATA,
    className,
    mode,
    onCancel,
    onSubmit
}) => {

    const loaderData = useLoaderData() as DataType;
    const { projects } = loaderData

  const [taskContent, setTaskContent] = useState(defaultFormData?.content);
  const [dueDate, setDueDate] = useState(defaultFormData?.due_date);
  const [projectId, setProjectId] = useState(defaultFormData?.projectId);

  const [projectName, setProjectName] = useState("");
  const [projectColorHex, setProjectColorHex] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [dueDateOpened, setDueDateOpened] = useState(false);
  const [projectOpened, setProjectOpened] = useState(false);

  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    if(projectId && projects?.documents.length){
        const selectedProject = projects.documents.find((project) => project.$id === projectId)

        if(selectedProject){
            setProjectName(selectedProject.name);
            setProjectColorHex(selectedProject.color_hex);
        }
    }
  }, [projects, projectId])

  useEffect(() => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        content: taskContent,
        due_date: dueDate,
        projectId: projectId
    }));
  }, [taskContent, dueDate, projectId])

  useEffect(() => {
    const parsedChrono = chrono.de.parse(taskContent)

    if(parsedChrono.length){
        const lastDate = parsedChrono[parsedChrono.length -1];
        setDueDate(lastDate.date())
    }
  }, [taskContent])
  
  const handleSubmit = useCallback(() => {
    if(!taskContent) return;
    
    if(onSubmit) onSubmit(formData ?? DEFAULT_FORM_DATA);
    
    setTaskContent("");
  }, [taskContent, onSubmit, formData]);

  //const selectedProject = projectId ? projects?.documents.find(project => project.$id === projectId) : null;
    
  useEffect(() => {
    if (projectOpened) {
      setSearchQuery("");
    }
  }, [projectOpened]);

  return (
    <Card className={cn("focus:within:border-foreground/30", className)}>
        <CardContent className="p-2">
            <Textarea 
            className="!border-0 !ring-0 mb-2 p-1"
            placeholder="Halbe Stunde joggen im Wald.."
            autoFocus
            value={taskContent}
            onInput={(e) => setTaskContent(e.currentTarget.value)}
            onKeyDown={(e) => {
                if(e.key === "Enter"){
                    e.preventDefault();

                    handleSubmit();
                }
            }}
            >
            </Textarea>

            <div className="ring-1 ring-border rounded-md max-w-max">
                <Popover
                open={dueDateOpened}
                onOpenChange={setDueDateOpened}
                modal={true}
                >
                    <PopoverTrigger asChild>
                        <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm" 
                        className={cn(getTaskDueDateColor(dueDate, false))}>
                            <CalendarIcon /> { dueDate ? dateCustomFormat(dueDate) : "Zeitpunkt"}
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0">
                        <Calendar 
                        mode="single" 
                        disabled={{ before: new Date() }} 
                        initialFocus
                        onSelect={(selected) => {
                            setDueDate(selected || null);
                            setDueDateOpened(false)
                        }}
                        />
                    </PopoverContent> 
                </Popover>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button 
                        variant="ghost" 
                        size="sm" 
                        className="px-2 -ms-2"
                        onClick={() => setDueDate(null)}
                        >
                            <X />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right"> Zeitpunkt entfernen </TooltipContent>
                </Tooltip>
            </div>
        </CardContent>

        <Separator />

        <CardFooter className="grid grid-cols-[minmax(0,1fr),max-content] gap-2 p-2">
            <Popover modal open={projectOpened} onOpenChange={setProjectOpened}>
                <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" role="comobox" aria-expanded={projectOpened} className="max-w-max">
                        <Inbox style={{ color: projectColorHex }} /> {projectName || "Eingang"} <ChevronDown />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[240px] p-0" align="start">
                    <Command>
                        <CommandInput placeholder="Projekt suchen..." />
                        <CommandList>
                            <ScrollArea>
                                <CommandEmpty> Kein Projekt gefunden </CommandEmpty>

                                <CommandGroup>
                                    {projects && projects.documents && projects.documents
                                        .filter(project => 
                                            project.name.toLowerCase().includes(searchQuery.toLowerCase())
                                        )
                                        .map((project) => (
                                            <CommandItem
                                                key={project.$id}
                                                className="cursor-pointer"
                                                onSelect={() => {
                                                    const isAlreadySelected = project.$id === projectId;
                                                    
                                                    setProjectId(isAlreadySelected ? null : project.$id);
                                                    setProjectName(isAlreadySelected ? "" : project.name);
                                                    setProjectColorHex(isAlreadySelected ? "" : project.color_hex);
                                                    setProjectOpened(false);
                                                }}
                                            >
                                                <Hash style={{color: project.color_hex}} /> 
                                                <span>{project.name}</span>
                                                {project.$id === projectId && (
                                                    <span className="ml-auto"><Check/></span>
                                                )}
                                            </CommandItem>
                                        ))
                                    }
                                </CommandGroup>
                            </ScrollArea>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <div className="flex items-center gap-2">
                <Button variant="secondary" onClick={onCancel}>
                    <span className="max-md:hidden"> Abbrechen </span>
                    <X className="md:hidden" />
                </Button>
                <Button disabled={!taskContent} onClick={handleSubmit} >
                    <span className="max-md:hidden">{ mode === "create" ? "Hinzufügen" : "Speichern"}</span>
                    <SendHorizonal className="md:hidden" />
                </Button>
            </div>
        </CardFooter>
    </Card>
  )
}

export default TaskForm
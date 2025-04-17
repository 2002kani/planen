import { useFetcher, useNavigate, useLocation } from "react-router"

import { Trash2 } from "lucide-react"

import { 
    AlertDialog, 
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger } from "@/Components/ui/alert-dialog"
import { Button } from "./ui/button"

import type { Project } from "@/Types/typesIndex"

interface IProjectDeleteButtonProps {
    defaultFormData: Project;
}

const ProjectDeleteButton: React.FC<IProjectDeleteButtonProps> = ({ defaultFormData }) => {
    const fetcher = useFetcher();

    const handleDeleteProject = async () => {
        try{
            fetcher.submit(JSON.stringify(defaultFormData), {
                action: "app/projects",
                method: "DELETE",
                encType: "application/json"
            })
        }catch(err){
            console.log("Failed delete attempt: ", err);
        }
    }

  return (
    <AlertDialog>
        <AlertDialogTrigger>
            <Button
            variant="ghost"
            size="sm"
            className="w-ful justify-start px-2 !text-destructive"
            >
                <Trash2 /> Löschen
            </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle> Projekt löschen? </AlertDialogTitle>

                <AlertDialogDescription>
                    Bist du dir sicher, dass du dein Projekt löschen willst?
                </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter> 
                <AlertDialogCancel> Abbrechen </AlertDialogCancel>
                <AlertDialogAction onClick={() => handleDeleteProject}> Löschen </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default ProjectDeleteButton
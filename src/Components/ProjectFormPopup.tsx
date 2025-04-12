import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

import ProjectForm from "./ProjectForm";

import type { Project } from "@/Types/typesIndex";

interface IProjectFormPopupProps {
    defaultFormData?: Project;
    children: React.ReactNode;
    method: "POST" | "PUT"
}

const ProjectFormPopup: React.FC<IProjectFormPopupProps> = ({ defaultFormData, children, method }) => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>

        <DialogContent className="p-0 border-0 !rounded-xl">
            <ProjectForm mode="edit" />
        </DialogContent>
    </Dialog>
  );
}

export default ProjectFormPopup
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

import ProjectForm from "./ProjectForm";

interface IProjectFormProps {
    children: React.ReactNode;
}

const ProjectFormPopup: React.FC<IProjectFormProps> = ({ children }) => {
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
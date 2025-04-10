import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

import ProjectForm from "./ProjectForm";

const ProjectFormPopup = ({ children }) => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>

        <DialogContent className="p-0 border-0 !rounded-xl">
            <ProjectForm />
        </DialogContent>
    </Dialog>
  );
}

export default ProjectFormPopup
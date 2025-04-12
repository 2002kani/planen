import { useState } from "react";
import { useFetcher } from "react-router";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

import ProjectForm from "./ProjectForm";

import type { Project } from "@/Types/typesIndex";


interface IProjectFormPopupProps {
    defaultFormData?: Project;
    children: React.ReactNode;
    method: "POST" | "PUT"
}

const ProjectFormPopup: React.FC<IProjectFormPopupProps> = ({ defaultFormData, children, method }) => {

  const fetcher = useFetcher();

  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>

        <DialogContent className="p-0 border-0 !rounded-xl">
            <ProjectForm 
            mode={method === "POST" ? "create" : "edit"}
            defaultFormData={defaultFormData} 
            onCancel={() => setOpen(false)} 
            onSubmit={async (data) => {
              setOpen(false);

              await fetcher.submit(JSON.stringify(data), {
                action: "/app/projects",
                method,
                encType: "application/json"
              })
            }}
            />
        </DialogContent>
    </Dialog>
  );
}

export default ProjectFormPopup
import { Project } from "@/Types/typesIndex"

import ProjectFormPopup from "./ProjectFormPopup";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Edit } from "lucide-react";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import ProjectDeleteButton from "./ProjectDeleteButton";

interface IProjectActionMenuProps extends DropdownMenuContentProps {
    defaultFormData: Project; 
}

const ProjectActionMenu: React.FC<IProjectActionMenuProps> = ({ children, defaultFormData, ...props}) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

        <DropdownMenuContent {...props}>
            <DropdownMenuItem asChild>
                <ProjectFormPopup method="PUT" defaultFormData={defaultFormData}>
                    <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start px-2">
                        <Edit /> Bearbeiten
                    </Button>
                </ProjectFormPopup>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
                <ProjectDeleteButton />
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProjectActionMenu
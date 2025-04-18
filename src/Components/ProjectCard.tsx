import { Models } from "appwrite"
import { Link } from "react-router";

import ProjectActionMenu from "./ProjectActionMenu";

import { Hash, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
 
interface IProjectCardProps {
    project: Models.Document;
    variant?: "default" | "compact";
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project, variant = "default" }) => {

    const isCompact = variant === "compact";

  return (
    <div className={cn("group/card relative h-14 flex items-center gap-3 px-2 rounded-lg hover:bg-secondary", isCompact && "h-9 gap-2 px-2")}>
        <Hash
        size={16}
        color={project.color_hex}
        className="shrink-0"
        />

        <Link to={`/app/projects/${project.$id}`} className="inset-0 z-10">
            <p className="text-sm truncate max-w-[48ch]">{project.name}</p>
        </Link>

        <ProjectActionMenu defaultFormData={{
            id: project.$id,
            name: project.name,
            color_name: project.color_name,
            color_hex: project.color_hex
        }}>
            <Button variant="ghost" size="icon" className={cn("shrink-0 ms-auto opacity-0 group-hover/card:opacity-100 max-md:opacity-100", isCompact && "h-9 -mr-3")} aria-label="Mehr">
                <MoreHorizontal />
            </Button>
        </ProjectActionMenu>
    </div>
  )
}

export default ProjectCard
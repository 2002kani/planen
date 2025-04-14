import { Models } from "appwrite"

import { Hash, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

interface IProjectCardProps {
    project: Models.Document;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  return (
    <div className="group/card relative h-14 flex items-center gap-3 px-2 rounded-lg hover:bg-secondary">
        <Hash
        size={16}
        color={project.color_hex}
        className="shrink-0"
        />

        <p className="text-sm truncate max-w-[48ch]">{project.name}</p>

        <Button variant="ghost" size="icon" className="shrink-0 ms-auto opacity-0 group-hover/card:opacity-100 max-md:opacity-100" aria-label="Mehr">
            <MoreHorizontal />
        </Button>

        <Link to={`/app/projects/${project.$id}`} className="absolute inset-0 z-10" />
    </div>
  )
}

export default ProjectCard
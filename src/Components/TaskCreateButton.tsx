import { Button } from "./ui/button"
import { CirclePlus } from "lucide-react"

type TaskCreateButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const TaskCreateButton: React.FC<TaskCreateButtonProps> = (props) => {
  return (
    <Button variant="link" className="text-[#628cff] w-full justify-start mb-4 px-0 mt-1" {...props}>
        <CirclePlus /> Hinzufügen
    </Button>
  )
}

export default TaskCreateButton
import { Button } from "./ui/button"
import { CirclePlus } from "lucide-react"

type TaskCreateButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const TaskCreateButton: React.FC<TaskCreateButtonProps> = (props) => {
  return (
    <Button variant="link">

    </Button>
  )
}

export default TaskCreateButton
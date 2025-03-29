import type { PropsWithChildren } from "react"

import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog"
import TaskForm from "./TaskForm"

const TaskFormPopup: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>

        <DialogContent className="p-0 border-0 rounded-xl">
            <TaskForm />
        </DialogContent>
    </Dialog>
  )
}

export default TaskFormPopup
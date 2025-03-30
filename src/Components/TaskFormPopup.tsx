import { useState, type PropsWithChildren } from "react"
import { useLocation } from "react-router"

import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog"
import TaskForm from "./TaskForm"
import { startOfToday } from "date-fns"

const TaskFormPopup: React.FC<PropsWithChildren> = ({ children }) => {

  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>

        <DialogContent className="p-0 border-0 rounded-xl">
            <TaskForm defaultFormData={{
              content: "",
              due_date: location.pathname === "/app/today" ? startOfToday() : null,
              projectId: null,
              }}
              mode="create"
              onCancel={() => setOpen(false)}
              />
        </DialogContent>
    </Dialog>
  )
}

export default TaskFormPopup
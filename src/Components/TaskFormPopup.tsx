import { useEffect, useState, type PropsWithChildren } from "react"
import { useLocation, useFetcher } from "react-router"
import { startOfToday } from "date-fns"

import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog"
import TaskForm from "./TaskForm"

const TaskFormPopup: React.FC<PropsWithChildren> = ({ children }) => {

  const location = useLocation();
  const fetcher = useFetcher();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if(event.key === "q"){
        // Falls man im textarea "q" eingibt, wird nichts abgebrochen
        const target = event.target as HTMLElement;
        if(target.localName === "textarea") return;

        event.preventDefault();
        setOpen(true);
      }
    }

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener)
  }, [])

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
              onSubmit={(formData) => {
                fetcher.submit(JSON.stringify(formData), {
                  action: "/app",
                  method: "POST",
                  encType: "application/json",
                });
                setOpen(false);
              }}
              />
        </DialogContent>
    </Dialog>
  )
}

export default TaskFormPopup
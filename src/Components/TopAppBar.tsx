
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { SidebarTrigger } from "@/Components/ui/sidebar"


interface ITopAppBarProps {
    title: string;
    taskCount?: number;
}

const TopAppBar: React.FC<ITopAppBarProps> = ({ title, taskCount }) => {

  return (
    <div className="sticky z-40 bg-background top-0 h-14 grid grid-cols-[40px,minmax(0,1fr),40px] items-center px-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <SidebarTrigger />
        </TooltipTrigger>

        <TooltipContent>
          <p> Seitenleiste </p>
        </TooltipContent>
      </Tooltip>

      <div className="max-w-[480px] mx-auto text-center transition-[transform, opacity]">
        <h1 className="font-semibold truncate">
            {title}
        </h1>

        {Boolean(taskCount) && (
            <div className="text-xs text-muted-foreground">
                {taskCount} tasks
            </div>
        )}
      </div>
    </div>
  )
}

export default TopAppBar
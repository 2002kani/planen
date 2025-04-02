import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { SidebarTrigger } from "@/Components/ui/sidebar"
import Kbd from "@/Components/Kbd"

const TopAppBar = () => {
  return (
    <div className="">
      <Tooltip>
        <TooltipTrigger asChild>
          <SidebarTrigger />
        </TooltipTrigger>

        <TooltipContent>
          <p> Seitenleiste </p>

          <Kbd />
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default TopAppBar
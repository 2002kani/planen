import { Outlet } from "react-router"

import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar"
import AppSidebar from "@/Components/AppSidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

const AppLayout = () => {
  return (
    <SidebarProvider>
      <TooltipProvider delayDuration={400} disableHoverableContent>
        <AppSidebar />
        <SidebarTrigger />
        <div>AppLayout</div> <Outlet />
      </TooltipProvider>
    </SidebarProvider>
  )
}

export default AppLayout
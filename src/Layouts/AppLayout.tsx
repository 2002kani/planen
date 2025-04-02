import { Outlet } from "react-router"

import { SidebarProvider } from "@/Components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import AppSidebar from "@/Components/AppSidebar"

const AppLayout = () => {
  return (
    <SidebarProvider>
      <TooltipProvider delayDuration={400} disableHoverableContent>
        <AppSidebar />
        
        <main className="flex-1">
          <Outlet />
        </main>
      </TooltipProvider>
    </SidebarProvider>
  )
}

export default AppLayout
import { Link } from "react-router"

import { 
    Sidebar, 
    SidebarContent, 
    SidebarHeader, 
    SidebarFooter, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarMenu, 
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuBadge,
    SidebarGroupAction,
    SidebarGroupLabel
} from "./ui/sidebar"

import { UserButton } from "@clerk/clerk-react"
import Logo from "@/Components/Logo"
import { CirclePlus, Plus, ChevronUp } from "lucide-react"
import { SIDEBAR_LINKS } from "@/Utilities/Constants"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

const AppSidebar = () => {
  return (
    <Sidebar>
        <SidebarHeader>
            <Link to="/app/inbox" className="p-2">
                <Logo/>
            </Link>
        </SidebarHeader>

        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <CirclePlus/> Hinzufügen
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        {SIDEBAR_LINKS.map((item, index) => (
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton asChild>
                                    <Link to={item.href}>
                                        <item.icon />
                                        <span>{item.label}</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuBadge> 0 </SidebarMenuBadge>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            <Collapsible className="group/collapsible">
                <SidebarGroup>
                    <SidebarGroupLabel asChild className="text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        <CollapsibleTrigger> 
                            <ChevronUp className="me-2 transition-transform group-data-[state=open]/collapsible:rotate-180" /> Projekte
                        </CollapsibleTrigger>
                    </SidebarGroupLabel>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <SidebarGroupAction aria-label="Projekt erstellen">
                                <Plus />
                            </SidebarGroupAction>
                        </TooltipTrigger>

                        <TooltipContent side="right"> Projekt erstellen </TooltipContent>
                    </Tooltip>

                    <CollapsibleContent>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <p className="text-muted-foreground text-sm p-2"> Klick + um projekte erstellen</p>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </CollapsibleContent>
                </SidebarGroup>
            </Collapsible>
        </SidebarContent>

        <SidebarFooter>
            <UserButton 
            showName 
            appearance= {{
                elements: {
                    rootBox: "w-full",
                    userButtonTrigger: "!shadow-none w-full justify-start p-2 rounded-md hover:bg-sidebar-accent",
                    userButtonBox: "flex-row-reverse shadow-none gap-2",
                    userButtonOuterIdentifier: "ps-0",
                    popoverBox: "pointer-events-auto"
                }
            }}/>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
import { Link, useNavigate } from "react-router"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Models } from "appwrite"
import { useLoaderData } from "react-router"

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
import { CirclePlus, Plus, ChevronRight } from "lucide-react"
import { SIDEBAR_LINKS } from "@/Utilities/Constants"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import TaskFormPopup from "@/Components/TaskFormPopup"
import ProjectFormPopup from "./ProjectFormPopup"
import ProjectCard from "./ProjectCard"
import { Button } from "./ui/button"

type DataType = {
    projects: Models.DocumentList<Models.Document>;
}

const AppSidebar = () => {

    const [activeMenuItem, setActiveMenuItem] = useState<string>("Eingang");

    const loaderData = useLoaderData() as DataType;
    const { projects } = loaderData
    const navigate = useNavigate();
    
  return (
    <Sidebar>
        <SidebarHeader>
            <Link to="/app/inbox" className="p-2 rounded-md border border-[hsl(0,0%,22%)]">
                <Logo/>
            </Link>
        </SidebarHeader>

        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                    <SidebarGroupLabel asChild className="mt-1">
                        <p> Produktivität </p>
                    </SidebarGroupLabel>
                        <SidebarMenuItem>
                            <TaskFormPopup>
                                <SidebarMenuButton className="!text-[#7999ea]">
                                    <CirclePlus/> Hinzufügen
                                </SidebarMenuButton>
                            </TaskFormPopup>
                        </SidebarMenuItem>
                        {SIDEBAR_LINKS.map((item, index) => (
                            <SidebarMenuItem 
                            key={index} 
                            onClick={() => setActiveMenuItem(item.label)}
                            className={cn(activeMenuItem === item.label ? "bg-sidebar-accent rounded-md" : "")}
                            >
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
                <SidebarGroupLabel asChild className="ml-2 mt-2 -mb-1">
                        <p> Erweiterung </p>
                </SidebarGroupLabel>

                <SidebarGroup>
                    <SidebarGroupLabel asChild className="text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        <CollapsibleTrigger> 
                            <ChevronRight className="me-2 transition-transform group-data-[state=open]/collapsible:rotate-90" /> Projekte
                        </CollapsibleTrigger>
                    </SidebarGroupLabel>

                    <Tooltip>
                        <ProjectFormPopup method="POST">
                        <TooltipTrigger asChild>
                            <SidebarGroupAction aria-label="Projekt erstellen">
                                <Plus />
                            </SidebarGroupAction>
                        </TooltipTrigger>
                        </ProjectFormPopup>

                        <TooltipContent side="right"> Projekt erstellen </TooltipContent>
                    </Tooltip>

                    <CollapsibleContent>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <div className="mt-1">
                                    {projects && projects.documents && projects.documents.map((project) => (
                                        <ProjectCard key={project.$id} project={project} variant="compact"/>
                                    ))}
                                    { projects.total >= 1 && (
                                        <p 
                                        className="ml-2 mt-1 text-sm text-muted-foreground cursor-pointer hover:underline"
                                        onClick={() => navigate("/app/projects/")}
                                        >
                                            Projektübersicht
                                        </p>
                                    )}
                                </div>
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
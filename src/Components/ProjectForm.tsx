import { useState, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "./ui/label"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "./ui/command"
import { ScrollArea } from "./ui/scroll-area"
import { Switch } from "./ui/switch"
import { Textarea } from "./ui/textarea"

import { Circle, Check, ChevronDown, Bot } from "lucide-react"
import { PROJECT_COLORS } from "@/Utilities/Constants"

const DEFAULT_PROJECT_NAME = "Untitled";
const DEFAULT_PROJECT_COLOR_NAME = "Slate";
const DEFAULT_PROJECT_COLOR_HEX = "#64748b";

const DEFAULT_FORM_DATA: Project = {
    id: null,
    name: DEFAULT_PROJECT_NAME,
    color_name: DEFAULT_PROJECT_COLOR_NAME,
    color_hex: DEFAULT_PROJECT_COLOR_HEX,
};

import type { Project, ProjectForm } from "@/Types/typesIndex"

type IProjectFormProps = {
    defaultFormData?: Project;
    mode: "create" | "edit";
    onCancel?: () => void;
    onSubmit?: (FormData: ProjectForm) => void;
}

const ProjectForm: React.FC<IProjectFormProps> = ({ 
    defaultFormData = DEFAULT_FORM_DATA, 
    mode, 
    onCancel = () => {}, 
    onSubmit}) => {

    const [projectName, setProjectName] = useState<string>(defaultFormData.name);
    const [projectNameCharCount, setProjectNameCharCount] = useState<number>(defaultFormData.name.length);
    const [colorName, setColorName] = useState<string>(defaultFormData.color_name);
    const [colorHex, setColorHex] = useState<string>(defaultFormData.color_hex);

  return (
    <Card>
        <CardHeader className="p-4">
            <CardTitle>{mode === "create" ? "Projekt Hinzufügen" : "Bearbeiten"}</CardTitle>
        </CardHeader>

        <Separator />

        <CardContent>
            <div>
                <Label htmlFor="project_name">Name</Label>
                <Input 
                type="text" 
                id="project_name" 
                className="mt-2 mb-1"
                onInput={(e) => {
                    setProjectName(e.currentTarget.value);
                    setProjectNameCharCount(e.currentTarget.value.length);
                }} 
                value={projectName} 
                maxLength={120} />

                <div className={cn("text-xs text-muted-foreground max-w-max ms-auto", projectNameCharCount >= 110 && "text-destructive")}>
                    {projectNameCharCount}/120
                </div>
            </div>

            <div>
                <Label htmlFor=""> Farbe </Label>

                <Popover modal={true}>
                    <PopoverTrigger asChild>
                        <Button 
                        variant="outline"
                        className="w-full mt-2"
                        id="color"
                        >
                            <Circle fill={colorHex} /> 
                            {colorName}
                            <ChevronDown className="ms-auto" />
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent align="start" className="p-0 w-[478px] max-sm:w-[360px]">
                        <Command>
                            <CommandInput placeholder="Farbe suchen..." />
                            <CommandList>
                                <ScrollArea>
                                    <CommandEmpty> Keine Farben gefunden.</CommandEmpty>

                                    <CommandGroup>
                                        {PROJECT_COLORS.map(({ name, hex }) => (
                                            <CommandItem key={name}>
                                                <Circle fill={hex}/>

                                                {name}

                                                {colorName === name && <Check className="ms-auto" />}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </ScrollArea>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </CardContent>
    </Card>
  )
}

export default ProjectForm
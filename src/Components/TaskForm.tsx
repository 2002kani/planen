import { Card, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Separator } from "./ui/separator"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import { Calendar } from "./ui/calendar"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "./ui/command"
import { ScrollArea } from "./ui/scroll-area"

import { CalendarIcon, X, Inbox, Hash, ChevronDown, SendHorizonal } from "lucide-react"

const TaskForm = () => {
  return (
    <Card className="focus:within:border-foreground/30">
        <CardContent className="p-2">
            <Textarea 
            className="!border-0 !ring-0 mb-2 p-1"
            placeholder="Halbe Stunde joggen im Wald.."
            autoFocus>
            </Textarea>

            <div className="ring-1 ring-border rounded-md max-w-max">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button type="button" variant="ghost" size="sm">
                            <CalendarIcon /> Zeitpunkt
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" disabled={{ before: new Date() }} initialFocus />
                    </PopoverContent> 
                </Popover>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="px-2 -ms-2">
                            <X />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right"> Zeitpunkt entfernen </TooltipContent>
                </Tooltip>
            </div>
        </CardContent>

        <Separator />

        <CardFooter className="grid grid-cols-[minmax(0,1fr),max-content] gap-2 p-2">
            <Popover modal>
                <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" role="comobox" aria-expanded={false} className="max-w-max">
                        <Inbox /> Eingänge <ChevronDown />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[240px] p-0" align="start">
                    <Command>
                        <CommandInput placeholder="Projekt suchen..." />
                        <CommandList>
                            <ScrollArea>
                                <CommandEmpty> Kein Projekt gefunden </CommandEmpty>

                                <CommandGroup>
                                    <CommandItem>
                                        <Hash /> Projekt 1
                                    </CommandItem>
                                    <CommandItem>
                                        <Hash /> Projekt 2
                                    </CommandItem>
                                    <CommandItem>
                                        <Hash /> Projekt 3
                                    </CommandItem>
                                    <CommandItem>
                                        <Hash /> Projekt 4
                                    </CommandItem>
                                    <CommandItem>
                                        <Hash /> Projekt 5
                                    </CommandItem>
                                    <CommandItem>
                                        <Hash /> Projekt 6
                                    </CommandItem>
                                    <CommandItem>
                                        <Hash /> Projekt 7
                                    </CommandItem>
                                    <CommandItem>
                                        <Hash /> Projekt 8
                                    </CommandItem>
                                    <CommandItem>
                                        <Hash /> Projekt 9
                                    </CommandItem>
                                    <CommandItem>
                                        <Hash /> Projekt 10
                                    </CommandItem>
                                </CommandGroup>
                            </ScrollArea>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <div className="flex items-center gap-2">
                <Button variant="secondary">
                    <span className="max-md:hidden"> Abbrechen </span> <X className="md:hidden" />
                </Button>
                <Button>
                    <span className="max-md:hidden"> Hinzufügen </span> <SendHorizonal className="md:hidden" />
                </Button>
            </div>
        </CardFooter>
    </Card>
  )
}

export default TaskForm
import { formatRelative, isSameYear, isBefore, isTomorrow, startOfToday, format, isToday } from "date-fns";

export const toTitleUpperCase = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
}

export const dateCustomFormat = (date: string | number | Date) => {
    const today = new Date();

    const relativeDay = toTitleUpperCase(formatRelative(date, today).split(" at ")[0]);

    const relativeDays = ["Monday", "Tuesday", "Wednesday", "Thurstay", "Friday", "Saturday", "Sunday", "Today", "Tomorrow"]

    // Ausgabe für Wochentage
    if(relativeDays.includes(relativeDay)){
        return relativeDay;
    }

    // Ausgabe für Datum
    if(isSameYear(date, today)){
        return format(date, "dd. MMM")
    } else{
        return format(date, "dd. MMM yyyy");
    }
}

export const getTaskDueDateColor = (dueDate: Date | null, completed?: boolean) => {
    if(dueDate === null || completed === undefined) return;

    if(isBefore(dueDate, startOfToday()) && !completed){
        return "text-red-500"
    }

    if(isToday(dueDate)){
        return "text-emerald-500"
    }

    if(isTomorrow(dueDate) && !completed ){
        return "text-amber-500"
    }
}
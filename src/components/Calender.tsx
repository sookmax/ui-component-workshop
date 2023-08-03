import { useState } from "react";
import { format } from "date-fns";
import { DayPicker, DayPickerSingleProps } from "react-day-picker";
import { cn } from "../utils/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default function Calender({
  selected,
  onSelect,
  disabled,
  initialFocus,
}: {
  selected?: Date | undefined;
  onSelect?: (date: Date | undefined) => void;
  disabled?: DayPickerSingleProps["disabled"];
  initialFocus?: DayPickerSingleProps["initialFocus"];
}) {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());

  const onDayOrMonthChange = (date: Date | undefined) => {
    // if (date) {
    //   console.log(format(date, "yyyy-MM-dd / eeee"));
    // }
    onSelect?.(date) || setSelectedDay(date);
  };

  return (
    <DayPicker
      mode="single"
      selected={selected || selectedDay}
      onSelect={onDayOrMonthChange}
      showOutsideDays={true}
      fixedWeeks={true}
      month={selected || selectedDay}
      onMonthChange={onDayOrMonthChange}
      disabled={disabled}
      initialFocus={initialFocus}
      formatters={{
        formatWeekdayName: (date) => {
          const weekday = format(date, "eeeee");
          return weekday;
        },
      }}
      classNames={{
        root: "border border-gray-400 rounded-md p-2",
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          //   buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 border border-gray-400 rounded-md transition-opacity opacity-60 hover:opacity-100 flex justify-center items-center"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex mb-2",
        head_cell: "text-gray-600 rounded-md w-9 text-xs font-normal",
        row: "flex w-full mt-2",
        // cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:text-white [&:has([aria-selected])]:bg-cyan-700 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        cell: "text-sm p-0 rounded-md h-9 w-9 flex",
        day: cn(
          "w-full font-normal aria-selected:opacity-100 rounded-md [&:not([aria-selected])]:hover:bg-gray-100"
        ),
        //   buttonVariants({ variant: "ghost" }),
        //   "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        day_selected:
          "bg-cyan-700 text-white hover:bg-cyan-800 animate-in duration-200 fade-in-0 transition-colors",
        // day_today: "bg-accent text-accent-foreground",
        day_outside: "text-gray-400/80",
        day_disabled: "text-muted-foreground opacity-50",
        // day_range_middle:
        //   "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
      }}
    />
  );
}

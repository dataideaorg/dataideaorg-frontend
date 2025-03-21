import React from "react";
import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";

// Localizer for react-big-calendar
const localizer = momentLocalizer(moment);

// Event type definition
interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
}

// Props for Calendar component
interface CustomCalendarProps extends Omit<CalendarProps, "localizer"> {
  events: CalendarEvent[];
}

const Calendar: React.FC<CustomCalendarProps> = ({ events, ...restProps }) => {
  return (
    <div className="p-3 font-default">
      <BigCalendar
        events={events}
        localizer={localizer}
        style={{ height: "85vh", width: "100%" }}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(event) => {
          // Navigate to the link stored in the resource
          window.location.href = event.resource.link;
        }}
        {...restProps} // Spread other props if needed
      />
    </div>
  );
};

export default Calendar;

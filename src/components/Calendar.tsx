import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import React from "react";

const localizer = momentLocalizer(moment);

const Calendar: React.FC = (props: Omit<CalendarProps, "localizer">) => {
  return (
    <div className="p-3 h-screen">
      <BigCalendar
        events={props.events}
        localizer={localizer}
        // defaultView="week"
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default Calendar;

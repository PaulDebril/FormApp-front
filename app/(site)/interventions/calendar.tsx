"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const Calendar = () => {
  return (
    <div className="w-[60%] h-[50%] mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: "event 1", date: "2024-09-25" },
          { title: "event 2", date: "2019-04-02" },
        ]}
      />
    </div>
  );
};

export default Calendar;
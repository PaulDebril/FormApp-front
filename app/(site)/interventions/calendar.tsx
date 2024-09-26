"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Intervention } from "./page"; // Import de l'interface Intervention

interface CalendarProps {
  interventions: Intervention[];
}

const Calendar = ({ interventions }: CalendarProps) => {
  // Transforme les données d'intervention en événements FullCalendar
  const events = interventions.map(intervention => ({
    title: intervention.name, // Nom de l'intervention
    date: intervention.date.split('T')[0], // Date sans l'heure
    className: 'event-gray-background', // Ajout d'une classe pour chaque événement
  }));

  return (
    <div className="w-[60%] h-[50%] mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events} // Ajout des événements dans le calendrier
        eventColor= '#D1D5DB'
        eventTextColor= '#000000'
      />
    </div>
  );
};

export default Calendar;

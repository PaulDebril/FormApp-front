"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Button } from "@/components/ui/button";

export default function interventions() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Interventions </h2>
        </div>
      </header>
      <main className="m-10 min-h-[calc(100vh-57px-97px)] flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Bilan pédagogique et financier</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="w-[60%] h-[50%] mx-auto"> {/* Adjust the width and height as needed */}
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
          </CardContent>
          <CardFooter>
            <Button>Ajouter</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}

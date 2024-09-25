// "use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataThisMonth, columnsThisMonth } from "./columns-thismonth";
import { DataByCenter, columnsByCenter  } from "./columns-bycenter";
import { DataTable } from "./data-table";
import Calendar from './calendar';
import {getAllIntervention} from '@/services/intervention.service';



async function getDataThisMonth (): Promise<DataThisMonth[]> {
  return [
    {
      centre: "Centre 1",
      session: "Session 1",
      date : new Date(), 
      sallecours: "Salle 1",
    }
  ];
}

async function getDataByCenter(): Promise<DataByCenter[]> {
  try {
    const data = await getAllIntervention();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    return [];
  }
}
export default async function interventions() {
  const dataThisMonth = await getDataThisMonth();
  const DataByCenter = await getDataByCenter();
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
            <CardTitle>Interventions</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="calendar">
              <TabsList>
                <TabsTrigger value="calendar">Calendrier</TabsTrigger>
                <TabsTrigger value="thismonth">Ce mois ci</TabsTrigger>
                <TabsTrigger value="bycenter">Par centre</TabsTrigger>
              </TabsList>
              <TabsContent value="calendar">
                <Calendar />
              </TabsContent>
              <TabsContent value="thismonth">
              <TabsContent value="thismonth"><DataTable columns={columnsThisMonth} data={dataThisMonth}></DataTable></TabsContent>
              </TabsContent>
              <TabsContent value="bycenter"><DataTable columns={columnsByCenter} data={DataByCenter}></DataTable></TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
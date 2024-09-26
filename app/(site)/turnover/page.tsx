import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Data, columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";


async function getDataThisMonth (): Promise<Data[]> {
  // Fetch data from your API here.
  return [
    {
      session: "Session 1",
      date: new Date(),
      heures: 10,
      tarifheure: 50,
      totalBrut: 1000,
      urssaf: 800,
      totalNet: 200,
    },
    {
      session: "Session 8",
      date: new Date(),
      heures: 10,
      tarifheure: 50,
      totalBrut: 1000,
      urssaf: 800,
      totalNet: 200,

    },
  ];
}
async function getDataByMonth (): Promise<Data[]> {
  // Fetch data from your API here.
  return [
    {
      session: "Session 23",
      date: new Date(),
      heures: 10,
      tarifheure: 50,
      totalBrut: 1000,
      urssaf: 800,
      totalNet: 200,
    },
    {
      session: "Session 2",
      date: new Date(),
      heures: 10,
      tarifheure: 50,
      totalBrut: 1000,
      urssaf: 800,
      totalNet: 200,
    },
  ];
}
async function getDataByYear (): Promise<Data[]> {
  // Fetch data from your API here.
  return [
    {
      session: "Session 98",
      date: new Date(),
      heures: 10,
      tarifheure: 50,
      totalBrut: 1000,
      urssaf: 800,
      totalNet: 200,
    },
    {
      session: "Session 99",
      date: new Date(),
      heures: 10,
      tarifheure: 50,
      totalBrut: 1000,
      urssaf: 800,
      totalNet: 200,
    },
  ];
}
export default async function turnover() {
  const dataThisMonth = await getDataThisMonth();
  const dataByMonth = await getDataByMonth();
  const dataByYear = await getDataByYear();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Facture</h2>
        </div>
      </header>
      <main className="m-10 min-h-[calc(100vh-57px-97px)] flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Mon chiffre d&apos;affaires</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="thismonth">
              <TabsList>
                <TabsTrigger value="thismonth">Mois courant</TabsTrigger>
                <TabsTrigger value="bymonth">Par mois</TabsTrigger>
                <TabsTrigger value="byyear">Par année</TabsTrigger>
              </TabsList>
              <TabsContent value="thismonth"><DataTable columns={columns} data={dataThisMonth} /></TabsContent>
              <TabsContent value="bymonth"><DataTable columns={columns} data={dataByMonth} /></TabsContent>
              <TabsContent value="byyear"><DataTable columns={columns} data={dataByYear} /></TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button>Ajouter</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
import Link from "next/link";
import Image from "next/image";
import { PanelsTopLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Data, columns } from "./columns";
import { DataTable } from "./data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function getData(): Promise<Data[]> {
  // Fetch data from your API here.
  return [
    {
      session: "Session 1",
      date: new Date(),
      heures: 10,
      nbEtudiant: 5,
      nbEtudiantXHeures: 50,
      totalBrut: 1000,
      totalNet: 800,
    },
    {
      session: "Session 99",
      date: new Date("2023-12-31"),
      heures: 10,
      nbEtudiant: 5,
      nbEtudiantXHeures: 50,
      totalBrut: 1000,
      totalNet: 800,
    },
    {
      session: "Session 8",
      date: new Date("2022-02-11"),
      heures: 10,
      nbEtudiant: 5,
      nbEtudiantXHeures: 50,
      totalBrut: 1000,
      totalNet: 800,
    },
    // ...
  ];
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>BPF </h2>
        </div>
      </header>
      <main className="m-10 min-h-[calc(100vh-57px-97px)] flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Bilan pédagogique et financier</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
          <CardFooter>
            <Button>Ajouter</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}

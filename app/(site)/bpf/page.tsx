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
import { getBPFData } from '@/services/bpf.service';

async function getData(): Promise<Data[]> {
  try {
    const data = await getBPFData("/");
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    return [];
  }
}

export default async function BPF() {
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

"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { getAllPricing } from "@/services/pricing.service"; // Import du service
import { columns, Data } from "./columns"; // Assurez-vous que `columns` correspond à la structure de votre tableau

export default function Billing() {
  const [pricingData, setPricingData] = useState<Data[]>([]); // État pour stocker les données de pricing
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPricing = async () => {
      setIsLoading(true);
      try {
        const data = await getAllPricing();

        // Si l'API retourne des champs qui ne correspondent pas aux colonnes attendues
        const formattedData = data.map((pricing: any) => ({
          nom: pricing.name || "", // Correspond au nom attendu
          centre: pricing.formationCenterId || "", // Assurez-vous que ce champ existe dans l'API
          tarif: pricing.price || 0,
          Type: pricing.type || "",
          tarifparheure: pricing.tarifparheure || 0, // S'il y a un champ correspondant
          tjm: pricing.tjm || 0, // Si ce champ est présent
          intermediaire: pricing.intermediaireId || "", // Assurez-vous de la correspondance
        }));

        setPricingData(formattedData);
      } catch (error) {
        console.error("Failed to fetch pricing data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPricing();
  }, []);

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
            <CardTitle>Mes factures</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="center">
              <TabsList>
                <TabsTrigger value="center">Facturation / Centre</TabsTrigger>
                <TabsTrigger value="intermediate">Facturation / Intermédiaire</TabsTrigger>
                <TabsTrigger value="myprice">Mes tarifs</TabsTrigger>
              </TabsList>
              <TabsContent value="center">..........</TabsContent>
              <TabsContent value="intermediate">..........</TabsContent>
              <TabsContent value="myprice">
                {isLoading ? (
                  <p>Chargement des tarifs...</p>
                ) : (
                  <DataTable columns={columns} data={pricingData} />
                )}
              </TabsContent>
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

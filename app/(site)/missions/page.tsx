"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function Missions() {
  const [selectedTab, setSelectedTab] = useState("missions-par-etat");

  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Mes Missions & Contrats</h2>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1 m-10">
        <Card>
          <CardContent>
            <Tabs defaultValue={selectedTab} className="mt-8 px-10">
              <TabsList className="flex justify-center w-fit mx-auto ">
                <TabsTrigger value="missions-par-etat">
                  Missions par État
                </TabsTrigger>
                <TabsTrigger value="toutes-les-missions">
                  Toutes les missions
                </TabsTrigger>
                <TabsTrigger value="tous-les-contrats">
                  Tous les contrats
                </TabsTrigger>
                <TabsTrigger value="compteur-heures-centre">
                  Compteur d'heures / Centre
                </TabsTrigger>
              </TabsList>

              <TabsContent value="missions-par-etat">
                <h3 className="text-xl font-bold text-center mt-8">
                  Suivi des missions par état
                </h3>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                

                  <div className="flex flex-col">
                    <h2 className="mb-4">
                      <span className="inline-block bg-blue-500 bg-opacity-40 text-white text-sm font-semibold py-1 px-3 rounded-full">
                        Pas commencé
                      </span>
                    </h2>
                    <div className="space-y-4">
                      <Skeleton className="h-24 w-full" />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h2 className="mb-4">
                      <span className="inline-block bg-yellow-500 bg-opacity-40 text-white text-sm font-semibold py-1 px-3 rounded-full">
                        En cours
                      </span>
                    </h2>
                    <div className="space-y-4">
                      <Skeleton className="h-24 w-full" />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h2 className="mb-4">
                      <span className="inline-block bg-orange-500 bg-opacity-40 text-white text-sm font-semibold py-1 px-3 rounded-full">
                        Documents à envoyer
                      </span>
                    </h2>
                    <div className="space-y-4">
                      <Skeleton className="h-24 w-full" />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h2 className="mb-4">
                      <span className="inline-block bg-green-500 bg-opacity-40 text-white text-sm font-semibold py-1 px-3 rounded-full">
                        Terminé
                      </span>
                    </h2>
                    <div className="space-y-4">
                      <Skeleton className="h-24 w-full" />
                    </div>
                  </div>
                  
                </div>
              </TabsContent>

              <TabsContent value="toutes-les-missions">
                <h3 className="text-xl font-bold text-center mt-8">
                  Toutes les missions
                </h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                </div>
              </TabsContent>

              <TabsContent value="tous-les-contrats">
                <h3 className="text-xl font-bold text-center mt-8">
                  Tous les contrats
                </h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                </div>
              </TabsContent>

              <TabsContent value="compteur-heures-centre">
                <h3 className="text-xl font-bold text-center mt-8">
                  Compteur d'heures / Centre
                </h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

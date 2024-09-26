"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Tasks() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Tâches</h2>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1 m-10">
        <Card className="w-full">
         
          <CardContent>
            <h3 className="text-xl font-bold text-center mt-8">
              Suivi des tâches
            </h3>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 px-10">
             

              <div className="flex flex-col">
                <h2 className="mb-4">
                  <span className="inline-block bg-gray-700 text-white text-sm font-semibold py-1 px-3 rounded-full">
                  À faire
                  </span>
                </h2>
                <div className="space-y-4">
                  <Skeleton className="h-24 w-full" />
                </div>
              </div>

              <div className="flex flex-col">
                <h2 className="mb-4">
                  <span className="inline-block bg-blue-500 bg-opacity-40 text-white text-sm font-semibold py-1 px-3 rounded-full">
                    En cours
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

            <h3 className="text-xl font-bold text-center mt-8">
              Idées & pensées
            </h3>

            <div className="mt-8 px-10">
            <Skeleton className="h-4 mb-3 w-[400px]" />
            <Skeleton className="h-4 mb-3 w-[400px]" />
          
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

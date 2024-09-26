"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function application() {


  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Tâches</h2>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1 m-10 ">

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Suivi des candidatures</CardTitle>
          </CardHeader>
          <CardContent>

            {" "}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 px-10">
            <div className="flex flex-col">
                <h2 className="mb-4">
                <span className="inline-block bg-gray-700 text-white text-sm font-semibold py-1 px-3 rounded-full">
                Organismes à évaluer
                  </span>
                </h2>
                <div className="space-y-4">
                  <Skeleton className="h-24 w-full" />
                </div>
              </div>

              <div className="flex flex-col">
                <h2 className="mb-4">
                <span className="inline-block bg-red-500 bg-opacity-40 text-white text-sm font-semibold py-1 px-3 rounded-full">
                Je postule
                  </span>
                </h2>
                <div className="space-y-4">
                  <Skeleton className="h-24 w-full" />
                </div>
              </div>

              <div className="flex flex-col">
                <h2 className="mb-4">
                <span className="inline-block bg-yellow-500 bg-opacity-40 text-white text-sm font-semibold py-1 px-3 rounded-full">
                J'ai postulé
                  </span>
                </h2>
                <div className="space-y-4">
                  <Skeleton className="h-24 w-full" />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="mb-4">
                <span className="inline-block bg-blue-500 bg-opacity-40 text-white text-sm font-semibold py-1 px-3 rounded-full">
                Je relance
                  </span>
                </h2>
                <div className="space-y-4">
                  <Skeleton className="h-24 w-full" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

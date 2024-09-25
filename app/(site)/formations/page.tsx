"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getAllFormations } from "@/services/formation.service";

export default function Formations() {
  interface Formation {
    id: number;
    name: string;
    logo: string;
  }

  const [formations, setFormations] = useState<Formation[]>([]);
  const [newFormation, setNewFormation] = useState({ name: "", logo: "" });

  useEffect(() => {
    async function fetchFormations() {
      try {
        const data = await getAllFormations();
        setFormations(data);
        console.log(data);
        console.log("test");
      } catch (error) {
        console.error("Error fetching formations:", error);
        
      }
    }

    fetchFormations();
  }, []);

  const handleAddFormation = () => {
    setFormations([...formations, { ...newFormation, id: formations.length + 1 }]);
    setNewFormation({ name: "", logo: "" });
    
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Organismes de formation</h2>
        </div>
      </header>
      <main className="m-10 min-h-[calc(100vh-57px-97px)] flex-1">
        <h2 className="text-2xl font-bold mb-4">Organismes de formation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {formations.map((formation) => (
            <Card key={formation.id} className="flex flex-col">
              <CardHeader className="flex-1">
                <CardTitle className="truncate" title={formation.name}>
                  {formation.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <img
                  src={formation.logo}
                  alt={`${formation.name} logo`}
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          ))}

          {/* Nouvelle formation */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col items-center justify-center p-6 border rounded-lg cursor-pointer text-center border-dashed border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                <Plus className="w-10 h-10 text-gray-500" />
                <span className="text-gray-500 font-medium">Nouveau</span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Ajouter un organisme de formation</DialogTitle>
              <DialogDescription>
                Remplissez les informations ci-dessous pour ajouter un nouvel organisme de formation.
              </DialogDescription>

              <div className="space-y-4 mt-4">
                <Input
                  placeholder="Nom de l'organisme"
                  value={newFormation.name}
                  onChange={(e) => setNewFormation({ ...newFormation, name: e.target.value })}
                />
                <Input
                  placeholder="Lien du logo"
                  value={newFormation.logo}
                  onChange={(e) => setNewFormation({ ...newFormation, logo: e.target.value })}
                />
              </div>

              <Button onClick={handleAddFormation} className="mt-4">
                Ajouter
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
}
"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Tasks() {
  const [ideas, setIdeas] = useState([
    "Idée 1",
    "Idée 2",
  
  ]);
  const [newIdea, setNewIdea] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddIdea = () => {
    if (newIdea.trim() === "") {
      alert("L'idée ne peut pas être vide.");
      return;
    }
    setIdeas([...ideas, newIdea]);
    setNewIdea("");
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Tâches</h2>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <h3 className="text-xl font-bold text-center mt-8">Suivi des tâches</h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 px-10">
          <div className="flex flex-col">
            <h2 className="mb-4">À faire</h2>
            <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="mb-4">En cours</h2>
            <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="mb-4">Terminé</h2>
            <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-center mt-8">Idées & pensées</h3>

        <div className="mt-8 px-10">
          <ul className="list-disc list-inside">
            {ideas.map((idea, index) => (
              <li key={index}>{idea}</li>
            ))}
          </ul>
        
          <div className="flex justify-start mt-6">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full md:w-auto text-gray-500 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white border-none bg-transparent mb-3">
                  <Plus className="w-4 mr-2" />
                  Nouveau
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Ajouter une idée</DialogTitle>
                <DialogDescription>
                  Entrez une nouvelle idée ou pensée pour l'ajouter à la liste.
                </DialogDescription>
                <div className="space-y-4 mt-4">
                  <Input
                    placeholder="Entrez votre idée"
                    value={newIdea}
                    onChange={(e) => setNewIdea(e.target.value)}
                  />
                  <Button onClick={handleAddIdea}>
                    Ajouter
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
    </div>
  );
}

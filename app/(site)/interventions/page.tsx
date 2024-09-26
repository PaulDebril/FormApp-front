"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "./data-table";
import Calendar from './calendar';
import { getAllInterventions, createIntervention } from '@/services/intervention.service';
import { useState, useEffect } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import toast from "react-hot-toast";
import { columnsThisMonth } from "./columns-thismonth"; // Ajouter les colonnes

export interface Intervention {
  id: string;
  name: string;
  date: string;
  studentNumber: number;
  formationCenterId: string;
  missionId: string;
  subjectId: string;
  courseId: string;
  contactId: string;
  intermediaireId: string;
  pricingId: string;
}

function filterInterventionsThisMonth(interventions: Intervention[]): Intervention[] {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return interventions.filter(intervention => {
    const interventionDate = new Date(intervention.date);
    return (
      interventionDate.getMonth() === currentMonth &&
      interventionDate.getFullYear() === currentYear
    );
  });
}

// Fonction utilitaire pour regrouper les interventions par centre de formation
function groupByFormationCenter(interventions: Intervention[]): { [key: string]: Intervention[] } {
  return interventions.reduce((groups, intervention) => {
    const formationCenterId = intervention.formationCenterId || "Sans centre"; // Si pas de centre, on regroupe dans "Sans centre"
    if (!groups[formationCenterId]) {
      groups[formationCenterId] = [];
    }
    groups[formationCenterId].push(intervention);
    return groups;
  }, {} as { [key: string]: Intervention[] });
}

export default function InterventionsPage() {
  const [interventions, setInterventions] = useState<Intervention[]>([]);
  const [interventionsThisMonth, setInterventionsThisMonth] = useState<Intervention[]>([]);
  const [newIntervention, setNewIntervention] = useState<Partial<Intervention>>({
    name: "",
    date: new Date().toISOString(), // Date par défaut au format ISO
    studentNumber: 0,
    formationCenterId: "",
    missionId: "",
    subjectId: "",
    courseId: "",
    contactId: "",
    intermediaireId: "",
    pricingId: ""
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchInterventions = async () => {
      try {
        const data = await getAllInterventions();
        setInterventions(data); // Remplir le tableau des interventions
        setInterventionsThisMonth(filterInterventionsThisMonth(data)); // Filtrer pour ce mois-ci
      } catch (error) {
        console.error('Erreur lors de la récupération des interventions:', error);
      }
    };

    fetchInterventions();
  }, []);

  const handleAddIntervention = async () => {
    if (!newIntervention.date) {
      // Si aucune date n'est fournie, on utilise la date actuelle comme date par défaut
      newIntervention.date = new Date().toISOString();
    }

    try {
      await createIntervention(newIntervention);
      toast.success("Intervention créée avec succès !");
      setIsDialogOpen(false);

      // Rafraîchir les interventions après ajout
      const data = await getAllInterventions();
      setInterventions(data);
      setInterventionsThisMonth(filterInterventionsThisMonth(data)); // Rafraîchir les données du mois actuel
    } catch (error) {
      toast.error("Erreur lors de la création de l'intervention");
      console.error("Error creating intervention:", error);
    }
  };

  // Regrouper les interventions par centre de formation
  const groupedInterventions = groupByFormationCenter(interventions);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Interventions</h2>
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
                <TabsTrigger value="thismonth">Ce mois-ci</TabsTrigger>
                <TabsTrigger value="bycenter">Par centre</TabsTrigger>
              </TabsList>
              <TabsContent value="calendar">
                <Calendar interventions={interventions} />
              </TabsContent>
              <TabsContent value="thismonth">
                <DataTable columns={columnsThisMonth} data={interventionsThisMonth} />
              </TabsContent>

              <TabsContent value="bycenter">
                <Accordion type="single" collapsible>
                  {Object.entries(groupedInterventions).map(([formationCenterId, interventions]) => (
                    <AccordionItem key={formationCenterId} value={formationCenterId}>
                      <AccordionTrigger>{formationCenterId === "Sans centre" ? "Sans centre" : `Centre: ${formationCenterId}`}</AccordionTrigger>
                      <AccordionContent>
                        <DataTable columns={columnsThisMonth} data={interventions} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </CardContent>

          {/* Bouton Ajouter une intervention dans le CardFooter */}
          <CardFooter>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => setIsDialogOpen(true)}>Ajouter une intervention</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Ajouter une nouvelle intervention</DialogTitle>
                <DialogDescription>
                  Remplissez les informations ci-dessous pour créer une nouvelle intervention.
                </DialogDescription>

                <div className="space-y-4 mt-4">
                  <Input
                    placeholder="Nom de l'intervention"
                    value={newIntervention.name}
                    onChange={(e) => setNewIntervention({ ...newIntervention, name: e.target.value })}
                  />
                  <Input
                    type="datetime-local"
                    placeholder="Date"
                    value={newIntervention.date?.split('.')[0]} // Assurez-vous que la date est correcte pour l'input datetime-local
                    onChange={(e) => setNewIntervention({ ...newIntervention, date: new Date(e.target.value).toISOString() })}
                  />
                  {/* Ajouter d'autres champs similaires pour les autres données */}
                </div>

                <Button onClick={handleAddIntervention} className="mt-4">
                  Ajouter
                </Button>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}

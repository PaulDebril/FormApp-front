"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Intermediate() {
  const [newCard, setNewCard] = useState({ name: "" });
  const [cards, setCards] = useState([
    { id: 1, name: "Intervention A" },
    { id: 2, name: "Intervention B" },
    { id: 3, name: "Intervention C" },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Groupe A",
      cards: [
        { id: 1, name: "Card 1" },
        { id: 2, name: "Card 2" },
      ],
    },
  ]);
  const [isGroupDialogOpen, setIsGroupDialogOpen] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState(null);
  const handleAddCard = () => {
    if (newCard.name.trim() === "") {
      alert("Le nom ne peut pas être vide.");
      return;
    }

    setGroups(
      groups.map((group) => {
        if (group.id === activeGroupId) {
          return {
            ...group,
            cards: [
              ...group.cards,
              { id: group.cards.length + 1, name: newCard.name },
            ],
          };
        }
        return group;
      })
    );

    setNewCard({ name: "" });
    setIsDialogOpen(false);
  };

  const handleAddGroup = () => {
    if (newGroupName.trim() === "") {
      alert("Le nom du groupe ne peut pas être vide.");
      return;
    }
    setGroups([
      ...groups,
      { id: groups.length + 1, name: newGroupName, cards: [] },
    ]);
    setNewGroupName("");
    setIsGroupDialogOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Intermédiaire</h2>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1 m-10">
        <Card>
          <CardContent>
            <h3 className="text-xl font-bold text-center mt-8">
              Intermédiaires
            </h3>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4 px-10">
              {cards.map((card) => (
                <Dialog>
                  <DialogTrigger>
                    <Card
                      key={card.id}
                      className="flex flex-col items-center justify-center p-4 text-center"
                    >
                      <CardHeader className="flex-1">
                        <CardTitle className="truncate" title={card.name}>
                          {card.name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle> {card.name}</DialogTitle>
                    <DialogDescription>
                      {" "}
                      <Skeleton className="h-10 w-full" />
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              ))}

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <div className="flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer text-center border-dashed border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 ">
                    <Plus className="w-6 h-6 text-gray-500" />
                    <span className="text-gray-500 ">Nouveau</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Ajouter une nouvelle intervention</DialogTitle>
                  <DialogDescription>
                    Remplissez les informations ci-dessous pour ajouter une
                    nouvelle intervention.
                  </DialogDescription>

                  <div className="space-y-4 mt-4">
                    <Input
                      placeholder="Nom de la carte"
                      value={newCard.name}
                      onChange={(e) =>
                        setNewCard({ ...newCard, name: e.target.value })
                      }
                    />
                  </div>

                  <Button onClick={handleAddCard} className="mt-4">
                    Ajouter
                  </Button>
                </DialogContent>
              </Dialog>
            </div>

            <h3 className="text-xl font-bold text-center mt-12">
              Centres par intermédiaire
            </h3>

            <div className="mt-8 px-10">
              <Accordion
                type="single"
                collapsible
                defaultValue={`group-${groups[0]?.id}`}
              >
                {groups.map((group) => (
                  <AccordionItem key={group.id} value={`group-${group.id}`}>
                    <AccordionTrigger>{group.name}</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {group.cards.map((card) => (
                          <Dialog>
                            <DialogTrigger>
                              {" "}
                              <Card
                                key={card.id}
                                className="flex flex-col items-center justify-center p-4 text-center"
                              >
                                <CardHeader className="flex-1">
                                  <CardTitle
                                    className="truncate"
                                    title={card.name}
                                  >
                                    {card.name}
                                  </CardTitle>
                                </CardHeader>
                              </Card>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogTitle> {card.name}</DialogTitle>
                              <DialogDescription>
                                {" "}
                                <Skeleton className="h-10 w-full" />
                              </DialogDescription>
                            </DialogContent>{" "}
                          </Dialog>
                        ))}

                        <Dialog
                          open={isDialogOpen}
                          onOpenChange={setIsDialogOpen}
                        >
                          <DialogTrigger asChild>
                            <div
                              className="flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer text-center border-dashed border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 "
                              onClick={() => {
                                setActiveGroupId(group.id);
                                setIsDialogOpen(true);
                              }}
                            >
                              <Plus className="w-6 h-6 text-gray-500" />
                              <span className="text-gray-500 font-medium">
                                Nouveau{" "}
                              </span>
                            </div>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogTitle>
                              Ajouter une nouvelle intervention
                            </DialogTitle>
                            <DialogDescription>
                              Remplissez les informations ci-dessous pour
                              ajouter une nouvelle intervention dans{" "}
                              {group.name}.
                            </DialogDescription>

                            <div className="space-y-4 mt-4">
                              <Input
                                placeholder="Nom de la carte"
                                value={newCard.name}
                                onChange={(e) =>
                                  setNewCard({
                                    ...newCard,
                                    name: e.target.value,
                                  })
                                }
                              />
                            </div>

                            <Button onClick={handleAddCard} className="mt-4">
                              Ajouter
                            </Button>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-8 px-10">
              <Dialog
                open={isGroupDialogOpen}
                onOpenChange={setIsGroupDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button>Nouveau groupe</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Ajouter un nouveau groupe</DialogTitle>
                  <DialogDescription>
                    Entrez le nom du nouveau groupe ci-dessous.
                  </DialogDescription>

                  <div className="space-y-4 mt-4">
                    <Input
                      placeholder="Nom du groupe"
                      value={newGroupName}
                      onChange={(e) => setNewGroupName(e.target.value)}
                    />
                  </div>

                  <Button onClick={handleAddGroup} className="mt-4">
                    Ajouter le groupe
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

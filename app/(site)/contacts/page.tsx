
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { PanelsTopLeft, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Contact = {
  id: number;
  name: string;
  role: string;
  photo: string;
  phone: string;
  email: string;
  linkedin: string;
  comments: string;
  schoolId: number; // Lien vers l'école
};

type School = {
  id: number;
  name: string;
};

export default function Contacts() {
  const [schools, setSchools] = useState<School[]>([
    { id: 1, name: "CESI" },
    { id: 2, name: "OpenClassrooms" },
  ]);

  const [contacts, setContacts] = useState<Contact[]>([]);

  const [newSchool, setNewSchool] = useState<School>({ id: 0, name: "" });
  const [newContact, setNewContact] = useState<Contact>({
    id: 0,
    name: "",
    role: "",
    photo: "",
    phone: "",
    email: "",
    linkedin: "",
    comments: "",
    schoolId: 0,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeSchoolId, setActiveSchoolId] = useState<number | null>(null);

  // Ajouter un nouvel établissement (école)
  const handleAddSchool = () => {

    if (newSchool.name.trim() === "") {
      alert("Le nom de l'établissement est requis.");
      return;
    }
    setSchools([...schools, { ...newSchool, id: schools.length + 1 }]);
    setNewSchool({ id: 0, name: "" });
  };

  // Ajouter un nouveau contact
  const handleAddContact = () => {

  
    setContacts([
      ...contacts,
      { ...newContact, id: contacts.length + 1, schoolId: activeSchoolId! },
    ]);
    setNewContact({
      id: 0,
      name: "",
      role: "",
      photo: "",
      phone: "",
      email: "",
      linkedin: "",
      comments: "",
      schoolId: 0,
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <PanelsTopLeft className="w-6 h-6 mr-3" />
            <span className="font-bold">shadcn/ui sidebar</span>
            <span className="sr-only">shadcn/ui sidebar</span>
          </Link>
        </div>
      </header>

      <main className="flex flex-col flex-grow p-6 bg-gray-100 dark:bg-gray-900">
        {/* Bouton pour ajouter un nouvel établissement */}
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-xl font-bold">Mes établissements</h4>
          <div className="flex items-center">
            <Input
              placeholder="Nom de l'établissement"
              value={newSchool.name}
              onChange={(e) =>
                setNewSchool({
                  ...newSchool,
                  name: e.target.value,
                })
              }
              className="mr-4"
            />
            <Button onClick={handleAddSchool}>
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un établissement
            </Button>
          </div>
        </div>

        <div className="flex flex-col flex-grow">
          <Accordion type="single" collapsible className="flex-grow w-full">
            {schools.map((school) => (
              <AccordionItem key={school.id} value={`item-${school.id}`}>
                <AccordionTrigger>{school.name}</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Affichage des contacts liés à l'école */}
                    {contacts
                      .filter((contact) => contact.schoolId === school.id)
                      .map((contact) => (
                        <Card key={contact.id}>
                          <CardHeader>
                            <CardTitle>{contact.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <img
                              src={contact.photo}
                              alt={`${contact.name} photo`}
                              className="w-full h-32 object-contain"
                            />
                          </CardContent>
                        </Card>
                      ))}

                    {/* Carte "Nouveau contact" pour ajouter un contact dans cette école */}
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <div
                          className="flex flex-col items-center justify-center p-6 border rounded-lg cursor-pointer text-center border-dashed border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
                          onClick={() => setActiveSchoolId(school.id)}
                        >
                          <Plus className="w-10 h-10 text-gray-500" />
                          <span className="text-gray-500 font-medium">
                            Nouveau contact
                          </span>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogTitle>Ajouter un contact</DialogTitle>
                        <DialogDescription>
                          Remplissez les informations pour ajouter un nouveau
                          contact à {school.name}.
                        </DialogDescription>
                        <div className="space-y-4 mt-4">
                          <Input
                            placeholder="Nom du contact"
                            value={newContact.name}
                            onChange={(e) =>
                              setNewContact({
                                ...newContact,
                                name: e.target.value,
                              })
                            }
                          />
                          <Input
                            placeholder="Rôle"
                            value={newContact.role}
                            onChange={(e) =>
                              setNewContact({
                                ...newContact,
                                role: e.target.value,
                              })
                            }
                          />
                          <Input
                            placeholder="Lien de la photo"
                            value={newContact.photo}
                            onChange={(e) =>
                              setNewContact({
                                ...newContact,
                                photo: e.target.value,
                              })
                            }
                          />
                          <Input
                            placeholder="Téléphone"
                            value={newContact.phone}
                            onChange={(e) =>
                              setNewContact({
                                ...newContact,
                                phone: e.target.value,
                              })
                            }
                          />
                          <Input
                            placeholder="Email"
                            value={newContact.email}
                            onChange={(e) =>
                              setNewContact({
                                ...newContact,
                                email: e.target.value,
                              })
                            }
                          />
                          <Input
                            placeholder="LinkedIn"
                            value={newContact.linkedin}
                            onChange={(e) =>
                              setNewContact({
                                ...newContact,
                                linkedin: e.target.value,
                              })
                            }
                          />
                          <Input
                            placeholder="Commentaires"
                            value={newContact.comments}
                            onChange={(e) =>
                              setNewContact({
                                ...newContact,
                                comments: e.target.value,
                              })
                            }
                          />
                          <Button onClick={handleAddContact}>
                            Ajouter le contact
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
}

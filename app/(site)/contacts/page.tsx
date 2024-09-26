"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { School, AtSign, Phone, UserCog } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type Contact = {
  id: number;
  name: string;
  role: string;
  photo: string;
  phone: string;
  email: string;
  linkedin: string;
  comments: string;
  schoolId: number;
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

  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Marie Caron",
      role: "Ingénieure pédagogique",
      photo: "https://placehold.co/300x300",
      phone: "123-456-7890",
      email: "marie@example.com",
      linkedin: "",
      comments: "",
      schoolId: 1,
    },
    {
      id: 2,
      name: "Julient Dupont",
      role: "",
      photo: "https://placehold.co/300x300",
      phone: "123-456-7890",
      email: "julien@example.com",
      linkedin: "",
      comments: "",
      schoolId: 2,
    },
  ]);
  const [isDialogOpenSchool, setIsDialogOpenSchool] = useState(false);

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

  const handleAddSchool = () => {
    if (newSchool.name.trim() === "") {
      alert("Le nom de l'établissement est requis.");
      return;
    }
    setSchools([...schools, { ...newSchool, id: schools.length + 1 }]);
    setNewSchool({ id: 0, name: "" });
  };

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
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Contacts </h2>
        </div>
      </header>

      <main className="m-10 min-h-[calc(100vh-57px-97px)] flex-1">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
              <h4 className="text-xl font-bold">Mes établissements</h4>
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
                <Dialog open={isDialogOpenSchool} onOpenChange={setIsDialogOpenSchool}>
                  <DialogTrigger>
                    <Button className="w-full md:w-auto">
                      <Plus className="w-4 h-4 mr-2" />
                      Ajouter un établissement
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Ajouter un établissement</DialogTitle>
                    <DialogDescription>
                      <Input
                        placeholder="Nom de l'établissement"
                        className="w-full md:w-auto"
                        value={newSchool.name}
                        onChange={(e) =>
                          setNewSchool({ ...newSchool, name: e.target.value })
                        }
                      />
                      <Button
                      className="mt-4 "
                        onClick={() => {
                          handleAddSchool();
                          setIsDialogOpenSchool(false); 
                        }}
                      >
                        Valider
                      </Button>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <Tabs defaultValue="byCenter">
              <TabsList>
                <TabsTrigger value="byCenter">Par centre</TabsTrigger>
                <TabsTrigger value="all">Tous</TabsTrigger>
              </TabsList>

              <TabsContent value="byCenter" className="w-full">
                <Accordion
                  type="multiple"
                  defaultValue={schools.map((school) => `item-${school.id}`)}
                  className="w-full"
                >
                  {schools.map((school) => (
                    <AccordionItem key={school.id} value={`item-${school.id}`}>
                      <AccordionTrigger>{school.name}</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                          {contacts
                            .filter((contact) => contact.schoolId === school.id)
                            .map((contact) => (
                              <Dialog>
                                <DialogTrigger>
                                  <Card key={contact.id} className="border ">
                                    <CardHeader>
                                      <CardTitle className="truncate">
                                        {contact.name}
                                      </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <img
                                        src={contact.photo}
                                        alt={`${contact.name} photo`}
                                        className="w-full h-32 object-cover"
                                      />
                                    </CardContent>
                                  </Card>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogTitle>{contact.name}</DialogTitle>
                                  <DialogDescription>
                                    <Skeleton className="h-24 w-full" />
                                    <Skeleton className="h-3 mt-3 w-full" />
                                    <Skeleton className="h-3 mt-3 w-full" />
                                  </DialogDescription>
                                </DialogContent>
                              </Dialog>
                            ))}

                          <Dialog
                            open={isDialogOpen}
                            onOpenChange={setIsDialogOpen}
                          >
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
                                Remplissez les informations pour ajouter un
                                nouveau contact à {school.name}.
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
              </TabsContent>

              <TabsContent value="all" className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {contacts.map((contact) => (
                    <Dialog>
                      <DialogTrigger>
                        <Card key={contact.id} className="border">
                          <CardHeader>
                            <CardTitle className="truncate">
                              {contact.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <img
                              src={contact.photo}
                              alt={`${contact.name} photo`}
                              className="w-full h-32 object-cover"
                            />

                            <div className="mt-2 truncate flex items-center space-x-2">
                              <UserCog className="w-4 h-4" />
                              <p>{contact.role}</p>
                            </div>

                            <div className="truncate flex items-center space-x-2">
                              <AtSign className="w-4 h-4" />
                              <p>{contact.email}</p>
                            </div>

                            <div className="truncate flex items-center space-x-2">
                              <Phone className="w-4 h-4" />
                              <p>{contact.phone}</p>
                            </div>

                            <div className="truncate flex items-center space-x-2">
                              <School className="w-4 h-4" />
                              <p className="truncate">
                                {
                                  schools.find(
                                    (school) => school.id === contact.schoolId
                                  )?.name
                                }
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogTitle>{contact.name}</DialogTitle>
                        <DialogDescription>
                          <Skeleton className="h-24 w-full" />
                          <Skeleton className="h-3 mt-3 w-full" />
                          <Skeleton className="h-3 mt-3 w-full" />
                          <Skeleton className="h-3 mt-3 w-full" />
                          <Skeleton className="h-3 mt-3 w-full" />
                        </DialogDescription>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

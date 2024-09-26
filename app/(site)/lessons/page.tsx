"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Plus, Book } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Category = {
  id: number;
  name: string;
};

type Lesson = {
  id: number;
  name: string;
  idCategory: number;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Lessons() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Marketing" },
    { id: 2, name: "Droit" },
  ]);

  const [lessons, setLessons] = useState<Lesson[]>([
    { id: 1, name: "Marketing digital", idCategory: 1 },
    { id: 2, name: "Droit numérique", idCategory: 2 },
  ]);

  const [newCategory, setNewCategory] = useState<Category>({ id: 0, name: "" });
  const [newLesson, setNewLesson] = useState<Lesson>({
    id: 0,
    name: "",
    idCategory: 0,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLessonDialogOpen, setIsLessonDialogOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  // Ajouter un nouveau cours (catégorie)
  const handleAddCategory = () => {
    if (newCategory.name.trim() === "") {
      alert("Le nom de la catégorie est requis");
      return;
    }
    setCategories([
      ...categories,
      { ...newCategory, id: categories.length + 1 },
    ]);
    setNewCategory({ id: 0, name: "" });
    setIsDialogOpen(false); // Fermer le dialog
  };

  // Ajouter une nouvelle leçon dans une catégorie
  const handleAddLesson = () => {
    if (newLesson.name.trim() === "") {
      alert("Le nom de la leçon est requis");
      return;
    }
    if (activeCategoryId === null) {
      alert("Veuillez sélectionner une catégorie.");
      return;
    }

    setLessons([
      ...lessons,
      { ...newLesson, id: lessons.length + 1, idCategory: activeCategoryId },
    ]);
    setNewLesson({ id: 0, name: "", idCategory: 0 });
    setIsLessonDialogOpen(false); // Fermer le dialog
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Mes cours</h2>
        </div>
      </header>

      <main className="m-10 min-h-[calc(100vh-57px-97px)] flex-1">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Mes cours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-bold">Liste des cours</h4>

              {/* Dialog pour ajouter une nouvelle catégorie */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full md:w-auto">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter une catégorie
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Ajouter un nouveau cours</DialogTitle>
                  <DialogDescription>
                    Entrez le nom du nouveau cours pour l&apos;ajouter à la liste.
                  </DialogDescription>
                  <div className="space-y-4 mt-4">
                    <Input
                      placeholder="Nom du cours"
                      value={newCategory.name}
                      onChange={(e) =>
                        setNewCategory({
                          ...newCategory,
                          name: e.target.value,
                        })
                      }
                    />
                    <Button onClick={handleAddCategory}>
                      Ajouter le cours
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Accordion
              type="multiple"
              defaultValue={categories.map((category) => `item-${category.id}`)}
              className="w-full"
            >
              {categories.map((category) => (
                <AccordionItem key={category.id} value={`item-${category.id}`}>
                  <AccordionTrigger>
                    <div className="flex justify-between items-center w-full">
                      <span
                        className="inline-block bg-opacity-40 text-white text-sm font-semibold py-1 px-3 rounded-full"
                        style={{ backgroundColor: getRandomColor() }}
                      >
                        {category.name}
                      </span>

                      {/* Bouton "Nouveau" dans l&apos;accordéon pour ajouter une leçon */}
                      <Dialog
                        open={isLessonDialogOpen && activeCategoryId === category.id}
                        onOpenChange={setIsLessonDialogOpen}
                      >
                        <DialogTrigger asChild>
                          <Button
                            className="text-gray-500 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white border-none bg-transparent"
                            onClick={() => setActiveCategoryId(category.id)}
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Nouveau
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogTitle>Ajouter une nouvelle leçon</DialogTitle>
                          <DialogDescription>
                            Entrez le nom de la leçon pour l&apos;ajouter à {category.name}.
                          </DialogDescription>
                          <div className="space-y-4 mt-4">
                            <Input
                              placeholder="Nom de la leçon"
                              value={newLesson.name}
                              onChange={(e) =>
                                setNewLesson({
                                  ...newLesson,
                                  name: e.target.value,
                                })
                              }
                            />
                            <Button onClick={handleAddLesson}>
                              Ajouter la leçon
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {lessons
                      .filter((lesson) => lesson.idCategory === category.id)
                      .map((lesson) => (
                        <div
                          key={lesson.id}
                          className="mt-2 truncate flex items-center space-x-2"
                        >
                          <Book className="w-4 h-4" />
                          <p>{lesson.name}</p>
                        </div>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

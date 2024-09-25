"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getAllFormations, createFormation, deleteFormation, editFormation } from "@/services/formation.service";
import toast, { Toaster } from 'react-hot-toast';

export default function Formations() {
  interface Formation {
    id: number;
    name: string;
    address: string;
    phone: string;
    documents: string[];
    logo: string;
  }

  const [formations, setFormations] = useState<Formation[]>([]);
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);
  const [newFormation, setNewFormation] = useState({
    name: "",
    address: "",
    phone: "",
    documents: [""],
    logo: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchFormations() {
      try {
        const data = await getAllFormations();
        setFormations(data);
      } catch (error) {
        toast.error("Erreur lors de la récupération des formations");
        console.error("Error fetching formations:", error);
      }
    }

    fetchFormations();
  }, []);

  const handleAddFormation = async () => {
    setIsLoading(true);
    try {
      const addedFormation = await createFormation(newFormation);
      setFormations([...formations, addedFormation]);
      setNewFormation({ name: "", address: "", phone: "", documents: [""], logo: "" });
      toast.success("Formation ajoutée avec succès !");
    } catch (error) {
      toast.error("Erreur lors de l'ajout de la formation");
      console.error("Error creating formation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditFormation = async () => {
    if (selectedFormation) {
      setIsLoading(true);
      try {
        const updatedFormation = await editFormation(selectedFormation.id.toString(), selectedFormation);
        setFormations(formations.map(f => (f.id === updatedFormation.id ? updatedFormation : f)));
        setSelectedFormation(null); // Close the modal
        toast.success("Formation modifiée avec succès !");
      } catch (error) {
        toast.error("Erreur lors de la modification de la formation");
        console.error("Error editing formation:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleDeleteFormation = async () => {
    if (selectedFormation) {
      setIsLoading(true);
      try {
        await deleteFormation(selectedFormation.id.toString());
        setFormations(formations.filter(f => f.id !== selectedFormation.id));
        setSelectedFormation(null); // Close the modal
        toast.success("Formation supprimée avec succès !");
      } catch (error) {
        toast.error("Erreur lors de la suppression de la formation");
        console.error("Error deleting formation:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleFormationClick = (formation: Formation) => {
    setSelectedFormation(formation);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" />
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Organismes de formation</h2>
        </div>
      </header>
      <main className="m-10 min-h-[calc(100vh-57px-97px)] flex-1">
        <h2 className="text-2xl font-bold mb-4">Organismes de formation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {formations.map((formation) => (
            <Card key={formation.id} className="flex flex-col cursor-pointer" onClick={() => handleFormationClick(formation)}>
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
                <label htmlFor="name">Nom de l'organisme</label>
                <Input
                  id="name"
                  placeholder="Nom de l'organisme"
                  value={newFormation.name}
                  onChange={(e) => setNewFormation({ ...newFormation, name: e.target.value })}
                />

                <label htmlFor="address">Adresse</label>
                <Input
                  id="address"
                  placeholder="Adresse"
                  value={newFormation.address}
                  onChange={(e) => setNewFormation({ ...newFormation, address: e.target.value })}
                />

                <label htmlFor="phone">Téléphone</label>
                <Input
                  id="phone"
                  placeholder="Téléphone"
                  value={newFormation.phone}
                  onChange={(e) => setNewFormation({ ...newFormation, phone: e.target.value })}
                />

                <label htmlFor="documents">Lien du document</label>
                <Input
                  id="documents"
                  placeholder="Lien du document"
                  value={newFormation.documents[0]}
                  onChange={(e) => setNewFormation({ ...newFormation, documents: [e.target.value] })}
                />

                <label htmlFor="logo">Lien du logo</label>
                <Input
                  id="logo"
                  placeholder="Lien du logo"
                  value={newFormation.logo}
                  onChange={(e) => setNewFormation({ ...newFormation, logo: e.target.value })}
                />
              </div>

              <Button onClick={handleAddFormation} className="mt-4" disabled={isLoading}>
                {isLoading ? 'Ajout en cours...' : 'Ajouter'}
              </Button>
            </DialogContent>
          </Dialog>
        </div>

        {/* Modal pour voir et modifier les détails d'une formation */}
        {selectedFormation && (
          <Dialog open={!!selectedFormation} onOpenChange={() => setSelectedFormation(null)}>
            <DialogContent>
              <DialogTitle>Détails de la formation</DialogTitle>
              <DialogDescription>
                Vous pouvez modifier les informations ci-dessous ou supprimer l'organisme de formation.
              </DialogDescription>

              <div className="space-y-4 mt-4">
                <label htmlFor="edit-name">Nom de l'organisme</label>
                <Input
                  id="edit-name"
                  placeholder="Nom de l'organisme"
                  value={selectedFormation.name}
                  onChange={(e) => setSelectedFormation({ ...selectedFormation, name: e.target.value })}
                />

                <label htmlFor="edit-address">Adresse</label>
                <Input
                  id="edit-address"
                  placeholder="Adresse"
                  value={selectedFormation.address}
                  onChange={(e) => setSelectedFormation({ ...selectedFormation, address: e.target.value })}
                />

                <label htmlFor="edit-phone">Téléphone</label>
                <Input
                  id="edit-phone"
                  placeholder="Téléphone"
                  value={selectedFormation.phone}
                  onChange={(e) => setSelectedFormation({ ...selectedFormation, phone: e.target.value })}
                />

                <label htmlFor="edit-documents">Lien du document</label>
                <Input
                  id="edit-documents"
                  placeholder="Lien du document"
                  value={selectedFormation.documents[0]}
                  onChange={(e) => setSelectedFormation({ ...selectedFormation, documents: [e.target.value] })}
                />

                <label htmlFor="edit-logo">Lien du logo</label>
                <Input
                  id="edit-logo"
                  placeholder="Lien du logo"
                  value={selectedFormation.logo}
                  onChange={(e) => setSelectedFormation({ ...selectedFormation, logo: e.target.value })}
                />
              </div>

              <div className="mt-4 flex justify-end space-x-4">
                <Button onClick={handleDeleteFormation} variant="destructive" disabled={isLoading}>
                  {isLoading ? 'Suppression...' : 'Supprimer'}
                </Button>
                <Button onClick={handleEditFormation} disabled={isLoading}>
                  {isLoading ? 'Modification...' : 'Modifier'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </main>
    </div>
  );
}

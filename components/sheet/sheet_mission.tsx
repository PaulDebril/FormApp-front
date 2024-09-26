"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { CalendarIcon } from "@radix-ui/react-icons";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { DrawingPinIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "@radix-ui/react-icons";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadiobuttonIcon } from "@radix-ui/react-icons";
import { Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from "react";
import { format } from "date-fns";

interface SheetComponentProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    name: string;
    status: string;
    center: string;
    contract: string;
    facture: string;
    docs: string;
    startdate: string;
    enddate: string;
    totalinterventions: string;
    totalhours: string;
    totalca: string;
    comments?: string; // Champ facultatif
  } | null;
  onUpdateItem: (updatedItem: any) => void; // Fonction pour sauvegarder les modifications
}

export default function SheetMissionsComponent({
  isOpen,
  onClose,
  item,
  onUpdateItem,
}: SheetComponentProps) {
  const [editableItem, setEditableItem] = React.useState(item);
  const [date, setDate] = React.useState<Date | null>(
    item ? new Date(item.startdate) : null
  );

  React.useEffect(() => {
    if (item) {
      setEditableItem(item);
    }
  }, [item]);

  const handleSave = () => {
    if (editableItem) {
      const updatedItem = {
        ...editableItem,
        date: date ? format(date, "yyyy-MM-dd") : null,
      };
      onUpdateItem(updatedItem);
      onClose();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-1/2 sm:max-w-[2000px] space-between overflow-y-auto">
        {/* Titre */}
        <div className="flex items-center space-x-4 mb-10">
          <DrawingPinIcon className="w-6 h-6" />
          <h1 className="text-2xl font-bold">{editableItem?.name}</h1>
        </div>

        {/* Etat */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
            <div className="flex items-center space-x-4">
                <RadiobuttonIcon className="w-4 h-4" />
                <span className="text-sm text-gray-500">Etat</span>
            </div>            
            <Select
              value={editableItem?.status}
              onValueChange={(value) => setEditableItem((prev) => prev && { ...prev, status: value })}
            >
                <SelectTrigger className="w-2/4 p-2 border border-gray-300 rounded-md">
                    <SelectValue placeholder="État" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Pas commencé"><span className="rounded-full bg-gray-500 text-white px-2 py-1">Pas commencé</span></SelectItem>
                    <SelectItem value="En cours"><span className="rounded-full bg-blue-500 text-white px-2 py-1">En cours</span></SelectItem>
                    <SelectItem value="Terminé"><span className="rounded-full bg-green-500 text-white px-2 py-1">Terminé</span></SelectItem>
                </SelectContent>
            </Select>
        </div>

        {/* Centre */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <HomeIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Centre</span>
          </div>
          <input
            type="text"
            value={editableItem?.center || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, center: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Contrat */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <HomeIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Contrat</span>
          </div>
          <input
            type="text"
            value={editableItem?.contract || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, contract: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Factures */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <ArrowTopRightIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Formation</span>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="file">Fichiers</Label>
            <Input id="file" type="file" />
        </div>
        </div>

        {/* Docs supp */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <ArrowTopRightIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Documents supplémentaires</span>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="file">Documents</Label>
            <Input id="file" type="file" />
        </div>
        </div>

        {/* Date de début */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Date de début</span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-2/4 justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "PPP") : <span>Sélectionnez une date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date ?? undefined}
                onSelect={(day) => setDate(day ?? null)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Date de fin */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Date de fin</span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-2/4 justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "PPP") : <span>Sélectionnez une date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date ?? undefined}
                onSelect={(day) => setDate(day ?? null)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Total interventions */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <HomeIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Total Interventions</span>
          </div>
          <input
            type="number"
            value={editableItem?.totalinterventions || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, totalinterventions: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Total heures */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <HomeIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Total Heures</span>
          </div>
          <input
            type="number"
            value={editableItem?.totalhours || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, totalhours: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Total CA */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <HomeIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Total CA</span>
          </div>
          <input
            type="number"
            value={editableItem?.totalca || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, totalca: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Commentaires */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <ChatBubbleIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Commentaires</span>
          </div>
          <textarea
            value={editableItem?.comments || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, comments: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Bouton Sauvegarder */}
        <div className="flex items-center space-x-4 mt-4">
          <Button onClick={handleSave} className="bg-blue-500 text-white">
            Sauvegarder
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

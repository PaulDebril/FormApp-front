// components/SheetComponent.tsx

"use client"


import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import * as React from "react"
import { format } from "date-fns"

interface SheetComponentProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    title: string;
    status: string;
    dueDate: string;
    importance: string;
    mission: string;
  } | null;
  onUpdateItem: (updatedItem: any) => void; // Fonction pour sauvegarder les modifications
}

export default function SheetComponent({ isOpen, onClose, item, onUpdateItem }: SheetComponentProps) {
  const [editableItem, setEditableItem] = React.useState(item);
  const [date, setDate] = React.useState<Date | null>(item ? new Date(item.dueDate) : null);

  React.useEffect(() => {
    if (item) {
      setEditableItem(item);
      setDate(item.dueDate ? new Date(item.dueDate) : null);
    }
  }, [item]);

  const handleSave = () => {
    if (editableItem) {
      const updatedItem = {
        ...editableItem,
        dueDate: date ? format(date, "yyyy-MM-dd") : null,
      };
      onUpdateItem(updatedItem);
      onClose();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-1/2 sm:max-w-[2000px] space-between">
        <h1 className="text-lg font-bold">{editableItem?.title}</h1>

        {/* Etat */}
        <div className="flex items-center space-x-4 mt-4">
            <span className="text-sm text-gray-500">État</span>
            <Select
              value={editableItem?.status}
              onValueChange={(value) => setEditableItem((prev) => prev && { ...prev, status: value })}
            >
                <SelectTrigger className="w-[180px] p-2 border border-gray-300 rounded-md">
                    <SelectValue placeholder="État" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Pas commencé">Pas commencé</SelectItem>
                    <SelectItem value="En cours">En cours</SelectItem>
                    <SelectItem value="Terminé">Terminé</SelectItem>
                </SelectContent>
            </Select>
        </div>

        {/* Date d'échéance */}
        <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-4">
                <CalendarIcon className="w-4 h-4" />
                <span className="text-sm text-gray-500">Date d'échéance</span>
            </div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
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

        {/* Importance */}
        <div className="flex items-center space-x-4 mt-4">
            <span className="text-sm text-gray-500">Importance</span>
            <Select
              value={editableItem?.importance}
              onValueChange={(value) => setEditableItem((prev) => prev && { ...prev, importance: value })}
            >
                <SelectTrigger className="w-[180px] p-2 border border-gray-300 rounded-md">
                    <SelectValue placeholder="Importance" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Importance haute">Importance haute</SelectItem>
                    <SelectItem value="Importance moyenne">Importance moyenne</SelectItem>
                    <SelectItem value="Importance basse">Importance basse</SelectItem>
                </SelectContent>
            </Select>
        </div>

        {/* Mission */}
        <div className="flex items-center space-x-4 mt-4">
            <span className="text-sm text-gray-500">Mission</span>
            <input
              type="text"
              value={editableItem?.mission || ""}
              onChange={(e) => setEditableItem((prev) => prev && { ...prev, mission: e.target.value })}
              className="w-[180px] p-2 border border-gray-300 rounded-md"
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

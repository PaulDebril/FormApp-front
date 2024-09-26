// components/SheetComponent.tsx

"use client"


import { Sheet, SheetContent } from "@/components/ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { CalendarIcon } from "@radix-ui/react-icons"
import { DoubleArrowUpIcon } from "@radix-ui/react-icons"
import { ClipboardIcon } from "@radix-ui/react-icons";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { RadiobuttonIcon } from "@radix-ui/react-icons";
import { DrawingPinIcon } from "@radix-ui/react-icons";
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
    comments: string;
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
        <div className="flex items-center space-x-4 mb-10">
            <DrawingPinIcon className="w-6 h-6" />
            <h1 className="text-2xl font-bold">{editableItem?.title}</h1>
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

        {/* Date d'échéance */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
            <div className="flex items-center space-x-4">
                <CalendarIcon className="w-4 h-4" />
                <span className="text-sm text-gray-500">Date d'échéance</span>
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
                      onSelect={(day: any) => setDate(day ?? null)}
                      initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>

        {/* Importance */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
            <div className="flex items-center space-x-4">
                <DoubleArrowUpIcon className="w-4 h-4" />
                <span className="text-sm text-gray-500">Importance</span>
            </div>
            <Select
              value={editableItem?.importance}
              onValueChange={(value) => setEditableItem((prev) => prev && { ...prev, importance: value })}
            >
                <SelectTrigger className="w-2/4 p-2 border border-gray-300 rounded-md">
                    <SelectValue placeholder="Importance" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Importance haute"><span className="rounded-full bg-red-500 text-white px-2 py-1">Importance haute</span></SelectItem>
                    <SelectItem value="Importance moyenne"><span className="rounded-full bg-yellow-500 text-white px-2 py-1">Importance moyenne</span></SelectItem>
                    <SelectItem value="Importance basse"><span className="rounded-full bg-green-500 text-white px-2 py-1">Importance basse</span></SelectItem>
                </SelectContent>
            </Select>
        </div>

        {/* Mission */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
           <div className="flex items-center space-x-4">
                <ClipboardIcon className="w-4 h-4" />
                <span className="text-sm text-gray-500">Mission</span>
            </div>       
            <input
              type="text"
              value={editableItem?.mission || ""}
              onChange={(e) => setEditableItem((prev) => prev && { ...prev, mission: e.target.value })}
              className="w-2/4 p-2 border border-gray-300 rounded-md"
            />
        </div>

        <div className="flex items-center space-x-4 mt-4 justify-between">
           <div className="flex items-center space-x-4">
                <ChatBubbleIcon className="w-4 h-4" />
                <span className="text-sm text-gray-500">Commentaires</span>
            </div>       
            <textarea
              value={editableItem?.comments || ""}
              onChange={(e) => setEditableItem((prev) => prev && { ...prev, comments: e.target.value })}
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

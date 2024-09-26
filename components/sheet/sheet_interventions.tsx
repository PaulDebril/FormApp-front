"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { CalendarIcon } from "@radix-ui/react-icons";
import { ClipboardIcon } from "@radix-ui/react-icons";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { DrawingPinIcon } from "@radix-ui/react-icons";
import { TargetIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "@radix-ui/react-icons";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { PersonIcon } from "@radix-ui/react-icons";
import { SewingPinIcon } from "@radix-ui/react-icons";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { BackpackIcon } from "@radix-ui/react-icons";
import { TimerIcon } from "@radix-ui/react-icons";

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
    mission: string;
    date: string;
    center: string;
    lesson: string;
    formation: string;
    referent: string;
    classroom: string;
    ratetype: string;
    nettotal: string;
    urssaf: string;
    numberofstudents: string;
    intermediate: string;
    schedules: string;
    totalhours: string;
    ratehour: string;
    grosstotal: string;
    comments?: string; // Champ facultatif
  } | null;
  onUpdateItem: (updatedItem: any) => void; // Fonction pour sauvegarder les modifications
}

export default function SheetInterventionsComponent({
  isOpen,
  onClose,
  item,
  onUpdateItem,
}: SheetComponentProps) {
  const [editableItem, setEditableItem] = React.useState(item);
  const [date, setDate] = React.useState<Date | null>(
    item ? new Date(item.date) : null
  );

  React.useEffect(() => {
    if (item) {
      setEditableItem(item);
      setDate(item.date ? new Date(item.date) : null);
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
          <h1 className="text-2xl font-bold">{editableItem?.mission}</h1>
        </div>

        {/* Mission */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <TargetIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Mission</span>
          </div>
          <input
            type="text"
            value={editableItem?.mission || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, mission: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Date */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Date d&apos;échéance</span>
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
              onSelect={(day: Date | undefined) => setDate(day ?? null)}
              initialFocus
              />
            </PopoverContent>
          </Popover>
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

        {/* Leçon */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <ArrowTopRightIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Leçon</span>
          </div>
          <input
            type="text"
            value={editableItem?.lesson || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, lesson: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Formation */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <ArrowTopRightIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Formation</span>
          </div>
          <input
            type="text"
            value={editableItem?.formation || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, formation: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Référent */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <PersonIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Référent</span>
          </div>
          <input
            type="text"
            value={editableItem?.referent || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, referent: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Salle de classe */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <SewingPinIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Salle de classe</span>
          </div>
          <input
            type="text"
            value={editableItem?.classroom || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, classroom: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Taux de type */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <MagnifyingGlassIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Type de taux</span>
          </div>
          <input
            type="text"
            value={editableItem?.ratetype || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, ratetype: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Total net */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <ChevronUpIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Total net</span>
          </div>
          <input
            type="text"
            value={editableItem?.nettotal || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, nettotal: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* URSSAF */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <ChevronUpIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">URSSAF</span>
          </div>
          <input
            type="text"
            value={editableItem?.urssaf || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, urssaf: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Nombre d&apos;étudiants */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <BackpackIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Nombre d&apos;étudiants</span>
          </div>
          <input
            type="text"
            value={editableItem?.numberofstudents || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, numberofstudents: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Intermédiaire */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <ClipboardIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Intermédiaire</span>
          </div>
          <input
            type="text"
            value={editableItem?.intermediate || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, intermediate: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Horaires */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <TimerIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Horaires</span>
          </div>
          <input
            type="text"
            value={editableItem?.schedules || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, schedules: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Total des heures */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <TimerIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Total des heures</span>
          </div>
          <input
            type="text"
            value={editableItem?.totalhours || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, totalhours: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Taux horaire */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <ChevronUpIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Taux horaire</span>
          </div>
          <input
            type="text"
            value={editableItem?.ratehour || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, ratehour: e.target.value })
            }
            className="w-2/4 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Total brut */}
        <div className="flex items-center space-x-4 mt-4 justify-between">
          <div className="flex items-center space-x-4">
            <ChevronUpIcon className="w-4 h-4" />
            <span className="text-sm text-gray-500">Total brut</span>
          </div>
          <input
            type="text"
            value={editableItem?.grosstotal || ""}
            onChange={(e) =>
              setEditableItem((prev) => prev && { ...prev, grosstotal: e.target.value })
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

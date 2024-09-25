"use client"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DataByCenter = {
  session: string
  date : Date 
  sallecours: string
  referent: string
  cours: string
}

export const columnsByCenter: ColumnDef<DataByCenter>[] = [
  {
    accessorKey: "session",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Session
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "sallecours",
    header: "Salle de cours",
  },
  {
    accessorKey: "referent",
    header: "Référent",
  },
  {
    accessorKey: "cours",
    header: "Cours",
  },
]

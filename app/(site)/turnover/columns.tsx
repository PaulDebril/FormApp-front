"use client"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Data = {
  session: string
  date: Date
  heures : number 
  tarifheure: number
  totalBrut: number
  urssaf: number
  totalNet: number
}

export const columns: ColumnDef<Data>[] = [
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
    accessorKey: "heures",
    header: "Heures",
  },
  {
    accessorKey: "tarifheure",
    header: () => "Tarif / Heure",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("tarifheure"))
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "totalBrut",
    header: () => "Total Brut",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalBrut"))
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "urssaf",
    header: () => "Urssaf",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("urssaf"))
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "totalNet",
    header: () => "Total Net",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalNet"))
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
  },
    },
]

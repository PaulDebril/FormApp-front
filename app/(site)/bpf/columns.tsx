"use client"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export type Data = {
  session: string
  date: Date
  heures : number 
  nbEtudiant: number
  nbEtudiantXHeures: number
  totalBrut: number
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
    accessorKey: "nbEtudiant",
    header: "nbEtudiant",
  },
  {
    accessorKey: "nbEtudiantXHeures",
    header: "nbEtudiantXHeures",
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

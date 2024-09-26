"use client"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export type Data = {
  nom: string
  centre: string
  tarif : number 
  Type: string
  tarifparheure: number
  tjm: number
  intermediaire: string
}

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "nom",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nom
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "centre",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Centre
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "tarif",
    header: () => "Tarif",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("tarif"))
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
 
  {
    accessorKey: "tarifparheure",
    header: () => "Tarif/heure",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("tarifparheure"))
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
  },
    },
    {
      accessorKey: "tjm",
      header: () => "TJM",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("tjm"))
        const formatted = new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
        }).format(amount)
   
        return <div className="text-right font-medium">{formatted}</div>
    },
      },

    {
      accessorKey: "intermediaire",
      header: "Intermediaire",
    },
]

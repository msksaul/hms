"use client"

import { Button } from '@/components/ui/button'
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from 'lucide-react'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Patient = {
  id: string
  name: string,
  genre: 'hombre' | "mujer",
  age: string,
  diagnosis: string,
  status: 'externo' | 'internado' | 'de alta'
}

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "id",
    header: () => <div className='text-left font-bold'>Registro</div>,
    cell: ({ row }) => <div className='text-left font-medium'>{row.getValue('id')}</div>
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant={'ghost'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nombre
          <ArrowUpDown className='ml-2 h-4 w-4'/>
        </Button>
      )
    },
    cell: ({ row }) => <div className='text-left font-medium'>{row.getValue('name')}</div>
  },
  {
    accessorKey: "genre",
    header: () => <div className='text-left'>Género</div>,
    cell: ({ row }) => <div className='text-left font-medium'>{row.getValue('genre')}</div>
  },
  {
    accessorKey: "age",
    header: () => <div className='text-left'>Edad</div>,
    cell: ({ row }) => <div className='text-left font-medium'>{row.getValue('age')}</div>
  },
  {
    accessorKey: "diagnosis",
    header: () => <div className='text-left'>Diagnóstico</div>,
    cell: ({ row }) => <div className='text-left font-medium'>{row.getValue('diagnosis')}</div>
  },
  {
    accessorKey: "status",
    header: () => <div className='text-left'>Estado</div>,
    cell: ({ row }) => <div className='text-left font-medium'>{row.getValue('status')}</div>
  },
]
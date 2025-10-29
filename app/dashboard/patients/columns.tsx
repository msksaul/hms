"use client"

import { Button } from '@/components/ui/button'
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from 'lucide-react'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: () => <div className='text-left'>Código</div>,
    cell: ({ row }) => <div className='text-left font-medium'>{row.getValue('id')}</div>
  },
  {
    accessorKey: "status",
    header: () => <div className='text-left'>Status</div>,
    cell: ({ row }) => <div className='text-left font-medium'>{row.getValue('status')}</div>
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant={'ghost'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className='ml-2 h-4 w-4'/>
        </Button>
      )
    },
    cell: ({ row }) => <div className='text-left font-medium'>{row.getValue('email')}</div>
  },
  {
    accessorKey: "amount",
    header: () => <div className='text-left'>Amount</div>,
    cell: ({ row }) => <div className='text-left font-medium'>{row.getValue('amount')}</div>
  },
]
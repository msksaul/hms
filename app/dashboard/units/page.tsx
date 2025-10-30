import { IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const data = [
  {
    description: 'Cama 1',
    editButton: 'Editar',
    name: 'Juan Perez',
    pending: 'Tratamiento pendiente',
    done: 'Tratamiento aplicado'
  },
  {
    description: 'Cama 2',
    editButton: 'Editar',
    name: 'Juan Perez',
    pending: 'Tratamiento pendiente',
    done: 'Tratamiento aplicado'
  },
  {
    description: 'Cama 3',
    editButton: 'Editar',
    name: 'Juan Perez',
    pending: 'Tratamiento pendiente',
    done: 'Tratamiento aplicado'
  },
  {
    description: 'Cama 4',
    editButton: 'Editar',
    name: 'Juan Perez',
    pending: 'Tratamiento pendiente',
    done: 'Tratamiento aplicado'
  },
  {
    description: 'Cama 5',
    editButton: 'Editar',
    name: 'Juan Perez',
    pending: 'Tratamiento pendiente',
    done: 'Tratamiento aplicado'
  },
  {
    description: 'Cama 6',
    editButton: 'Editar',
    name: 'Juan Perez',
    pending: 'Tratamiento pendiente',
    done: 'Tratamiento aplicado'
  },
  {
    description: 'Cama 7',
    editButton: 'Editar',
    name: 'Juan Perez',
    pending: 'Tratamiento pendiente',
    done: 'Tratamiento aplicado'
  },
  {
    description: 'Cama 8',
    editButton: 'Editar',
    name: 'Juan Perez',
    pending: 'Tratamiento pendiente',
    done: 'Tratamiento aplicado'
  },
]

export default function Units() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        {
          data.map((bed,idx) => (
            <Card key={idx} className="@container/card">
              <CardHeader>
                <CardDescription>{bed.description}</CardDescription>
                <CardTitle className="@[250px]/card:text-xl">
                  {bed.name}
                </CardTitle>
                <CardAction>
                  <Badge variant="secondary">
                    <IconTrendingUp />
                    {bed.editButton}
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  {bed.pending} <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  {bed.done}
                </div>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

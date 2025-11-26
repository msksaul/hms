import * as z from 'zod';

export const unitSchema = z.object({
  description: z
    .string()
    .nonempty({ error: 'Descripción es requerida' }),
  patient_assigned: z
    .string()
})
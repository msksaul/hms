import * as z from 'zod';

export const patientSchema = z.object({
  name: z
    .string()
    .nonempty(),
  age: z
    .number()
    .min(0, "Edad inválida")
    .max(150, "Edad inválida"),
  gender: z
    .enum(['M', 'F']),
  date: z
    .iso.date(),
  phone: z
    .coerce.number()
    .int('Teléfono inválido')
    .refine(
      (num) => num.toString().length === 8,
      'Teléfono debe tener 8 dígitos'
    ),
  address: z
    .string(),
  ocupation: z
    .string(),
  responsible_person: z
    .string(),
  relationship: z
    .string(),
  fc_vital_signs: z
    .number(),
  fr_vital_signs: z
    .number(),
  t_vital_signs: z
    .number(),
  p_vital_signs: z
    .number(),
  a_vital_signs: z
    .number(),
  sat_vital_signs: z
    .number(),
  weight: z
    .number(),
  height: z
    .number(),
  consultation_reason: z
    .string(),
  illness_history: z
    .string(),
  medical_background: z
    .string(),
  surgical_history: z
    .string(),
  traumatic_history: z
    .string(),
  allergy_history: z
    .string(),
  g_gynecological_obstetric: z
    .number(),
  p_gynecological_obstetric: z
    .number(),
  c_gynecological_obstetric: z
    .number(),
  ab_gynecological_obstetric: z
    .number(),
  fur_gynecological_obstetric: z
    .iso.date(),
  physical_exam: z
    .string()
})
'use client'

import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from './ui/field'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { patientSchema } from '@/lib/schemas'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Calendar } from './ui/calendar'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

export default function PatientForm() {

  const [openDateCalendar, setOpenDateCalendar] = useState(false)
  const [openFurCalendar, setOpenFurCalendar] = useState(false)
  const [admissionDate, setAdmissionDate] = useState<Date | undefined>(new Date())
  const [furDate, setFurDate] = useState<Date | undefined>(new Date())

  const form = useForm({
    defaultValues: {
      legal_name: '',
      age: '',
      gender: 'M',
      date: admissionDate?.toISOString(),
      phone: '',
      address: '',
      occupation: '',
      responsible_person: '',
      relationship: '',
      fc_vital_signs: '',
      fr_vital_signs: '',
      t_vital_signs: '',
      p_a_vital_signs: '',
      sat_vital_signs: '',
      weight: '',
      height: '',
      consultation_reason: '',
      illness_history: '',
      medical_background: '',
      surgical_history: '',
      traumatic_history: '',
      allergy_history: '',
      g_gynecological_obstetric: '',
      p_gynecological_obstetric: '',
      c_gynecological_obstetric: '',
      ab_gynecological_obstetric: '',
      fur_gynecological_obstetric: furDate?.toISOString(),
      physical_exam: ''
    },
    validators: {
      onSubmit: patientSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value)
      toast.success('Form submitted successfully')
    }
  })

  return (
    <Card className="w-full sm:max-w-3/4 mx-auto">
      <CardHeader>
        <CardTitle>HOJA DE DATOS</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          id="patient-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldSet className='pb-4'>
            <FieldLegend>DATOS GENERALES</FieldLegend>
            <FieldGroup>
              <form.Field
                name="legal_name"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Nombre</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        autoComplete="off"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                <form.Field
                  name="age"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Edad</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        <FieldDescription>Años</FieldDescription>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="gender"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Género</FieldLabel>
                        <Select 
                          defaultValue='M'
                          name={field.name}
                          value={field.state.value}
                          onValueChange={field.handleChange}
                        >
                          <SelectTrigger 
                            id={field.name}
                            aria-invalid={isInvalid}
                          >
                            <SelectValue placeholder='M'/>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='M'>M</SelectItem>
                            <SelectItem value='F'>F</SelectItem>
                          </SelectContent>
                        </Select>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="date"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Fecha</FieldLabel>
                        <Popover open={openDateCalendar} onOpenChange={setOpenDateCalendar}>
                          <PopoverTrigger asChild>
                            <Button
                              variant={'outline'}
                              id={field.name}
                              className='w-48 justify-between font-normal'
                            >
                              {admissionDate
                                ? `${admissionDate.getDate()}/${admissionDate.getMonth()}/${admissionDate.getFullYear()}` 
                                : 'Seleccionar fecha'}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
                            <Calendar
                              mode='single'
                              selected={admissionDate}
                              captionLayout='dropdown'
                              onSelect={(date) => {
                                setAdmissionDate(date)
                                setOpenDateCalendar(false)
                                field.handleChange(date?.toISOString())
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="phone"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Teléfono</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        <FieldDescription>Ej. 42425549</FieldDescription>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <form.Field
                  name="address"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Dirección</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="occupation"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Ocupación</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <form.Field
                  name="responsible_person"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Persona responsable</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="relationship"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Parentesco</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSet className='pb-4'>
            <FieldLegend>SIGNOS VITALES</FieldLegend>
            <FieldGroup>
              <div className='grid grid-cols-2 sm:grid-cols-5 gap-4'>
                <form.Field
                  name="fc_vital_signs"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>FC</FieldLabel>
                        <Input
                          className='text-center'
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="fr_vital_signs"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>FR</FieldLabel>
                        <Input
                          className='text-center'
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="t_vital_signs"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>T</FieldLabel>
                        <Input
                          className='text-center'
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        %
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="p_a_vital_signs"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>P/A</FieldLabel>
                        <Input
                          className='text-center'
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="weight"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>Peso</FieldLabel>
                        <Input
                          className='text-center'
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="height"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>Talla</FieldLabel>
                        <Input
                          className='text-center'
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="sat_vital_signs"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>SAT</FieldLabel>
                        <Input
                          className='text-center'
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        %
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                </div>
            </FieldGroup>
          </FieldSet>
          <FieldSet className='pb-4'>
            <FieldLegend>MOTIVO DE CONSULTA</FieldLegend>
              <form.Field
                name="consultation_reason"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name} hidden>Motivo de consulta</FieldLabel>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        rows={3}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        onBlur={field.handleBlur}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
          </FieldSet>
          
          <FieldSet className='pb-4'>
            <FieldLegend>HISTORIA DE LA ENFERMEDAD</FieldLegend>
              <form.Field
                name="illness_history"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name} hidden>Historia de la enfermedad</FieldLabel>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        rows={3}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        onBlur={field.handleBlur}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
          </FieldSet>
          <FieldSet className='pb-4'>
            <FieldLegend>ANTECEDENTES</FieldLegend>
            <FieldGroup>
              <form.Field
                name="medical_background"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Médicos</FieldLabel>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        rows={1}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        onBlur={field.handleBlur}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
              <form.Field
                name="surgical_history"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Quirúrgicos</FieldLabel>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        rows={1}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        onBlur={field.handleBlur}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
              <form.Field
                name="traumatic_history"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Traumáticos</FieldLabel>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        rows={1}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        onBlur={field.handleBlur}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
              <form.Field
                name="allergy_history"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Alérgicos</FieldLabel>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        rows={1}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        onBlur={field.handleBlur}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
              <FieldLegend>Gineco Obstétricos</FieldLegend>
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                <form.Field
                  name="g_gynecological_obstetric"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>G</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="p_gynecological_obstetric"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>P</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="c_gynecological_obstetric"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>C</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="ab_gynecological_obstetric"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>AB</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
                <form.Field
                  name="fur_gynecological_obstetric"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                      <Field data-invalid={isInvalid} orientation={'horizontal'}>
                        <FieldLabel htmlFor={field.name}>FUR</FieldLabel>
                        <Popover open={openFurCalendar} onOpenChange={setOpenFurCalendar}>
                          <PopoverTrigger asChild>
                            <Button
                              variant={'outline'}
                              id={field.name}
                              className='w-48 justify-between font-normal'
                            >
                              {furDate
                                ? `${furDate.getDate()}/${furDate.getMonth()}/${furDate.getFullYear()}` 
                                : 'Seleccionar fecha'}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
                            <Calendar
                              mode='single'
                              selected={furDate}
                              captionLayout='dropdown'
                              onSelect={(date) => {
                                setFurDate(date)
                                setOpenFurCalendar(false)
                                field.handleChange(date?.toISOString())
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    )
                  }}
                />
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldLegend>EXAMEN FÍSICO</FieldLegend>
              <form.Field
                name="physical_exam"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name} hidden>Examen físico</FieldLabel>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        rows={6}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        onBlur={field.handleBlur}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
          </FieldSet>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="patient-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}

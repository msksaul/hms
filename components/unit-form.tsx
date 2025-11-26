'use client'

import { useForm } from '@tanstack/react-form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { unitSchema } from '@/lib/schemas/unit';
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from './ui/field';
import { Input } from './ui/input';
import { Button } from './ui/button';


export default function UnitForm() {

  const form = useForm({
    defaultValues: {
      description: '',
      patient_assigned: ''
    },
    validators: {
      onSubmit: unitSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    }
  })

  return (
    <Card className="w-full sm:max-w-3/4 mx-auto">
      <CardHeader>
        <CardTitle>NUEVA UNIDAD</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          id="unit-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldSet className='pb-4'>
            <FieldGroup>
              <form.Field name='description'>
                {(field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel>Descripción</FieldLabel>
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
              </form.Field>
            </FieldGroup>
          </FieldSet>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="unit-form">
            Crear
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}

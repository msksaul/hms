import PatientForm from '@/components/patient-form';


export default function NewPatient() {
  return (
    <div className="flex flex-col py-4 md:gap-6 md:py-6">
      <div className='px-4 lg:px-6'>
        <PatientForm />
      </div>
    </div>
  )
}
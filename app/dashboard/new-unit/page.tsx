import UnitForm from '@/components/unit-form';


export default function NewUnit() {
  return (
    <div className="flex flex-col py-4 md:gap-6 md:py-6">
      <div className='px-4 lg:px-6'>
        <UnitForm />
      </div>
    </div>
  )
}
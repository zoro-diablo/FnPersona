
import { Card, NumberInput } from '@tremor/react'

const IncomeSource = () => {
  return (
    <Card
      className='bg-gradient-to-r from-gray-950 to-gray-800'
      decoration='top'
      decorationColor='gray bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
    >
      <h2 className='font-medium text-white '>Income / Source Details</h2>
      <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4 '>
        <NumberInput
          enableStepper={false}
          placeholder='Pincode'
          className=' p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
        />
        <NumberInput
          enableStepper={false}
          placeholder='Pincode'
          className=' p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
        />
      </div>
      <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4 sm:mb-5'>
        <NumberInput placeholder='Amount...' className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black' />
        <NumberInput placeholder='Amount...' className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black' />
      </div>
    </Card>
  )
}

export default IncomeSource
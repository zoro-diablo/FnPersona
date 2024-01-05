import { Card, NumberInput, TextInput } from '@tremor/react'

const SmartEmi = () => {
  return (
    <Card
      className='bg-gradient-to-r from-gray-950 to-gray-800'
      decoration='top'
      decorationColor='gray'
    >
      <h2 className='font-medium text-white '>Smart Emi</h2>
      <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4'>
        <TextInput placeholder='Product...' className='p-1  bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black ' />
        <NumberInput
          enableStepper={false}
          placeholder='Month'
          className=' p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
        />
      </div>
      <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4 '>
        <NumberInput placeholder='Amount...' className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black' />
        <NumberInput placeholder='Average Amount...' className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black' />
      </div>
      <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4 '>
        <NumberInput placeholder='Additional/Amount Paid...' className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black' />
        <NumberInput placeholder='Rate of Intrest...' className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black' />
      </div>
    </Card>
  )
}

export default SmartEmi

import {Card, NumberInput, Textarea, TextInput} from '@tremor/react'

const Location = () => {
  return (
    <Card
      className='bg-gradient-to-r from-gray-950 to-gray-800 '
      decoration='top'
      decorationColor='gray'
    >
      <h2 className='font-medium text-white'>Location Details</h2>
      <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4'>
        <TextInput
          placeholder='Country...'
          className='p-1  bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
        />
        <NumberInput
          enableStepper={false}
          placeholder='Pincode'
          className=' p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
        />
      </div>
      <Textarea
        id='description'
        placeholder='Area... '
        className='mt-4 py-4 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
      />
    </Card>
  )
}

export default Location
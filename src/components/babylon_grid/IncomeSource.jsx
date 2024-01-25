import { Card, NumberInput } from '@tremor/react'
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TextInput,
  Textarea,
} from '@tremor/react'
import { useState } from 'react'
import '../../routes/babylon/babylon.scss'

const IncomeSource = () => {
  const [isClicked, setIsClicked] = useState(0)
  return (
    <Card
      className='bg-gradient-to-r from-gray-950 to-gray-800 h-full'
      decoration='top'
      decorationColor='gray'
    >
      <TabGroup>
        <TabList className=''>
          <Tab className='hover:border-none ' onClick={() => setIsClicked(0)}>
            <h2
              className={`pb-2 text-[13px] sm:text-[14px] ${
                isClicked === 0
                  ? 'text-white border-indigo-400 border-b-2 font-semibold '
                  : ' text-gray-400'
              }`}
            >
              Income / Source Details
            </h2>
          </Tab>
          <Tab className='hover:border-none ' onClick={() => setIsClicked(1)}>
            <h2
              className={`pb-2 text-[13px] sm:text-[14px] ${
                isClicked === 1
                  ? 'text-white border-indigo-400 border-b-2 font-semibold '
                  : ' text-gray-400'
              }`}
            >
              Location Details
            </h2>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className='mt-6 flex flex-col sm:flex-row gap-y-6 gap-x-4 '>
              <NumberInput
                enableStepper={false}
                placeholder='Income'
                className=' p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
              <NumberInput
                enableStepper={false}
                placeholder='Years'
                className=' p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
            </div>
            <div className='mt-10 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4 sm:mb-5'>
              <NumberInput
                placeholder='No of Years'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
              <NumberInput
                placeholder='Intrest'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className='mt-6 flex flex-col sm:flex-row gap-y-6 gap-x-4 '>
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
              className='mt-6 py-6 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}

export default IncomeSource

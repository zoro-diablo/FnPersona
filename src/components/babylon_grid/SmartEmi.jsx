import { Card, NumberInput } from '@tremor/react'
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TextInput,
} from '@tremor/react'
import { useState } from 'react'
import '../../routes/babylon/babylon.scss'

const SmartEmi = () => {
  const [isClicked, setIsClicked] = useState(0)
  return (
    <Card
      className='bg-gradient-to-r from-gray-950 to-gray-800 h-full'
      decoration='top'
      decorationColor='gray'
    >
      <TabGroup>
        <TabList>
          <Tab className='hover:border-none' onClick={() => setIsClicked(0)}>
            <h2
              className={`pb-1 text-[9px] sm:text-[14px] ${
                isClicked === 0
                  ? 'text-white border-purple-400 border-b-2 font-semibold '
                  : ' text-gray-400'
              }`}
            >
              Smart Emi
            </h2>
          </Tab>
          <Tab className='hover:border-none' onClick={() => setIsClicked(1)}>
            <h2
              className={`pb-1 text-[9px] sm:text-[14px] ${
                isClicked === 1
                  ? 'text-white border-purple-400 border-b-2 font-semibold '
                  : ' text-gray-400'
              }`}
            >
              Loan Repayment Mechanism
            </h2>
          </Tab>
          <Tab className='hover:border-none' onClick={() => setIsClicked(2)}>
            <h2
              className={`pb-1 text-[9px] sm:text-[14px] ${
                isClicked === 2
                  ? 'text-white border-purple-400 border-b-2 font-semibold '
                  : ' text-gray-400'
              }`}
            >
              Principal Purchase
            </h2>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className='mt-4 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4'>
              <TextInput
                placeholder='Product Name...'
                className='p-1  bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black '
              />
              <NumberInput
                enableStepper={false}
                placeholder='Month of Emi'
                className=' p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
            </div>
            <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4 '>
              <NumberInput
                placeholder='Amount of Emi ...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
              <NumberInput
                placeholder='Average Amount Emi...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
            </div>
            <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4 '>
              <NumberInput
                placeholder='Additional/Amount Paid Emi ...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
              <NumberInput
                placeholder='Rate of Intrest Emi...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className='mt-4 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4 '>
              <TextInput
                placeholder='Product Name...'
                className='p-1   bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
              <NumberInput
                enableStepper={false}
                placeholder='Month of Loan'
                className=' p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
            </div>
            <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4  '>
              <NumberInput
                placeholder='Amount of Loan...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
              <NumberInput
                placeholder='Average Amount Loan...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
            </div>
            <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4  '>
              <NumberInput
                placeholder='Additional/Amount Paid Loan...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
              <NumberInput
                placeholder='Rate of Intrest of Loan...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className='mt-4 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4'>
              <TextInput
                placeholder='Product Name...'
                className='p-1  bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black '
              />
              <NumberInput
                enableStepper={false}
                placeholder='Month '
                className=' p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
            </div>
            <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4 '>
              <NumberInput
                placeholder='Amount...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
              <NumberInput
                placeholder='Average Amount...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
            </div>
            <div className='mt-6 flex flex-col gap-y-5 sm:flex-row sm:gap-y-4 sm:gap-x-4 '>
              <NumberInput
                placeholder='Additional/Amount Paid...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
              <NumberInput
                placeholder='Rate of Intrest...'
                className='p-1 bg-gradient-to-r from-gray-100 from-90% to-gray-300 font-semibold text-black'
              />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}

export default SmartEmi

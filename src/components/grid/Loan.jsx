import './loan.scss'
import { Card , Flex,ProgressBar,Text,AreaChart } from '@tremor/react'
import { FaChevronDown } from 'react-icons/fa'

import { assetData } from '../../utils/data'

const customTooltip = ({ payload, active }) => {
  if (!active || !payload) return null
  return (
    <div className='w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border'>
      {payload.map((category, idx) => (
        <div key={idx} className='flex flex-1 space-x-2.5'>
          <div
            className={`w-1 flex flex-col bg-${category.color}-500 rounded`}
          />
          <div className='space-y-1'>
            <p className='text-tremor-content'>{category.dataKey}</p>
            <p className='font-medium text-tremor-content-emphasis'>
              {category.value} $
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

const Loan = () => {
  return (
    <div className='flex flex-col gap-y-2 '>
      <div className='boxshadow'>
        <Card className='max-h-12 flex items-center justify-between font-semibold text-1xl rounded-3xl bg-gradient-to-r from-slate-600 to-gray-900 boxshadow '>
          <p className='tracking-wide'>LOAN</p>
          <div className='flex items-center'>
            <div className='flex justify-center items-center rounded-full bg-white w-8 h-8 cursor-pointer shadow-2xl  hover:bg-gray-950 '>
              <FaChevronDown className='text-black hover:text-white' />
            </div>
          </div>
        </Card>
      </div>
      <div className='flex gap-x-2 overflow-hidden'>
        <Card
          className=' bg-gradient-to-r from-gray-950 to-gray-900 boxshadow '
          decoration='bottom'
          decorationColor='gray'
        >
          <AreaChart
            className='h-44'
            data={assetData}
            index='date'
            categories={['Asset']}
            colors={['gray']}
            yAxisWidth={25}
            customTooltip={customTooltip}
          />
        </Card>
        <Card
          className=' bg-gradient-to-r from-gray-950 to-gray-900 boxshadow'
          decoration='bottom'
          decorationColor='gray'
        >
          <Text className='text-white text-[1rem] font-semibold mb-3'>
            Progress
          </Text>
          <div className='flex flex-col gap-y-6'>
            <div>
              <Flex>
                <Text>$ 8,012 &bull; 25%</Text>
                <Text>$ 50,000</Text>
              </Flex>
              <ProgressBar value={25} color='teal' className='mt-3' />
            </div>
            <div>
              <Flex>
                <Text>$ 9,012 &bull; 45%</Text>
                <Text>$ 20,000</Text>
              </Flex>
              <ProgressBar value={45} color='gray' className='mt-3' />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Loan

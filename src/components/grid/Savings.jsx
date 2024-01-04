import './savings.scss'
import { Card, LineChart, DonutChart } from '@tremor/react'
import { FaChevronDown } from 'react-icons/fa'
import { chartdata, cities } from '../../utils/data'

const Savings = () => {
    const valueFormatter = (number) =>
      ` ${new Intl.NumberFormat('us').format(number).toString()}`
      
  return (
    <div className=' h-[100%] flex flex-col gap-y-2'>
      <Card className='h-[20%] flex items-center justify-between font-semibold text-1xl rounded-3xl bg-gradient-to-r from-slate-600 to-gray-900 boxshadow '>
        <p className='tracking-wide'>SAVINGS</p>
        <div className='flex items-center'>
          <div className='flex justify-center items-center rounded-full bg-white w-8 h-8 cursor-pointer shadow-2xl ml-5 hover:bg-gray-950 '>
            <FaChevronDown className='text-black hover:text-white' />
          </div>
        </div>
      </Card>
      <div className='h-[78%] flex gap-x-2'>
        <Card
          className=' bg-gradient-to-r from-gray-950 to-gray-900 boxshadow txt'
          decoration='bottom'
          decorationColor='gray'
        >
          <LineChart
            className='h-[100%]'
            data={chartdata}
            index='year'
            categories={['Export Rate', 'Import Rate']}
            colors={['emerald', '#969393']}
            valueFormatter={valueFormatter}
            yAxisWidth={30}
          />
        </Card>
        <Card
          className='bg-gradient-to-r from-gray-950 to-gray-900 boxshadow txt-two'
          decoration='bottom'
          decorationColor='gray'
        >
          <DonutChart
            className=''
            data={cities}
            category='sales'
            index='name'
            variant='pie'
            valueFormatter={valueFormatter}
            colors={[
              'slate',
              '#111827',
              'teal',
              '#f2f0f0',
              'emerald',
            
            ]}
          />
        </Card>
      </div>
    </div>
  )
}

export default Savings

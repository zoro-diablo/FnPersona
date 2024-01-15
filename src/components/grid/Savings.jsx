import './savings.scss'
import { Card, LineChart } from '@tremor/react'
import { FaChevronDown } from 'react-icons/fa'
import { chartdata } from '../../utils/data'
import PieChartSavings from './PieChartSavings'

const Savings = () => {
  const valueFormatter = (number) =>
    ` ${new Intl.NumberFormat('us').format(number).toString()}`

  return (
    <div className='flex flex-col gap-y-2'>
      <div className='boxshadow'>
        <Card className='max-h-12 flex items-center justify-between font-semibold text-1xl rounded-3xl bg-gradient-to-r from-slate-600 to-gray-900 boxshadow '>
          <p className='tracking-wide'>SAVINGS</p>
          <div className='flex items-center'>
            <div className='flex justify-center items-center rounded-full bg-white w-8 h-8 cursor-pointer shadow-2xl hover:bg-gray-950'>
              <FaChevronDown className='text-black hover:text-white' />
            </div>
          </div>
        </Card>
      </div>
      <div className='flex gap-x-2'>
        <Card
          className='bg-gradient-to-r from-gray-950 to-gray-900 boxshadow'
          decoration='bottom'
          decorationColor='gray'
        >
          <LineChart
            className='h-44'
            data={chartdata}
            index='year'
            categories={['Export Rate', 'Import Rate']}
            colors={['emerald', '#969393']}
            valueFormatter={valueFormatter}
            yAxisWidth={30}
          />
        </Card>
        <Card
          className='bg-gradient-to-r from-gray-950 to-gray-900 boxshadow flex flex-col items-center '
          decoration='bottom'
          decorationColor='gray'
        >
          {/* <div className='graphshadow rounded-full mx-[15px] my-[-10px] py-[16px] bg-gradient-to-r from-gray-950 to-slate-700  '>
            <DonutChart
              className=''
              data={cities}
              category='sales'
              index='name'
              variant='pie'
              valueFormatter={valueFormatter}
              colors={['slate', '#111827', 'emerald', '#f2f0f0', 'gray']}
            />
          </div> */}
          <PieChartSavings />
        </Card>
      </div>
    </div>
  )
}

export default Savings

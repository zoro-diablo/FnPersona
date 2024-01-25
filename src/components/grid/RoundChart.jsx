import { Card } from '@tremor/react'
// import { roundPeople, roundPpl } from '../../utils/data'
import './roundchart.scss'
import PieChart from './PieChart'
import BarChart from './BarChart'


const RoundChart = () => {
  // const valueFormatter = (number) =>
  //   ` ${new Intl.NumberFormat('us').format(number).toString()}`
   

  return (
    <div className='boxshadow'>
      <Card
        className=' items-center grid grid-cols-2 justify-between bg-gradient-to-r from-gray-950 to-gray-900 boxshadow'
        decoration='bottom'
        decorationColor='gray'
      >
        {/* <Title className='mx-auto mb-4 text-white'>Portfolio</Title>
        <Title className='mx-auto mb-4 text-white'>Count</Title>
        <div className='graphshadow rounded-full mx-[25px] my-[-10px] py-[12px] bg-gradient-to-r from-gray-950 to-slate-800  '>
          <DonutChart
            className='mb-2 mt-2 text-white'
            data={roundPeople}
            category='numbers'
            index='name'
            valueFormatter={valueFormatter}
            variant='donut'
            colors={['#099665','#111827','#f2f0f0'   ,'gray',]}
          />
        </div> */}

        <PieChart />

        {/* <div className='graphshadow rounded-full mx-[25px] my-[-10px] py-[12px] bg-gradient-to-r from-gray-950 to-slate-700  '>
          <DonutChart
            data={roundPpl}
            className='mb-2 mt-2 hover:border-black'
            index='work'
            category='tockens'
            valueFormatter={valueFormatter}
            variant='pie'
            colors={['#111827', 'gray', '#f2f0f0']}
          />
        </div> */}

        <BarChart />
      </Card>
    </div>
  )
}

export default RoundChart

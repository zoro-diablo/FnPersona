import { Card, DonutChart, Title } from '@tremor/react'
import { roundPeople, roundPpl } from '../../utils/data'
import './roundchart.scss'


const RoundChart = () => {
  const valueFormatter = (number) =>
    ` ${new Intl.NumberFormat('us').format(number).toString()}`
  return (
    <>
      <Card
        className=' items-center grid grid-cols-2 justify-between bg-gradient-to-r from-gray-950 to-gray-900 boxshadow'
        decoration='bottom'
        decorationColor='gray'
      >
        <Title className='mx-auto mb-4 text-white'>Portfolio</Title>
        <Title className='mx-auto mb-4 text-white'>Count</Title>
        <DonutChart
          className='mb-2 mt-2 text-white'
          data={roundPeople}
          category='numbers'
          index='name'
          valueFormatter={valueFormatter}
          variant='donut'
          colors={['#f2f0f0', '#111827', '#969393', '#050505']}
        />

        <DonutChart
          data={roundPpl}
          className='mb-2 mt-2'
          index='work'
          category='tockens'
          valueFormatter={valueFormatter}
          variant='pie'
          colors={['#050505', '#969393', '#111827']}
        />
      </Card>
    </>
  )
}

export default RoundChart

import { Card, LineChart, Title, Legend } from '@tremor/react'
import { retirementData } from '../../utils/data'

const RetirementGraph = () => {
  return (
    <div className='boxshadow'>
      <Card
        className='dark bg-gradient-to-r from-gray-950 to-gray-800'
        decoration='bottom'
        decorationColor='teal'
      >
        <div className='flex justify-between'>
          <Title>Retirement Graph</Title>
          <Legend
            className='mt-3 my-auto'
            categories={['Days left in Retairement Plan', 'Days in Fire']}
            colors={['neutral', 'emerald']}
          />
        </div>
        <LineChart
          className='h-[230px] mt-8'
          data={retirementData}
          index='date'
          categories={['2022', '2023']}
          colors={['neutral', 'emerald']}
          yAxisWidth={30}
          connectNulls={true}
        />
      </Card>
    </div>
  )
}

export default RetirementGraph

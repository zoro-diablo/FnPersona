import {  Card, Title,BarChart } from '@tremor/react'
import './assets.scss'
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

 const Assets = () => {
  return (
    <div>
      <Card
        className='bg-gradient-to-r from-gray-950 to-gray-900 boxshadow '
        decoration='bottom'
        decorationColor='gray'
      >
        <Title className='text-white pb-4 my-auto'>Asset Performance</Title>
        <BarChart
          className='h-44'
          data={assetData}
          index='date'
          categories={['Asset']}
          colors={['gray']}
          yAxisWidth={35}
          customTooltip={customTooltip}
        />
      </Card>
    </div>
  )
}

export default Assets
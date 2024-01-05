import { Card, List, ListItem, Title } from '@tremor/react'
import { cashflowdata } from '../../utils/data'

const CashFlowQud = () => {
  return (
    <Card
      className='w-full dark bg-gradient-to-r from-gray-950 to-gray-800 box-shadow'
      decoration='left'
      decorationColor='purple'
    >
      <Title>Cash Flow Quadrent</Title>
      <List>
        {cashflowdata.map((item) => (
          <ListItem key={item.type} className='flex items-center'>
            <span className='m-2 font-semibold text-md'>{item.type}</span>
            <span className='m-2'>{item.value}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export default CashFlowQud

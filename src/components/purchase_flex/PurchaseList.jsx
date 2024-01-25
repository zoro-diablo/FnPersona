import { Card, List, ListItem, Title } from '@tremor/react'
import { totalPurchaseList } from '../../utils/data'

const PurchaseList = () => {
  return (
    <div className='flex justify-end mr-10'>
      <Card
        className='w-full dark bg-gradient-to-r from-gray-950 to-gray-800 box-shadow ml-10'
        decoration='right'
        decorationColor='gray'
      >
        <Title>Total</Title>
        <List className='grid grid-cols-2 gap-4'>
          {totalPurchaseList.slice(0, 4).map((item, index) => (
            <ListItem key={item.type} colSpan={index === 3 ? 4 : 3}>
              <span className='font-medium text-md'>{item.type}</span>
              <span className='text-white text-[14px]'>{item.value} ₹</span>
            </ListItem>
          ))}
          {totalPurchaseList.slice(4).map((item, index) => (
            <ListItem key={item.type} colSpan={index === 0 ? 3 : 4}>
              <span className='font-medium text-md'>{item.type}</span>
              <span className='text-white text-[14px]'>{item.value} ₹</span>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  )
}

export default PurchaseList

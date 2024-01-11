import { Card, List, ListItem, Title } from '@tremor/react'
import { totalPurchaseList } from '../../utils/data'

const PurchaseList = () => {
  return (
    <div className='flex justify-end mr-10'>
        <Card
          className='max-w-2xl dark bg-gradient-to-r from-gray-950 to-gray-800 box-shadow'
          decoration='right'
          decorationColor='gray'
        >
          <Title>Total</Title>
          <List>
            {totalPurchaseList.map((item) => (
              <ListItem key={item.type} className='flex items-center'>
                <span className=' font-medium text-md'>{item.type}</span>
                <span className='text-white text-[15px]'>{item.value} ₹</span>
              </ListItem>
            ))}
          </List>
        </Card>
    </div>
  )
}

export default PurchaseList

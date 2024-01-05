import { Card, List, ListItem, Title } from '@tremor/react'
import { weatherIndicatordata } from '../../utils/data'


const WeatherIndicato = () => {
  return (
    <Card
      className='w-full dark bg-gradient-to-r from-gray-950 to-gray-800 box-shadow'
      decoration='left'
      decorationColor='purple'
    >
      <Title>Weather Indicator</Title>
      <List>
        {weatherIndicatordata.map((item) => (
          <ListItem key={item.type} className='flex items-center'>
            <span className='m-5 font-semibold text-md'>{item.type}</span>
            <span className='m-5'>{item.value}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export default WeatherIndicato

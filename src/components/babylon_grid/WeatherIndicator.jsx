import {
  Card,
  List,
  ListItem,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@tremor/react'
import { weatherIndicatordata } from '../../utils/data'
import '../../routes/babylon/babylon.scss'
import { useState } from 'react'
import { cashflowdata } from '../../utils/data'

const WeatherIndicato = () => {
  const [isClicked, setIsClicked] = useState(0)
  return (
    <Card
      className='w-full h-full dark bg-gradient-to-r from-gray-950 to-gray-800 box-shadow'
      decoration='left'
      decorationColor='purple'
    >
      <TabGroup>
        <TabList>
          <Tab className='hover:border-none' onClick={() => setIsClicked(0)}>
            <h2
              className={`pb-2 text-[12px] sm:text-[14px] ${
                isClicked === 0
                  ? 'text-white border-gray-400 border-b-2 font-semibold '
                  : ' text-gray-400'
              }`}
            >
              Weather Indicator
            </h2>
          </Tab>
          <Tab className='hover:border-none' onClick={() => setIsClicked(1)}>
            {' '}
            <h2
              className={`pb-2 text-[12px] sm:text-[14px] ${
                isClicked === 1
                  ? 'text-white border-gray-400 border-b-2 font-semibold '
                  : ' text-gray-400'
              }`}
            >
              Cash Flow Quadrent
            </h2>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <List>
              {weatherIndicatordata.map((item) => (
                <ListItem key={item.type} className='flex items-center'>
                  <span className='my-[7px] font-semibold text-md '>{item.type}</span>
                  <span className='my-[7px]'>{item.value}</span>
                </ListItem>
              ))}
            </List>
          </TabPanel>
          <TabPanel>
            <List>
              {cashflowdata.map((item) => (
                <ListItem key={item.type} className='flex items-center'>
                  <span className='my-[5px] font-semibold text-md'>{item.type}</span>
                  <span className='my-[5px]'>{item.value}</span>
                </ListItem>
              ))}
            </List>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}

export default WeatherIndicato

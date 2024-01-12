import {
  Card,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Callout,
  Switch,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@tremor/react'
import { accordionItems } from '../../utils/data'
import { useState } from 'react'
import { financialaccordion } from '../../utils/data'
import '../../routes/babylon/babylon.scss'

const AccordionData = () => {
  const [isClicked, setIsClicked] = useState(0)
  return (
    <Card
      className='bg-gradient-to-r from-gray-950 to-gray-800 dark '
      decoration='bottom'
      decorationColor='indigo'
    >
      <TabGroup>
        <TabList>
          <Tab className='hover:border-none' onClick={() => setIsClicked(0)}>
            <h2
              className={`py-2 ${
                isClicked === 0
                  ? 'text-white border-emerald-400 border-b-2 font-semibold '
                  : ' text-gray-400'
              }`}
            >
              The Richest Man in Babylon
            </h2>
          </Tab>
          <Tab className='hover:border-none' onClick={() => setIsClicked(1)}>
            <h2
              className={`py-2 ${
                isClicked === 1
                  ? 'text-white border-emerald-400 border-b-2 font-semibold '
                  : ' text-gray-400'
              }`}
            >
              Financial Stability
            </h2>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className='flex gap-4 overflow-y-auto h-[235px] scrollbar'>
              <AccordionList className='w-full mx-auto '>
                {accordionItems.map((item) => (
                  <Accordion key={item.id} className={item.id}>
                    <AccordionHeader className='text-[13px]'>
                      {item.header}
                    </AccordionHeader>
                    <AccordionBody className='text-[12px]'>
                      {item.body}
                      <div className='flex justify-between'>
                        <Callout
                          className='h-full mt-4 w-full flex'
                          title={item.callouttitle}
                          icon={item.callouticon}
                          color={item.calloutcolour}
                        >
                          <div className='flex justify-between'>
                            <div className='my-auto font-bold text-lg'>
                              {item.calloutamount}
                            </div>
                            <Switch
                              id='switch'
                              name='switch'
                              color='gray'
                              className='py-1 mr-1 '
                            />
                          </div>
                        </Callout>
                      </div>
                    </AccordionBody>
                  </Accordion>
                ))}
              </AccordionList>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='flex gap-4 overflow-y-auto h-[235px] scrollbar'>
              <AccordionList className='w-full mx-auto '>
                {financialaccordion.map((item) => (
                  <Accordion key={item.id} className={item.id}>
                    <AccordionHeader className='text-[13px]'>
                      {item.header}
                    </AccordionHeader>
                    <AccordionBody className='text-[12px]'>
                      {item.body}
                      <div className='flex justify-between'>
                        <Callout
                          className='h-full mt-4 w-full flex'
                          title={item.callouttitle}
                          icon={item.callouticon}
                          color={item.calloutcolour}
                        >
                          <div className='flex justify-between'>
                            <div className='my-auto font-bold text-lg'>
                              {item.calloutamount}
                            </div>
                            <Switch
                              id='switch'
                              name='switch'
                              color='gray'
                              className='py-1 mr-1 '
                            />
                          </div>
                        </Callout>
                      </div>
                    </AccordionBody>
                  </Accordion>
                ))}
              </AccordionList>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}

export default AccordionData

import {
  Card,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Callout,
  Switch,
} from '@tremor/react'
import { financialaccordion } from '../../utils/data'

const FinancialAccordion = () => {
  return (
    <Card
      className='bg-gradient-to-r from-gray-950 to-gray-800 dark'
      decoration='bottom'
      decorationColor='indigo'
    >
      <h2 className='font-medium text-white text-center'>
        Financial Stability
      </h2>
      <div className='flex gap-4'>
        <AccordionList className='w-full mx-auto mt-3'>
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
    </Card>
  )
}

export default FinancialAccordion

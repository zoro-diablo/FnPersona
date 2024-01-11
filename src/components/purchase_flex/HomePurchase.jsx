import { Card, NumberInput, Button } from '@tremor/react'
import '../../routes/purchase/purchase.scss'


const inputFields = [
        'Purchase Price...',
        'Downpayment...',
        'Interest Rate...',
        'Principal Amortization...',
        'Property Tax Rate...',
        'Annual Maintenance...',
        'Housing Association Dues...',
        'Annual Insurance...',
        'Assumed Annual Appreciation...',
        'Assumed Marginal Income Tax Rate...',
        'General Inflation...',
        'Monthly Mortgage Payment...',
        'Cost of Renting Similar Houses...',
        'Assumed Rental Price Inflation...',
        'Assumed Annual (After Tax) Return on Cash...',
    ];

const HomePurchase = () => {
  return (
    <div className='flex flex-col mx-10 mt-5 boxshadow'>
      <Card
        className='bg-gradient-to-r from-gray-950 to-gray-800 '
        decoration='top'
        decorationColor='gray'
      >
        <h2 className='font-medium text-white '>Home Purchase Model</h2>

        <div className='grid grid-cols-5 gap-y-4 gap-x-2 mt-5'>
          {inputFields.map((placeholder, index) => (
            <NumberInput
              key={index}
              placeholder={placeholder}
              className='p-1 bg-gradient-to-r  from-gray-100 from-90% to-gray-300 font-semibold text-black'
              style={{ fontSize: '13px' }}
            />
          ))}
        </div>

        <div className='flex justify-end mt-4'>
          <Button
            size='xs'
            variant='secondary'
            color=''
            className='p-2 px-[50px] hover:bg-black hover:text-white text-gray-200'
          >
            Analyze
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default HomePurchase


    

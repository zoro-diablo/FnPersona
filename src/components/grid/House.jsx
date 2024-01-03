import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Card, Flex, ProgressBar, Text } from '@tremor/react'
import './house.scss'
import { FaChevronDown } from 'react-icons/fa'

const House = () => {
  const constraintsRef = useRef(null)
  return (
    <div className=''>
      <div className='relative'>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ x: 300, opacity: 1 }}
          title='Add New'
          className='hover:rounded-full cursor-pointer outline-none z-10 sm:static  lg:fixed '
        >
          <motion.svg
            whileHover={{
              rotate: 90,
              transition: { duration: 0.1, ease: 'easeOut' },
              loop: Infinity,
            }}
            xmlns='http://www.w3.org/2000/svg'
            width='50px'
            height='50px'
            viewBox='0 0 24 24'
            className='stroke-zinc-400  fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300 hover:fill-black'
          >
            <path
              d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
              strokeWidth='1.5'
            ></path>
            <path d='M8 12H16' strokeWidth='1.5'></path>
            <path d='M12 16V8' strokeWidth='1.5'></path>
          </motion.svg>
        </motion.button>
        <motion.div ref={constraintsRef}>
          <motion.img
            whileHover={{
              y: ['0%', '10%', '0%'],
              transition: { duration: 1, ease: 'easeInOut', yoyo: Infinity },
            }}
            drag
            dragConstraints={constraintsRef}
            src='/home.png'
            alt='house'
            className='cursor-pointer'
          />
        </motion.div>
      </div>
      <div className='boxshadow'>
        <Card className=' mx-auto bg-gradient-to-r from-black to-gray-900' decoration='bottom' decorationColor='gray'>
          <Flex>
            <Text className='font-semibold text-white'>House 1</Text>
            <Text className='text-slate-300'>$ 20,000</Text>
          </Flex>
          <ProgressBar value={45} color='gray' className='mt-3' />
          <Flex className='mt-5'>
            <Text className='font-semibold text-white'>National ROI</Text>
            <Text className='text-slate-300'>$ 1,000</Text>
          </Flex>
          <ProgressBar value={25} color='gray' className='mt-3' />
          <div className=' mt-8 inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'></div>
          <div className='flex justify-between mt-5 items-center bg-slate-300 py-2 px-1 rounded-lg shadow-lg'>
            <Text className='font-bold text-black ml-2'>Financing</Text>
            <div className='flex items-center'>
              <div className='flex justify-center items-center rounded-full bg-white w-8 h-8 cursor-pointer shadow-2xl ml-5 hover:bg-gray-800 '>
                <FaChevronDown className='text-black hover:text-white' />
              </div>
            </div>
          </div>
          <Flex className='mt-5'>
            <Text className='font-medium text-white ml-2'>Outstanding</Text>
            <Text className='text-slate-300 mr-2'>$ 2,000</Text>
          </Flex>
        </Card>
      </div>
    </div>
  )
}

export default House

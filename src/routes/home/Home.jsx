import Dock from '../../components/dock/DockNav'
import Navbar from '../../components/navbar/Navbar'
import { motion } from 'framer-motion'
import { firstGrdVariant, secondGrdVariant, thirdGrdVariant, forthGrdVariant, fifthGrdVariant } from '../../utils/motion'
import House from '../../components/grid/House'


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='w-[95%] h-[550px] grid grid-cols-8 grid-rows-2 gap-3 mx-auto '>
        <motion.div
          variants={firstGrdVariant}
          initial='hidden'
          animate='visible'
          className=' text-white col-span-2 row-span-2'
        >
          <House />
        </motion.div>
        <motion.div
          variants={secondGrdVariant}
          initial='hidden'
          animate='visible'
          className='bg-black text-white col-span-3 row-span-1'
        >
          2
        </motion.div>
        <motion.div
          variants={thirdGrdVariant}
          initial='hidden'
          animate='visible'
          className='bg-black text-white col-span-3 row-span-1'
        >
          3
        </motion.div>
        <motion.div
          variants={forthGrdVariant}
          initial='hidden'
          animate='visible'
          className='bg-black text-white col-span-3 row-span-1'
        >
          4
        </motion.div>
        <motion.div
          variants={fifthGrdVariant}
          initial='hidden'
          animate='visible'
          className='bg-black text-white col-span-3 row-span-1'
        >
          5
        </motion.div>
      </div>
      <Dock />
    </div>
  )
}

export default Home

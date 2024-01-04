import Dock from '../../components/dock/DockNav'
import Navbar from '../../components/navbar/Navbar'
import { motion } from 'framer-motion'
import { firstGrdVariant, secondGrdVariant, thirdGrdVariant, forthGrdVariant, fifthGrdVariant } from '../../utils/motion'
import House from '../../components/grid/House'
import Assets from '../../components/grid/Assets'
import RoundChart from '../../components/grid/RoundChart'
import Loan from '../../components/grid/Loan'
import Savings from '../../components/grid/Savings'
import './home.scss'


const Home = () => {
  
  return (
    <div className='home h-screen'>
      <Navbar />
      <div className='w-[95%] h-[550px] grid grid-cols-8 grid-rows-2 gap-3 mx-auto'>
        <motion.div
          variants={firstGrdVariant}
          initial='hidden'
          animate='visible'
          exit='exit'
          className=' text-white col-span-2 row-span-2'
        >
          <House />
        </motion.div>
        <motion.div
          variants={secondGrdVariant}
          initial='hidden'
          animate='visible'
          exit='exit'
          className=' text-white col-span-3 row-span-1'
        >
          <Assets />
        </motion.div>
        <motion.div
          variants={thirdGrdVariant}
          initial='hidden'
          animate='visible'
          exit='exit'
          className=' text-white col-span-3 row-span-1'
        >
          <RoundChart />
        </motion.div>
        <motion.div
          variants={forthGrdVariant}
          initial='hidden'
          animate='visible'
          exit='exit'
          className=' text-white col-span-3 row-span-1'
        >
          <Loan />
        </motion.div>
        <motion.div
          variants={fifthGrdVariant}
          initial='hidden'
          animate='visible'
          exit='exit'
          className=' text-white col-span-3 row-span-1'
        >
          <Savings />
        </motion.div>
      </div>
      <div className='flex justify-center'>
        <Dock />
      </div>
    </div>
  )
}

export default Home

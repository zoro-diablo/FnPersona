import Dock from '../../components/dock/DockNav'
import Navbar from '../../components/navbar/Navbar'
import { motion } from 'framer-motion'
import {
  firstGrdVariant,
  secondGrdVariant,
  thirdGrdVariant,
  forthGrdVariant,
  fifthGrdVariant,
} from '../../utils/motion'
import House from '../../components/grid/House'
import Assets from '../../components/grid/Assets'
import RoundChart from '../../components/grid/RoundChart'
import Loan from '../../components/grid/Loan'
import Savings from '../../components/grid/Savings'
import './home.scss'

const Home = () => {
   const gridItems = [
    {
      component: House,
      variants: firstGrdVariant,
      className: 'text-white col-span-2 row-span-2',
    },
    {
      component: Assets,
      variants: secondGrdVariant,
      className: 'text-white col-span-3',
    },
    {
      component: RoundChart,
      variants: thirdGrdVariant,
      className: 'text-white col-span-3',
    },
    {
      component: Loan,
      variants: forthGrdVariant,
      className: 'text-white col-span-3',
    },
    {
      component: Savings,
      variants: fifthGrdVariant,
      className: 'text-white col-span-3',
    },
  ];

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Navbar />
      <div className='grid sm:grid-cols-6 md:grid-cols-8 grid-cols-1 gap-3 ml-6 mr-6'>
        {gridItems.map((item, index) => (
          <motion.div
            key={index}
            variants={item.variants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className={item.className}
          >
            <item.component />
          </motion.div>
        ))}
      </div>
      <div className='md:flex justify-center h-20 hidden'>
        <Dock />
      </div>
    </div>
  )
}

export default Home

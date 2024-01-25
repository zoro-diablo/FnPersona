import AccordionData from '../../components/babylon_grid/AccordionData'
import IncomeSource from '../../components/babylon_grid/IncomeSource'
import RetirementGraph from '../../components/babylon_grid/RetirementGraph'
import Navbar from '../../components/navbar/Navbar'
import WeatherIndicator from '../../components/babylon_grid/WeatherIndicator'
import SmartEmi from '../../components/babylon_grid/SmartEmi'
import { motion } from 'framer-motion'
import { babylonScrollvariants } from '../../utils/motion'
import './babylon.scss'

const components = [

  { component: SmartEmi, className: 'boxshadow lg:col-span-3 xl:col-span-3' },
  { component: IncomeSource, className: 'boxshadow lg:col-span-2 xl:col-span-2' },
  { component: WeatherIndicator, className: 'lg:col-span-2 xl:col-span-2 ' },
  { component: AccordionData, className: 'boxshadow lg:col-span-3 xl:col-span-3' },
  { component: RetirementGraph, className: 'lg:col-span-5 xl:col-span-4' },

]

const Babylon = () => {
  return (
    <div className='h-full xl:h-screen'>
      <Navbar />
      <div className=' grid lg:grid-cols-5 xl:grid-cols-7 grid-cols-1 gap-6 mx-8 mt-2 '>
        {components.map((item, index) => (
          <motion.div
            key={index}
            initial='hidden'
            whileInView='whileInView'
            exit='exit'
            viewport={{ once: true }}
            variants={babylonScrollvariants}
            className={item.className}
          >
            <item.component />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Babylon




import AccordionData from '../../components/babylon_grid/AccordionData'
import IncomeSource from '../../components/babylon_grid/IncomeSource'
// import Location from '../../components/babylon_grid/Location'
import RetirementGraph from '../../components/babylon_grid/RetirementGraph'
import Navbar from '../../components/navbar/Navbar'
import WeatherIndicator from '../../components/babylon_grid/WeatherIndicator'
// import FinancialAccordion from '../../components/babylon_grid/FinancialAccordion'
import SmartEmi from '../../components/babylon_grid/SmartEmi'
// import CashFlowQud from '../../components/babylon_grid/CashFlowQud'
// import LoanRepayMech from '../../components/babylon_grid/LoanRepayMech'
// import PrincipalPurchase from '../../components/babylon_grid/PrincipalPurchase'
import { motion } from 'framer-motion'
import { babylonScrollvariants } from '../../utils/motion'
import './babylon.scss'

const components = [
  // { component: Location, className: 'boxshadow' },
  { component: SmartEmi, className: 'boxshadow col-span-3' },
  { component: IncomeSource, className: 'boxshadow col-span-2' },
  { component: WeatherIndicator, className: 'col-span-2 ' },
  { component: AccordionData, className: 'boxshadow col-span-3' },
  { component: RetirementGraph, className: 'col-span-4' },
  // { component: FinancialAccordion, className: 'boxshadow' },
  // { component: CashFlowQud, className: 'boxshadow col-span-2' },
  // { component: LoanRepayMech, className: 'boxshadow' },
  // { component: PrincipalPurchase, className: 'boxshadow' },
]

const Babylon = () => {
  return (
    <div className='h-full xl:h-screen'>
      <Navbar />
      <div className=' grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 grid-cols-1 gap-6 mx-8 mt-2 '>
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

import AccordionData from '../../components/babylon_grid/AccordionData'
import IncomeSource from '../../components/babylon_grid/IncomeSource'
import Location from '../../components/babylon_grid/Location'
import RetirementGraph from '../../components/babylon_grid/RetirementGraph'
import Navbar from '../../components/navbar/Navbar'
import WeatherIndicator from '../../components/babylon_grid/WeatherIndicator'
import FinancialAccordion from '../../components/babylon_grid/FinancialAccordion'
import SmartEmi from '../../components/babylon_grid/SmartEmi'
import CashFlowQud from '../../components/babylon_grid/CashFlowQud'
import LoanRepayMech from '../../components/babylon_grid/LoanRepayMech'
import PrincipalPurchase from '../../components/babylon_grid/PrincipalPurchase'
import { motion } from 'framer-motion'
import { babylonScrollvariants } from '../../utils/motion'
import './babylon.scss'

const components = [
  { component: Location, className: 'boxshadow' },
  { component: IncomeSource, className: 'boxshadow' },
  { component: AccordionData, className: 'boxshadow' },
  { component: RetirementGraph, className: '' },
  { component: WeatherIndicator, className: '' },
  { component: FinancialAccordion, className: 'boxshadow' },
  { component: SmartEmi, className: 'boxshadow' },
  { component: CashFlowQud, className: 'boxshadow' },
  { component: LoanRepayMech, className: 'boxshadow' },
  { component: PrincipalPurchase, className: 'boxshadow' },
]

const Babylon = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6 ml-8 mr-8 mt-5 mb-5 '>
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

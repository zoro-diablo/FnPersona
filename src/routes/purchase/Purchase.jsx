import Navbar from '../../components/navbar/Navbar'
import HomePurchase from '../../components/purchase_flex/HomePurchase'
import PurchaseList from '../../components/purchase_flex/PurchaseList'
import PurchaseTable from '../../components/purchase_flex/PurchaseTable'
import { motion } from 'framer-motion'
import { slideInVariants } from '../../utils/motion'
import './purchase.scss'
import WorldMap from '../../components/purchase_flex/WorldMap'




const Purchase = () => {
  return (
    <motion.div
      variants={slideInVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className=' w-full flex flex-col gap-y-2 mb-5'
    >
      <Navbar />
      <div className='flex'>
        <HomePurchase />
        <div className='flex-1 '>
          <WorldMap />
        </div>
      </div>
      <PurchaseTable />
      <PurchaseList />
    </motion.div>
  )
}

export default Purchase

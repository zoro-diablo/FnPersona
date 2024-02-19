import Navbar from '../../components/navbar/Navbar';
import PplChart from '../../components/partner/PplChart';
import { motion } from 'framer-motion';
import { slideInVariants } from '../../utils/motion';
import PatnerTable from '../../components/partner/PatnerTable';
import NoPatnerTable from '../../components/partner/NoPatnerTable';
import MonthPartnerTable from '../../components/partner/MonthPartnerTable';
import ProfitTable from '../../components/partner/ProfitTable';

const Partnership = () => {
  return (
    <motion.div
      variants={slideInVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='h-full'
    >
      <Navbar />
      <div className='grid grid-cols-8 m-10 gap-5'>
        <div className='col-span-3'>
          <PatnerTable />
        </div>
        <div className='col-span-3'>
          <NoPatnerTable />
        </div>
        <div className='col-span-2'>
          <PplChart />
        </div>
        <div className='col-span-4'>
          <MonthPartnerTable />
        </div>
        <div className='col-span-4'>
          <ProfitTable />
        </div>
      </div>
    </motion.div>
  );
};
export default Partnership;

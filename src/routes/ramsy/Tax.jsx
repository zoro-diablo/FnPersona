import Navbar from '../../components/navbar/Navbar';
import TaxTable from '../../components/ramsy/TaxTable';
import { motion } from 'framer-motion';
import { slideInVariants } from '../../utils/motion';

const Tax = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <motion.div
        variants={slideInVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='my-10 mx-6'
      >
        <TaxTable />
      </motion.div>
    </div>
  );
};
export default Tax;

import Navbar from '../../components/navbar/Navbar';
import PplChart from '../../components/partner/PplChart';
import { motion } from 'framer-motion'
import { slideInVariants } from '../../utils/motion';

const Partnership = () => {
  return (
    <motion.div   variants={slideInVariants}
    initial='hidden'
    animate='visible'
    exit='exit' className='h-screen'>
      <Navbar />
      <PplChart />
    </motion.div>
  );
};
export default Partnership;

import Dock from '../../components/dock/DockNav';
import Navbar from '../../components/navbar/Navbar';
import { motion } from 'framer-motion';
import {
  firstGrdVariant,
  secondGrdVariant,
  thirdGrdVariant,
  forthGrdVariant,
  fifthGrdVariant,
} from '../../utils/motion';
import House from '../../components/grid/House';
import Assets from '../../components/grid/Assets';
import RoundChart from '../../components/grid/RoundChart';
import Loan from '../../components/grid/Loan';
import Savings from '../../components/grid/Savings';
import './home.scss';

const Home = () => {
  const gridItems = [
    {
      component: House,
      variants: firstGrdVariant,
      className:
        'text-white xl:col-span-2 xl:row-span-2 lg:col-span-2 lg:row-span-2',
    },
    {
      component: Assets,
      variants: secondGrdVariant,
      className: 'text-white xl:col-span-3 lg:col-span-3',
    },
    {
      component: RoundChart,
      variants: thirdGrdVariant,
      className: 'text-white xl:col-span-3 lg:col-span-3',
    },
    {
      component: Loan,
      variants: forthGrdVariant,
      className: 'text-white xl:col-span-3 lg:col-span-5',
    },
    {
      component: Savings,
      variants: fifthGrdVariant,
      className: 'text-white xl:col-span-3 lg:col-span-5',
    },
  ];

  return (
    <div className='h-full xl:h-screen w-screen overflow-hidden'>
      <Navbar />
      <div className=' grid lg:grid-cols-5 lg:grid-rows-6 xl:grid-cols-8 grid-cols-1 gap-2 ml-6 mr-6 '>
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
      <div className='md:flex justify-center h-20 hidden '>
        <Dock />
      </div>
    </div>
  );
};

export default Home;

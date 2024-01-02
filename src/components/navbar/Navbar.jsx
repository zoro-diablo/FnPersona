import './navbar.scss'
import { MdAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navVarents, navVarentsLogo } from '../../utils/motion'



const Navbar = () => {
  return (
    <div>
      <div className='w-full h-[60px] flex justify-between items-center '>
        <div className=' ml-10 cursor-pointer'>
          <Link to='/' className='flex items-center'>
            <motion.img
              variants={navVarents}
              initial='hidden'
              animate='visible'
              src='/fn_logo.png'
              alt='fnlogo'
              width={40}
            />
            <motion.p
              variants={navVarentsLogo}
              initial='hidden'
              animate='visible'
              className='font-semibold text-lg mb-1'
            >
              Fn<span className='text-xl'>P</span>ersona
            </motion.p>
          </Link>
        </div>
        <motion.div
          variants={navVarents}
          initial='hidden'
          animate='visible'
          className='flex mr-10 items-center gap-x-6'
        >
          <button className='btn font-semibold'>
            <motion.p
              variants={navVarentsLogo}
              initial='hidden'
              animate='visible'
            >
              Dashboard
            </motion.p>
          </button>
          <div>
            <MdAccountCircle
              size={42}
              className='cursor-pointer rounded-full shadow-black account border-2 '
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar

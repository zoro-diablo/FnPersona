import './navbar.scss'
import { MdAccountCircle } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navVarents, navVarentsLogo } from '../../utils/motion'

const Navbar = () => {
  const location = useLocation()
  return (
    <div>
      <div className='w-full h-[60px] flex justify-between items-center '>
        <div className=' ml-10 cursor-pointer'>
          <Link to='/' className='flex items-center'>
            <motion.img
              variants={navVarents}
              initial='hidden'
              animate='visible'
              exit='exit'
              src='/fn_logo.png'
              alt='fnlogo'
              width={40}
            />
            <motion.p
              variants={navVarentsLogo}
              initial='hidden'
              animate='visible'
              exit='exit'
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
          exit='exit'
          className='flex mr-10 items-center gap-x-6'
        >
          <button className='btn font-semibold'>
            <motion.p
              variants={navVarentsLogo}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              {location.pathname === '/'
                ? 'Dashboard'
                : location.pathname === '/babylon'
                ? 'Babylon'
                : 'Other Page'}
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

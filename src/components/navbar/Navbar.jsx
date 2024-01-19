import { MdAccountCircle, MdMenu } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { navVarents, navVarentsLogo } from '../../utils/motion'
import { useState } from 'react'
import DockNav from '../dock/DockNav'
import './navbar.scss'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const controls = useAnimation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    controls.start({ x: isMenuOpen ? '-100%' : 0 })
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    controls.start({ x: '-100%' })
  }

  const isMobile = window.innerWidth <= 768

  return (
    <div>
      <div className='w-full h-[60px] flex justify-between items-center'>
        <div className='ml-10 cursor-pointer'>
          <Link to='/' className='flex md:mr-0 mr-12 items-center'>
            <motion.img
              className='md:w-[40px] w-[25px]'
              variants={navVarents}
              initial='hidden'
              animate='visible'
              exit='exit'
              src='/fn_logo.png'
              alt='fnlogo'
            />
            <motion.p
              variants={navVarentsLogo}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='font-semibold md:text-lg text-xs mb-1'
            >
              Fn<span className='md:text-xl text-sm'>P</span>ersona
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
                : location.pathname === '/purchase'
                ? 'Purchase'
                : 'Other Page'}
            </motion.p>
          </button>
          <div>
            <MdAccountCircle
              size={42}
              className='cursor-pointer rounded-full shadow-black account border-2 '
            />
          </div>
          <div
            className={`md:hidden cursor-pointer ${isMobile ? '' : 'hidden'}`}
            onClick={toggleMenu}
          >
            <MdMenu size={32} />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: '-100%' }}
        animate={controls}
        className={`fixed top-0 left-0 h-full w-full z-50 bg-[#F4F9F9] overflow-y-auto ${
          isMenuOpen ? '' : 'hidden md:hidden'
        }`}
      >
        <DockNav isMobile={isMobile} onToggle={closeMenu} />
      </motion.div>
    </div>
  )
}

export default Navbar

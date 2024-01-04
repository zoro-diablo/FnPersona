import { motion } from 'framer-motion'
import { useEffect } from 'react'
import './loader.scss'
import { loaderVariants } from '../../utils/motion'

const Loader = () => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <motion.div
      variants={loaderVariants}
      animate='initial'
      exit='exit'
      className='w-fill h-screen flex justify-center items-center bg-[#171717]'
    >
      <div className='spinner'>
        {[...Array(8)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </motion.div>
  )
}

export default Loader

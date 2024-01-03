// loader.scss
import './loader.scss'

// Loader.js
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const Loader = () => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <motion.div
      animate={{
        y: 0,
        transition: { ease: 'easeInOut', duration: 1.5 },
      }}
      exit={{
        y: '-100vh',
        transition: { ease: 'easeInOut', duration: 1.5 },
      }}
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

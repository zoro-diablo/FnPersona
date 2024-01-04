import PropTypes from 'prop-types'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { dokBallVariants, dokVariants } from '../../utils/motion'
import './dock.scss'
import {Link} from 'react-router-dom'




function Dock() {
  let mouseX = useMotionValue(Infinity)

  const contents = [
    <motion.div whileTap={{scale:0.9}} key='retirement' className='font-semibold text-sm flex flex-col'>
      <img src='/valult.webp' alt='babylon' width={300} />
      <p className='flex justify-center'>Retirement</p>
    </motion.div>,
    <motion.div whileTap={{scale:0.9}} key='loan' className='font-semibold text-sm'>
      <img src='/erase.png' alt='loan' width={300} />
      <p className='flex justify-center'>Loan</p>
    </motion.div>,
    <motion.div whileTap={{scale:0.9}} key='purchase' className='font-semibold text-sm'>
      <img src='/perce.webp' alt='purchase' width={300} />
      <p className='flex justify-center'>Purchase</p>
    </motion.div>,
    <motion.div whileTap={{scale:0.9}} key='Ramsy' className='font-semibold text-sm'>
      <img src='/folder.png' alt='Ramsy' width={300} />
      <p className='flex justify-center'>Ramsy</p>
    </motion.div>,
    <motion.div whileTap={{scale:0.9}} key='kiyosaki' className='font-semibold text-sm'>
      <img src='/wallets.webp' alt='kiyosaki' width={300} />
      <p className='flex justify-center'>Kiyosaki</p>
    </motion.div>,
    <motion.div whileTap={{scale:0.9}} key='emi' className='font-semibold text-sm'>
      <img src='/card.png' alt='emi' width={300} />
      <p className='flex justify-center'>EMI</p>
    </motion.div>,
    <motion.div whileTap={{scale:0.9}} key='babylon' className='font-semibold text-sm'>
      <Link to='/babylon'>
      <img src='/blkhouse.png' alt='retirement' width={300} />
      <p className='flex justify-center'>Babylon</p>
      </Link>
    </motion.div>,
  ]

  return (
    <motion.div
      variants={dokVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
     
      className=' flex bottom-3 fixed justify-between h-[120px] w-[65%] mt-5  gap-x-2 items-center  rounded-2xl bg-slate-200 px-4 pb-3 nav'
    >
      {contents.map((content, i) => (
        <AppIcon key={i} mouseX={mouseX} content={content} />
      ))}
    </motion.div>
  )
}

function AppIcon({ mouseX, content }) {
  let ref = useRef(null)

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [100, 200, 100])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.div
      variants={dokBallVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      ref={ref}
      style={{ width, height: width }}
      className='aspect-square cursor-pointer mx-auto w-10 mt-2 rounded-full  flex items-center justify-center'
    >
      {content}
    </motion.div>
  )
}

AppIcon.propTypes = {
  mouseX: PropTypes.object.isRequired,
  content: PropTypes.node.isRequired,
}

export default Dock

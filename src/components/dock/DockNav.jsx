import PropTypes from 'prop-types'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { dokBallVariants, dokVariants } from '../../utils/motion'
import './dock.scss'

function Dock() {
  let mouseX = useMotionValue(Infinity)

  const contents = [
    <div key='retirement' className='font-semibold text-sm flex flex-col'>
      <img src='/blkhouse.png' alt='retirement' width={300} />
      <p className='flex justify-center'>Retirement</p>
    </div>,
    <div key='loan' className='font-semibold text-sm'>
      <img src='/erase.png' alt='loan' width={300} />
      <p className='flex justify-center'>Loan</p>
    </div>,
    <div key='purchase' className='font-semibold text-sm'>
      <img src='/bag.webp' alt='purchase' width={300} />
      <p className='flex justify-center'>Purchase</p>
    </div>,
    <div key='Ramsy' className='font-semibold text-sm'>
      <img src='/folder.png' alt='Ramsy' width={300} />
      <p className='flex justify-center'>Ramsy</p>
    </div>,
    <div key='kiyosaki' className='font-semibold text-sm'>
      <img src='/wallets.webp' alt='kiyosaki' width={300} />
      <p className='flex justify-center'>Kiyosaki</p>
    </div>,
    <div key='emi' className='font-semibold text-sm'>
      <img src='/card.png' alt='emi' width={300} />
      <p className='flex justify-center'>EMI</p>
    </div>,
    <div key='babylon' className='font-semibold text-sm'>
      <img src='/valult.webp' alt='babylon' width={300} />
      <p className='flex justify-center'>Babylon</p>
    </div>,
  ]

  return (
    <motion.div
      variants={dokVariants}
      initial='hidden'
      animate='visible'
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
     
      className=' flex fixed justify-between h-[120px] w-[65%] mt-5  gap-x-2 items-center  rounded-2xl bg-slate-200 px-4 pb-3 nav'
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

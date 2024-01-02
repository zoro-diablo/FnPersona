import PropTypes from 'prop-types'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { dokBallVariants, dokVariants } from '../../utils/motion'


function Dock() {
  let mouseX = useMotionValue(Infinity)

 const contents = [
   <div key='first'>First Ball</div>,
   <div key='second'>Second Ball</div>,
   <div key='third'>Third Ball</div>,
   <div key='fourth'>Fourth Ball</div>,
   <div key='fifth'>Fifth Ball</div>,
   <div key='sixth'>Sixth Ball</div>,
   <div key='seventh'>Seventh Ball</div>,
 ]

  return (
    <motion.div
      variants={dokVariants}
      initial='hidden'
      animate='visible'
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className='mx-auto flex justify-between h-[100px] w-[65%] mt-5 items-center  rounded-2xl bg-gray-700 px-4 pb-3 '
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

  let widthSync = useTransform(distance, [-150, 0, 150], [70, 150, 70])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.div
      variants={dokBallVariants}
      initial='hidden'
      animate='visible'
      ref={ref}
      style={{ width, height: width }}
      className='aspect-square w-10 mt-2 rounded-full bg-gray-400 flex items-center justify-center'
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

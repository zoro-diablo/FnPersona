import PropTypes from 'prop-types'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { dokBallVariants, dokVariants } from '../../utils/motion'
import './dock.scss'
import { Link } from 'react-router-dom'
import { contentDataDock } from '../../utils/data'
import { icntapVar } from '../../utils/motion'


function AppIcon({ mouseX, content }) {
  const ref = useRef(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [100, 200, 100])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

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

function Dock() {
  const mouseX = useMotionValue(Infinity)

  

  return (
    <motion.div
      variants={dokVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className='flex bottom-4 fixed justify-between h-[120px] w-[65%] mt-5 gap-x-2 items-center rounded-2xl bg-slate-200 px-4 pb-3 nav'
    >
      {contentDataDock.map(({ key, imgSrc, alt, text, link }) => (
        <AppIcon
          key={key}
          mouseX={mouseX}
          content={
            <motion.div
              whileTap='whileTap'
              variants={icntapVar}
              exit='exit'
              className='font-semibold text-sm flex flex-col'
            >
              {link ? (
                <Link to={link}>
                  <img src={imgSrc} alt={alt} width={300} />
                  <p className='flex justify-center'>{text}</p>
                </Link>
              ) : (
                <>
                  <img src={imgSrc} alt={alt} width={300} />
                  <p className='flex justify-center'>{text}</p>
                </>
              )}
            </motion.div>
          }
        />
      ))}
    </motion.div>
  )
}

export default Dock

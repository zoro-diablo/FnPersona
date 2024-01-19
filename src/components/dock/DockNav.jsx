import PropTypes from 'prop-types'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { dokBallVariants, icntapVar, dokVariants } from '../../utils/motion'
import { Link } from 'react-router-dom'
import { contentDataDock } from '../../utils/data'
import { MdClose } from 'react-icons/md'

function AppIcon({ mouseX, content }) {
  const ref = useRef(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [100, 180, 100])
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

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

function Dock({ isMobile, onToggle }) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      variants={dokVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={`md:flex md:fixed md:bottom-12 justify-between md:h-[80px] h-[80px] md:gap-x-6 items-center rounded-t-[25px] rounded-b-md px-4 ${
        isMobile ? 'md:hidden' : ''
      }`}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {!isMobile && (
        <MdClose
          size={32}
          className={`cursor-pointer absolute top-4 right-4 md:hidden hidden`}
          onClick={onToggle}
        />
      )}
      {contentDataDock.map(({ key, imgSrc, alt, text, link }) => (
        <AppIcon
          key={key}
          mouseX={mouseX}
          content={
            <motion.div
              whileTap='whileTap'
              whileHover={{
                y: -40,
                transition: { duration: 0.2, ease: 'easeInOut' },
              }}
              variants={icntapVar}
              exit='exit'
              className='font-semibold md:text-sm text-3xl flex flex-col '
            >
              {link ? (
                <Link to={link}>
                  <img
                    src={imgSrc}
                    alt={alt}
                    className={`md:w-[300px] ${isMobile ? 'hidden' : ''}`}
                  />
                  <p className='flex justify-center '>{text}</p>
                </Link>
              ) : (
                <>
                  <img
                    src={imgSrc}
                    alt={alt}
                    className={`md:w-[300px] ${isMobile ? 'hidden' : ''}`}
                  />
                  <motion.p
                    whileHover={{ scale: 1.5, y: -10 }}
                    className='flex justify-center '
                  >
                    {text}
                  </motion.p>
                </>
              )}
            </motion.div>
          }
        />
      ))}
      {isMobile && (
        <MdClose
          size={32}
          className={`cursor-pointer absolute top-4 right-4 md:hidden md:block`}
          onClick={onToggle}
        />
      )}
    </motion.div>
  )
}

Dock.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default Dock

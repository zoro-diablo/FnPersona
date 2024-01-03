import Home from './routes/home/Home'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from './components/loader/Loader'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      {!loading && (
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      )}
    </>
  )
}

export default App

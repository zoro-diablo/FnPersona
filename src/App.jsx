import Home from './routes/home/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from './components/loader/Loader';
import { AnimatePresence } from 'framer-motion';
import Babylon from './routes/babylon/Babylon';
import Purchase from './routes/purchase/Purchase';
import Tax from './routes/ramsy/Tax';


function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      {!loading && (
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Home />} />
            <Route path='/babylon' element={<Babylon />} />
            <Route path='/purchase' element={<Purchase />} />
            <Route path='/ramsy' element={<Tax />} />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;

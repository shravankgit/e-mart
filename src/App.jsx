import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import LandingPage from './stores/pages/LandingPage'
import Mobiles from './stores/components/Mobiles'
import MobilePage from './stores/pages/mobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchesPage from './stores/pages/WatchesPage'
import TvPage from './stores/pages/TvPage'
import AcPage from './stores/pages/AcPage'
import WomanPage from './stores/pages/WomanPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/abc' element={<Mobiles />} />
        <Route path='/mobiles' element={<MobilePage />} />
        <Route path='/computers' element={<ComputerPage />} />
        <Route path='/watches' element={<WatchesPage />} />
        <Route path='/tv' element={<TvPage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path='/woman' element={<WomanPage />} />
        <Route path='/mobiles/:id' element={<MobileSingle />} />
      <Route path='/cart' element = {<UserCart />} />

      </Routes>

    </div>
  )
}

export default App
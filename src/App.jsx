import React from 'react'
import { Routes,Route } from 'react-router-dom' 

import './App.css'
import LandingPage from './stores/pages/LandingPage'
import Mobiles from './stores/components/Mobiles'
import MobilePage from './stores/pages/mobilePage'



const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = {<LandingPage/>}/>
          <Route path= '/abc' element = {<Mobiles />}/>
          <Route path= '/sample' element = {<MobilePage />}/>
      </Routes>

    </div>
  )
}

export default App
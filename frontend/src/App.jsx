import { useState } from 'react'

import Home from './Pages/Home'
import AgentPage from './Pages/AgentPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
   
      
        <Routes>
          {/* Public routes */}
          <Route path='/' element= {<Home />}/>
          <Route path="/agent" element={< AgentPage/>} />

        </Routes>
      

      {/* <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
        <Home />
      </div>
       */}
    
    </>
  )
}

export default App

import React from 'react'
import Home from './home/Home'
import {Routes, Route} from 'react-router-dom'
import Premiums from './premium/Premiums'
import Signup from './components/Signup'
import Contact from './contact/Contact'



function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pro' element={<Premiums />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
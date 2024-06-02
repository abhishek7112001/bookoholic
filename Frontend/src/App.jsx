import React from 'react'
import Home from './home/Home'
import {Routes, Route , Navigate} from 'react-router-dom'
import Premiums from './premium/Premiums'
import Signup from './components/Signup'
import Contact from './contact/Contact'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'


function App() {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pro' element={authUser?<Premiums />:<Navigate to='/signup'/>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Toaster />
    </div>
    </>
  )
}

export default App
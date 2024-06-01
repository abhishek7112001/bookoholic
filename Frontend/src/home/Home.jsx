import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Footer from '../components/Footer'
import Freecards from '../components/Freecards'


function Home() {
  return (
    <>
        <Navbar />
        <Intro />
        <Freecards/>
        <Footer />
    </>
  )
}

export default Home
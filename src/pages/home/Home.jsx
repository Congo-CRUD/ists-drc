import React from 'react'
import { Navbar, Hero, About, Footer, Announce } from '../../components'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Announce/>
        <Footer/>
    </div>
  )
}

export default Home
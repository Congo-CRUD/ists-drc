import React from 'react'
import { Navbar, Hero, About, Footer, Announce, Commite } from '../../components'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Announce/>
        <Commite/>
        <Footer/>
    </div>
  )
}

export default Home
import React from 'react'
import { Navbar, Hero, About, Footer, Announce, Commite } from '../../components'
import whatsapp from '../../assets/img/whatsapp.png'


function ButtnWhatsApp() {
  return (
    <div className='button-whatsapp'>
      <a href='https://wa.me/821090261605' target="_blank"><img src={whatsapp}></img></a>
    </div>
  )
}

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Announce />
      <Commite />
      <Footer />
      <ButtnWhatsApp />
    </div>
  )
}

export default Home
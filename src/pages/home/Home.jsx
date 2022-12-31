import React from 'react'
import { Navbar, Hero, About, Footer, Announce, Commite } from '../../components'
import whatsapp from '../../assets/img/whatsapp.png'


function ButtnWhatsApp() {
  return (
    <div className='button-whatsapp'>
      <a href='https://wa.me/821090261605' target="_blank">
        {/*<img src={whatsapp}></img>*/}
        <span className='whatsApp-button' style={{backgroundColor: "#15C34A", color:'white', padding:'5px 10px',borderRadius:'100%', fontSize: "35px"}}>
          <i class="fa-brands fa-whatsapp"></i>
        </span>
        
      </a>
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
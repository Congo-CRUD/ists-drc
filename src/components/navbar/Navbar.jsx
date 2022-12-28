import './Navbar.css'
import { windowSize } from '../../utils'
import React, { useState } from 'react'


function MiniNavBar(){
    return(
        <nav className='mini-nav'>
            HI
        </nav>
    )
}

function BigNavBar(){
    return(
    <nav className='nav'></nav>
        
    )
}
function Navbar() {
    const size = windowSize(window.innerWidth) 
    return (
        size === "mobile" ? <MiniNavBar/> : <BigNavBar/>
      
  )
}

export default Navbar
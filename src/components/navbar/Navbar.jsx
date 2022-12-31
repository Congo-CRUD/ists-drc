import './Navbar.css'
import { windowSize } from '../../utils'
import React, { useState } from 'react'


function OpenMiniNavBar(){
    return(
        <div className='mini-nav-open'>
            <ul>
                <li><a>Accueil</a></li>
                <li><a>A propos</a></li>
                <li><a>Sections Organisées</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
}

function MiniNavBar(){
    const [navIsOpen, setNavIsOpen] = useState(false); 
    return(
        <nav className='mini-nav'>
            {navIsOpen && <OpenMiniNavBar/>}
            <i class="fa-solid fa-bars fa-xl"></i>
        </nav>
    )
}

function BigNavBar(){
    return(
    <nav className='nav'>Big</nav>
        
    )
}
function Navbar() {

    const size = windowSize(window.innerWidth) 
    return (
        size === "mobile" ? <MiniNavBar/> : <BigNavBar/>
      
  )
}

export default Navbar
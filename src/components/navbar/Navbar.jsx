import './Navbar.css'
import { windowSize } from '../../utils'
import React, { useState } from 'react'


function OpenMiniNavBar(){
    return(
        <div className='mini-nav-open' style={{height: window.innerHeight - 60}}>
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
    
    function openNav(){
        setNavIsOpen(prev => !prev)
    }
    return(
        <nav className='mini-nav'>

            {navIsOpen && <OpenMiniNavBar/>}
            <div className='logo-ists'>LOGO ISTS</div>
            <i onClick={openNav} class={navIsOpen ? "fa-solid fa-xmark fa-xl" :"fa-solid fa-bars fa-xl"}></i>
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
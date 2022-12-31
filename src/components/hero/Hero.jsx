import './Hero.css'
import bg from '../../assets/img/ists.png'
import { useEffect } from 'react';
import Login from '../login/Login';












export default function Hero(){
    console.log(window.innerHeight);
    

    return(
        <div className='hero-container' style={{height: window.outerHeight - 100}}>
            <img className='hero-bg' src={bg}/>
            <h2>BIENVENUE SUR LE SITE OFFICIEL DE L¡¯INSTITUT SUPERIEUR TECHNIQUE SONG-HWA</h2>
            <Login/>
        </div>
    )
}


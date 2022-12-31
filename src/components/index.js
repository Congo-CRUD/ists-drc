import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import Login from "./login/Login";
import About from "./about/About";
import Footer from "./footer/Footer";
import Announce from "./announce/Announce";
import Commite from "./commite/Commite";
//Footer, Hero, Commite


function LirePlus(props){
    return(
        <a className="announce-content-a" href={props.link}>Lire plus ...</a>
    )
}


export {Navbar, Hero, Login, About, Footer,  Announce, LirePlus, Commite}
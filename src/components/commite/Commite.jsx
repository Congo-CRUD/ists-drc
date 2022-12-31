import { LirePlus } from ".."
import "./Commite.css"


function MembreCmt(){
    return(
        <div className="commiteMbr-container">
                <div className="commiteMbr-img">
                    <p>Photo du membre du comite de gestion</p>
                </div>
                <div className="commiteMbr-info">
                    <h3>Nom Complet</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                    <LirePlus />
                </div>
        </div>
    )

}
export default function Commite(){
    return(
        <div className="commite">
            <h1>Commite de gestion</h1>
            <MembreCmt/>
            <MembreCmt/>
        </div>
    )
}
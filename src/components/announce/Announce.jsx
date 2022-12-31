import "./Announce.css"

export default function Announce(){
    return(
        <div className="announce-container">
            <h1>Announces</h1>
            <div className="announce-content">
                <h2>Titre du poste</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae.</p>
                <a className="announce-content-a">Lire plus ...</a>
                <p className="announce-date">Date/heure du poste</p>
            </div>
        </div>
    )
}
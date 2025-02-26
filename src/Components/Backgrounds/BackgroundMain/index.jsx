import CardAll from "../../Cards/CardAll";
import CardCast from "../../Cards/CardCast";
import CardMega from "../../Cards/CardMega";

import "./backgroundmain.css"

export default function BackgroundMain() {
    return(
        
        <div className="background-main">
            <div className="container-backs">
                <h1 className="h1-all">Todos os jogos</h1>
                <CardAll/>
            </div>
            
            <div className="container-backs">
                <h1 className="h1-all">Castlevania</h1>
                <CardCast/>
            </div>

            <div className="container-backs">
                <h1 className="h1-all">Megaman</h1>
                <CardMega/>
            </div>
        </div>

    )
}
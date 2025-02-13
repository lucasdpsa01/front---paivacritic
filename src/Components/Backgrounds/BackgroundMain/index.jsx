import CardAll from "../../Cards/CardAll";
import CardCast from "../../Cards/CardCast";
import CardMega from "../../Cards/CardMega";

import "./backgroundmain.css"

export default function BackgroundMain() {
    return(
        
        <div className="background-main">
            <div className="container-backall">
                <h1>Todos os jogos</h1>
                <CardAll/>
            </div>
            
            <div className="container-backcast">
                <h1>Castlevania</h1>
                <CardCast/>
            </div>

            <div className="container-backmega">
                <h1>Megaman</h1>
                <CardMega/>
            </div>
        </div>

    )
}
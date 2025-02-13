import { jogos } from "../../../data/jogos"

import "./cardcast.css"

export default function CardCast() {
    return(
        <div className="container-cast">
            {jogos
                .filter(jogo => jogo.type.includes("castle"))
                .map(jogo => (
                    <div key={jogo.id} className="card-cast">
                        <img src={jogo.images} alt={jogo.nome} />
                        <h2>{jogo.nome}</h2>
                        <div className="rating">
                            <p>{jogo.rating}</p>
                        </div>
                    </div>
                
                ))}
        </div>
    )
}
import { jogos } from "../../../data/jogos"

import "./cardmega.css"

export default function CardMega() {
    return(
        <div className="container-megaman">
            {jogos
                .filter(jogo => jogo.type.includes("megaman"))
                .map(jogo => (
                    <div key={jogo.id} className="card-megaman">
                        <img src={jogo.images} alt={jogo.nome} />
                        <h2>{jogo.nome}</h2>
                        <div className="rating-megaman">
                            <p>{jogo.rating}</p>
                        </div>
                    </div>
                
                ))}
        </div>
    )
}
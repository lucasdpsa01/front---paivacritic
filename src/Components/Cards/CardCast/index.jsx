import { jogos } from "../../../data/jogos"

import "../cardall.css"

export default function CardCast() {
    return (
        <div className="container">
            {jogos
                .filter(jogo => jogo.type.includes("castle"))
                .map(jogo => (
                    <div key={jogo.id} className="card">
                        <img src={jogo.images} alt={jogo.nome} />
                        <div className="descricao">
                            <h2>{jogo.nome}</h2>
                            <div className="rating">
                                <p>{jogo.rating}⭐</p>
                            </div>
                        </div>
                    </div>

                ))}
        </div>
    )
}
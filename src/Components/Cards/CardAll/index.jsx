import { jogos } from "../../../data/jogos"

import "../cardall.css"

export default function CardAll() {
    return (
        <div className="container">
            {jogos.map((jogo) => (
                <div key={jogo.id} className="card">
                    <img src={jogo.images} />
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
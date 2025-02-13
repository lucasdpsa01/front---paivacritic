import { jogos } from "../../../data/jogos"


export default function CardMetroid() {
    return(
        <div className="container-cast">
            {jogos
                .filter(jogo => jogo.type.includes("metroid"))
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
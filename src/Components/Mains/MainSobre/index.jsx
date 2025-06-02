import megaicon from "../../../images/megaman.png"
import "./index.css"

export default function MainSobre() {
    return (
        <div className="container-sobre">
            <img src={megaicon} alt="megaman" height={90}/>
            <div className="texto">
                <h1>Bem-vindo ao Paivacritic!</h1>
                <p>Sou uma pessoa apaixonada por jogos e tecnologia, e criei esta plataforma para reunir e avaliar os jogos que joguei ao longo de 2024.</p>
                <p>O site é simples e feito por mim, com o objetivo de compartilhar minhas opiniões e permitir que outros usuários enviem sugestões de jogos. As atualizações serão feitas anualmente.</p>
                <p>Estou sempre buscando melhorar, e sua participação é muito bem-vinda para tornar este espaço ainda mais interessante.</p>
            </div>
        </div>
    );
}
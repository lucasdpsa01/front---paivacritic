import { useEffect, useState, useRef } from "react"
import { supabase } from "../../services/supabase";
import "./comment.css"
import comment from "../../svg/comment.svg"

export default function Comment() {
    const [sugests, setSugests] = useState([]);
    const inputName = useRef();
    const inputRecomendacao = useRef();

    async function getComment() {
        const { data, error } = await supabase
        .from("sugestoes")
        .select("*")
        .order("created_at", { ascending: false });

        if (error) {
            console.error("Erro ao buscar sugestões:", error);
            return;
        }

        setSugests(data);
    }

    async function createComment() {
        const { error } = await supabase
        .from("sugestoes")
        .insert([
            {
                nome: inputName.current.value,
                recomendacao: inputRecomendacao.current.value
            }
        ]);
        if (error) {
            console.error("Erro ao criar sugestão:", error);
            return;
        }
        getComment();
    }

    useEffect(() => {
        getComment()
    }, [])

    return (

        <div className="comment">

            <form className="form">
                <div className="name-icon">
                    <img src={comment} alt="comentario-icon" height={35} />
                    <h1>Deixe um Comentário</h1>
                </div>
                <input name='nome' type="text" placeholder="Nome" ref={inputName} />
                <textarea name="sugestao" id="sugestao" rows="4" ref={inputRecomendacao} placeholder="Algum jogo que você recomenda? comente aqui 👇" />
                <button type='button' onClick={createComment}>Enviar</button>
            </form>


            <div className="container-comment">
                <h1>Recomendações</h1>
                <div className="users-comment">
                    {sugests.map((sugest) => (
                        <div className="user-comment">
                            <p>Nome: {sugest.nome}</p>
                            <p>Recomendação: {sugest.recomendacao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
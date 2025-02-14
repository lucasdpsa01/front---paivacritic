import { useEffect, useState, useRef } from "react"
import api from "../../services/api"

import "./comment.css"

export default function Comment() {
    const [sugests, setSugests] = useState([])

    const inputName = useRef()
    const inputRecomendacao = useRef()

    async function getComment() {
        const sugestsFromApi = await api.get('/sugestao')

        setSugests(sugestsFromApi.data)
    }

    async function createComment() {

        await api.post('/sugestao', {
            nome: inputName.current.value,
            recomendacao: inputRecomendacao.current.value
        })

        getComment()
    }

    useEffect(() => {
        getComment()
    }, [])

    return (

        <div className="comment">
            <div className="sugestao-form">
                <form className="form">
                    <h1>Recomendações</h1>
                    <div className="input-group">
                        <input name='nome' type="text" ref={inputName}/>
                        <label htmlFor="">Nome</label>
                    </div>
                    <div className="input-group">
                        <input name='recomendacao' type="text" ref={inputRecomendacao}/>
                        <label htmlFor="">Sugestão</label>
                    </div>
                    <button type='button' onClick={createComment}>Enviar</button>
                </form>
            </div>


            {sugests.map((sugest) => (
                <div>
                    <p>Nome: {sugest.nome}</p>
                    <p>Recomendação: {sugest.recomendacao}</p>
                </div>
            ))}
        </div>
    )
}
import htmlicon from '../../../svg/html.svg'
import cssicon from '../../../svg/css.svg'
import jsicon from '../../../svg/js.svg'
import reacticon from '../../../svg/react-js.svg'
import nodeicon from '../../../svg/node-js.svg'
import pythonicon from '../../../svg/python.svg'

import "./index.css"

export default function MainSobre() {
    return (
        <div className="container-sobre">
            <div className="texto">
                <h1>Oi! Eu sou Lucas D. Paiva de Sá</h1>
                <p>Sou criativo, auto motivado e fascinado em melhorar. Estou sempre em busca de conhecimentos que me possibilitem evoluir. Sou um rapaz inquieto quando não consigo obter soluções.
                    Habilidades interpessoais e conhecimento diversificado são meus principais diferenciais.
                </p>
            </div>
            <div className="conhecimento">
                <h2>Conhecimento Técnico</h2>
                <div className='linguagens'>
                    <img src={htmlicon} alt="html-icon" height={50}/>
                    <img src={cssicon} alt="css-icon" height={50}/>
                    <img src={jsicon} alt="js-icon" height={50}/>
                    <img src={reacticon} alt="react-icon" height={50}/>
                    <img src={nodeicon} alt="node-icon" height={50}/>
                    <img src={pythonicon} alt="python-icon" height={50}/>
                </div>
            </div>
        </div>
    );
}
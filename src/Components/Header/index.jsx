import { Link } from "react-router-dom"
import { useState } from "react"

import "./header.css"
import hamburger from "../../svg/hamburger.svg" 

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <Link className="link" to="/">
                <h1>paivacritic</h1>
            </Link>

            <nav>
                <ul className={`nav ${isOpen ? "active" : ""}`}>
                    <li>
                        <Link className="link" to="/sobre"><p>Sobre Mim</p></Link>
                    </li>
                    <li>
                        <Link className="link" to="/sugestao"><p>Sugestões</p></Link>
                    </li>
                </ul>
            </nav>

            <button
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menu"
            >
                <img src={hamburger} alt="Ícone do menu" height={50}/>
            </button>
        </header>
    );
}
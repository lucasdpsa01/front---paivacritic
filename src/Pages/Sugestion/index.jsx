import Header from "../../Components/Header"
import SugestaoBackground from "../../Components/Backgrounds/BackgroundSugestao"
import Footer from "../../Components/Footer/Geral"

import "./sugestao.css"

export default function Sugestion() {
    return(
        <div className="sugestion">
            <Header className="header"/>
            <SugestaoBackground className="sugestao" />
            <Footer className="footer" />
        </div>
    )
}
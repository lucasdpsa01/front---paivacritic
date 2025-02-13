import Header from "../../Components/Header"
import SobreBackground from "../../Components/Backgrounds/BackgroundSobre"
import Footer from "../../Components/Footer/Geral"

import "./index.css"

export default function Sobre() {
    return(
        <div className="sobre">
            <Header/>
            <SobreBackground/>
            <Footer/>
        </div>
    )
}
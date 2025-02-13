import CardMain from "../../CardMain"

import "./index.css"

export default function MainHome() {
    return (
        <div className="mainhome">
            <div className="main-h1">
                <h1>Review de Jogos</h1>
            </div>
            <div className="main-card">
                <CardMain/>
            </div>
        </div>
    );
}
import facebook from "../../../images/facebook.png"
import insta from "../../../images/instagram.png"
import twitter from "../../../images/twitter.png"

import "./index.css"

export default function Rest() {
    return(
        <div className="rest">
            <div className="social-media">
                <h1>Follow Me</h1>
                <div className="social-icon">
                    <a href="https://www.facebook.com/oimiga.aliko.3/"><img src={facebook} alt="facebook"/></a>
                    <a href="https://www.instagram.com/lucas.paiva01/"><img src={insta} alt="instagram" /></a>
                    <a href="https://x.com/lucass845584"><img src={twitter} alt="twitter" /></a>
                </div>
            </div>
            <div className="right-reserved">
                <p>Images from google images</p>
                <p>&copy; 2025. ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}

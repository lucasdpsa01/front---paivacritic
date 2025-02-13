import eu from '../../images/eu.jpg'

import "./fotos.css"

export default function Foto() {
    return(
        <div className='foto'>
            <img src={eu} alt="minha foto" />
        </div>
    )
}
import {useRef} from "react"
import { useState } from "react"



function Tagasiside() {
    const [tagasisided, maaraTagasisided] = useState (["Oli hea", "Huvitav", "Teistsugune", "P6nev"])
    const tagasisideRef = useRef();

    function kustuta(index) {
        tagasisided.splice(index,1);
        maaraTagasisided(tagasisided.slice())
    }

    function lisaUusTagasiside() {
        tagasisided.push(tagasisideRef.current.value);
        maaraTagasisided(tagasisided.slice());

    }

    return ( 
    <div>Tagasiside:
        {tagasisided.map((element, index) => 
        <div>
            <span>{element}</span>
            <button onClick={() => kustuta(index)}>X</button>
            </div>)}
        <br/>
        <label>Lisa uus tagasiside:</label>
        <input ref={tagasisideRef} type="text" />
        <button onClick={() => lisaUusTagasiside()}>Sisesta</button>  

    </div>)
}

export default Tagasiside;
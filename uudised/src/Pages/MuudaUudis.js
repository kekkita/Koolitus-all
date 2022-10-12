import { useRef } from "react";
import { useParams } from "react-router-dom";

function MuudaUudis() {

    const { index } = useParams();
    const uudisedLS = JSON.parse (localStorage.getItem("uudised")) || [];
    const leitudUudis = uudisedLS[index];
    const uudisRef = useRef();

    const muuda = () => {
        uudisedLS[index] = uudisRef.current.value;
        localStorage.setItem("uudised", JSON.stringify(uudisedLS))
    }

    return ( <div className="uudispage">

    <div>
        <label>Uudis</label> <br/>
        <input ref={uudisRef} type="text" defaultValue={leitudUudis} /> <br/>
        <button onClick={muuda}>Muuda toode</button> <br/>
    </div>

    </div> );
}

export default MuudaUudis;
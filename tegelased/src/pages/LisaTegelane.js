import { useRef } from "react";
import {useState} from 'react';

function LisaTegelane() {

    const [sonum, muudaSonum] = useState("");
    const nimiRef = useRef ();

    const lisa = () => {    
        if (nimiRef.current.value === "") {
            muudaSonum("Tuhja nimega ei saa sisestada")
        } else {
            muudaSonum("Tegelane lisatud");
        }
      
    }

    return ( <div>
 
    <br/>
    <div>{sonum}</div>
    <br />
    <label>Tegelase nimi </label> 
    <br />
    <input ref={nimiRef} type="text"/><span>      </span>
    <button onClick={lisa}>Lisa uus</button>
    </div>  );
}

export default LisaTegelane;
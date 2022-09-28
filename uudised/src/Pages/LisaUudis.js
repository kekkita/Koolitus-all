import { useRef } from "react";
import {useState} from "react";

function LisaUudis() {

    const [uudis, uuendaUudis] = useState("");
    const uudiseRef = useRef ();


    const lisaUusUudis = () => {    
        if (uudiseRef.current.value === "") {
            uuendaUudis("Pealkiri ei saa olla tühi")
        } else {
            uuendaUudis("Uudis lisatud");
        }
        let uudisedLS = localStorage.getItem("uudised");
        uudisedLS = JSON.parse(uudisedLS) || [];
        uudisedLS.push(uudiseRef.current.value);
        uudisedLS = JSON.stringify(uudisedLS);
        localStorage.setItem("uudised", uudisedLS);
    }


    return ( 
                
                <div className="uudispage">
            <br/><br/><br/>

            <div>{uudis}</div>

            <label >Uudise pealkiri</label> <br/>
            <input ref={uudiseRef} type="text" /> <br/>
            <br/>
            <button className="nupp" onClick={lisaUusUudis}>Lisa uudis</button> <br/>
           
        </div>
     );
}

export default LisaUudis;
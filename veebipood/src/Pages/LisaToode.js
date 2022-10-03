import { useRef } from "react";
import {useState} from "react";


function LisaToode() {
    const [s6num, uuendaS6num] = useState("Lisa uus toode!");
    const nimiRef = useRef ();
    const hindRef = useRef ();
    const piltRef = useRef ();

    const lisa = () => {    
        if (nimiRef.current.value === "") {
            uuendaS6num("Väli ei saa olla tühi")
        } else {
            uuendaS6num("Toode lisatud");
            // Uncaught TypeError: Assignment to constant variable.
            // Line 18:13:  'tootedLS' is constant  no-const-assign
            let tootedLS = localStorage.getItem("tooted");
            tootedLS = JSON.parse(tootedLS) || [];
            const uusToode = {
                "nimi": nimiRef.current.value,
                "hind": hindRef.current.value,
                "pilt": piltRef.current.value
            }
            // LisaToode.js:18 Uncaught TypeError: Cannot read properties of null (reading 'push')
            tootedLS.push(uusToode);
            tootedLS = JSON.stringify(tootedLS);
            localStorage.setItem("tooted", tootedLS);
        }
      
    }

    return (  
        <div>
            <div>{s6num}</div>
            <label>Uue toote nimi</label> <br/>
            <input ref={nimiRef} type="text" /> <br/>
            <label>Hind</label> <br/>
            <input ref={hindRef} type="text" /> <br/>
            <label>Pilt</label> <br/>
            <input ref={piltRef} type="text" /> <br/>
            <button onClick={lisa}>Sisesta</button> <br/>
        </div> );
}

// 1. võta kõik vanad väärtused localStorage-st ---> localStorage.getItem("VÕTI")
// 2. VÕTAME LOCALSTORAGE-st SAADUD VÄÄRTUSEST JUTUMÄRGID MAHA ---> JSON.parse()
// 3. lisa 1 juurde ---> .push(üksJuurde);
// 4. PANEME UUELE ARRAY-le JUTUMÄRGID PEALE ---> JSON.stringify()
// 5. pane tagasi localStorage-sse ---> localStorage.setItem("VÕTI", uusVäärtus)

export default LisaToode; 
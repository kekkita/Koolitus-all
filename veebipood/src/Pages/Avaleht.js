import { useState } from "react";
import { Link } from "react-router-dom";

function Avaleht() {
    const [kogus, uuendaKogus] = useState (0);
    const tooted = JSON.parse (localStorage.getItem("tooted"))  || [];



    const nulli = () => {
        uuendaKogus(0)
    } 
    
    const v2henda = () => {
        if (kogus > 0) {
            uuendaKogus(kogus - 1)
        }
    } 

    const suurenda = () => {
        uuendaKogus(kogus + 1);
        console.log(kogus);
    } 

    const lisaOstukorvi = (klikitudToode) => {
        let ostukorvLS = localStorage.getItem("ostukorv"); //  let ostukorvLS = localStorage.getItem("ostukorv") || "[]"  <<<<< nii saab ka
        ostukorvLS = JSON.parse(ostukorvLS) || [];          // <<<< aga siis siia seda || [] ei pane
        ostukorvLS.push(klikitudToode);
        // .push lisab uue v22rtuse array'le viimaseks juurde
        ostukorvLS = JSON.stringify(ostukorvLS);
        localStorage.setItem("ostukorv", ostukorvLS);
    } 

    return (  
        <div>
        { kogus > 1 && <button onClick={nulli}>nulli tagasi</button> }
          <br />
          <button onClick={v2henda}>-</button> 
          <span> {kogus} </span>
          <button onClick={suurenda}>+</button> 

        {tooted.map((element,index) => 
            <div key = {element}>
                <Link to={"/toode/" + index}>  {/* // suunab mind lehele, kus on /toode/järjekorranumber */}
                    <div>{element.nimi}</div>
                </Link>
                <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
            </div>)}



{/* <br/>
        <a href="https://www.linkedin.com/in/ellake/">
            LinkedIn
        </a> */}


        </div>
    );
}

export default Avaleht;

// <br/> loob ühe vaherea konkreetsesse kohta
// <p></p> loob paragraph'i (ja enne ja pärast vaheread), kuhu peaks mingi teksti sisse panema
// <span></span> loob koha ilma vaheridadeta

// {}
// ()
// <>
// []
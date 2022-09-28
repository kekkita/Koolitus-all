import {useState} from "react";
import andjateFail from "../nimed.json";

function TagasisideAndjad() {
    const [andjad, uuendaAndjad] = useState(andjateFail);
    const [paul, uuendaPaul] = useState("");
    const [firstD, uuendaFirstD] = useState("");

    const filtreeriM = () => {
        const vastus = andjad.filter(nimi =>                       // tootab
            nimi.startsWith('M'));
            uuendaAndjad(vastus);
    }

    const filtreeri6 = () => {
        const vastus = andjad.filter(nimi => nimi.length === 6);    // tootab
           uuendaAndjad(vastus);
    }

    const filtreeriY = () => {
        const vastus = andjad.filter(nimi => nimi.endsWith("y"));   // ei toota   !!!!!!!!!!
        uuendaAndjad(vastus);
    }

    const filtreeriZA = () => {
        andjad.sort();                                               // vajab sorti reversi ette, et saaks kindlalt AZ järjekorda ja seejärel ZA
        andjad.reverse();                                            // tootab
        uuendaAndjad (andjad.slice());
    }

    const filtreeriEST = () => {
        const vastus = andjad.map(nimi => "EST-" + nimi);          // tootab
        uuendaAndjad (vastus);
    }

    const findPaulIndex = () => {
        const index = andjad.indexOf("Paul");
        console.log(index);
        uuendaPaul(index);
    }

    const Show1stD = () => {
        const vastus = andjad.find(nimi => nimi.startsWith("D"));          // tootab
        uuendaFirstD (vastus);
        console.log(vastus);
    }


    return ( <div>

        <div>Tagasiside andjaid on {andjad.length} tk</div>

        <button onClick={filtreeriM}> Filtreeri M</button>
        <button onClick={filtreeri6}> Filtreeri 6-tähelised nimed</button>
        <button onClick={filtreeriY}> Filtreeri Y-ga lõppevad nimed</button>
        <button onClick={filtreeriZA}> Sorteeri Z-A</button>
        <button onClick={() => filtreeriEST()}> Lisa iga nime ette "EST"</button>
        <button onClick={findPaulIndex}> Näita "Paul" järjekorranumbrit</button>
        <button onClick={() => Show1stD()}> Kuva esimene D-tähega nimi</button>
        <br/>
        <div>Pauli jrk nr {paul}</div>
        <div>esimene D tahega nimi on {firstD}</div>
        <br/>
        {andjad.map(nimi => 
            <div key={nimi}> {nimi} </div>)}

        



    </div> );
}

export default TagasisideAndjad;
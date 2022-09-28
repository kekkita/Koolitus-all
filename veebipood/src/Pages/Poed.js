// array  -  list  -  massiiv <<< all the same. endless list of things within a const
import {useRef} from "react";
import {useState} from "react";
import poedFailist from "../poed.json"

function Poed() {
// muutuja, mille v22rtuseks on array (v22rtuste kogumik), iga  1 element on eristatud komaga
    const [poed, uuendaPoed] = useState(poedFailist)
    const poodRef = useRef();  

    const sorteeri = () => {
        poed.sort(); //Javascripti sissekirjutatud funktsioon -> sorteeri A-Z
        uuendaPoed (poed.slice());  //m2lukoha 2ra l6ikamine - tekitab koopia
    }

    const kustuta = (j2rjekorraNumber) => {
        poed.splice(j2rjekorraNumber,1);   //splice ---> kustutab, peab mainima mitmendat ja mitu tykki
        uuendaPoed(poed.slice());
    }

    const lisaPood = () => {
        poed.push(poodRef.current.value);
        uuendaPoed(poed.slice());  //.slice() -- teeb koopia EHK kustutab esialgse m2lukoha
    }

    const tyhjenda = () => {
        uuendaPoed([]);
    }

    const filtreeri = () => {
        const vastus = poed.filter(pood => pood.includes ("mäe") );  // filter noole j2rel pean utlema tingimuse, mis juhul
        uuendaPoed(vastus);
    }
    const muudaK6iki = () => {
        const vastus = poed.map(pood => pood.charAt(0) + pood); // .map moole j2rel pean utlema, mille ma panen igauhe asemele
        uuendaPoed(vastus);
    }

    const indexRef = useRef();
    const uusRef = useRef();

    const muudaPood = () => {
        poed[indexRef.current.value] = uusRef.current.value;
        uuendaPoed(poed.slice());
    }

    const [valitudPood, uuendaValitudPood] = useState ("")

    // const vaata = (index) => {
    //     // console.log(pood); // logib meie browseri konsooli (parem klops . inspect . console)
    //    uuendaValitudPood(poed[index]); 
    // }

    const vaata = (pood) => {
        console.log(pood);
        uuendaValitudPood(pood); 
    }

   return ( 
   <div>

    <button onClick={sorteeri}> Sorteeri A-Z</button>
    <button onClick={tyhjenda}>Tuhjenda</button> 
    <button onClick={filtreeri}>Jäta vaid "mäe"-d sisaldavad alles</button>
    <button onClick={muudaK6iki}>Muuda kõiki</button>
        <br/> 
        <br/> 
    <label>Uus pood</label> <br/>
    <input ref={poodRef} type="text" /> <br/>
    <button onClick={lisaPood}>Lisa uus pood</button> <br/>

{/* .map on arrayde kuvamiseks HTMLis, siis teen selle funktsionaalsuse, mis on sisus tskkel
tehakse noole paremat poolt nii mitu korda kui mitu komaag eristatud elementi mul on
Elemendid on need ["Mustamäe", "Õismäe", "Kristiine", "Lasnamae", "Põhja-Tallinn", "Kesklinn"] */}

 {/* .map puhul tuleb key={} panna esimese divi / img jne sisse */}


        {poed.map((pood,index) => 
            <div key={pood}>{pood}
                <button onClick={() => kustuta(index)}>X</button>  
                <button onClick={() => vaata(pood)}>Vaata</button>  
            </div>) } 

        <br/>
    <div>Poode on {poed.length} tk</div>
        <br/>
    <div>Sinu valitud pood: {valitudPood}</div>
        <br/>
    <label>Järjekorranumber</label>  
        <input ref={indexRef} type="text" />  <br/> 
   <label>Uus väärtus</label> 
        <input ref={uusRef} type="text" /><br/>
 
    <button onClick={muudaPood}>Muuda pood</button> <br/>


    {/* <div>Mustamae</div>
    <div>Kristiine</div>
    <div>Lasnamae</div>                    <<< seda koike pole vaja kui on olemas list/array
    <div>Pohja-Tallinn</div>
    <div>Kesklinn</div> */}







    </div> );
}


    // tumesinine - HTML-s on tag - <div>, <button>, <img> jne, JS-s definitsioonid: function, const, =>
    // kollane - funktsioon ja tal on enamustel juhtudel sulud lõpus    .startsWith("+372")   .sort()
    // tavaline sinine - meie tehtud const muutuja
    // helesinine - HTMLs on tag-i atribuut, className="", alt="", onClick="", src="", 
    //                          JS-s: muutujad, kus pole const ees
    // punane/oranž - sõnaline väärtus
    // valge - HTMLs väljakuvamine

// [] - kandilised sulud - array jaoks, useState loomise jaoks
// {} - koodiblokk JS-s, HTMLs JavaSripti tegemist
// () - funktsiooni sulud
// () => {} - funktsiooni loomine
// && - kui vasakul pool on tõsi, siis näita paremat
// || - kui vasakul pool on tühjus, siis võta parem
// === - vasak pool võrdub parema poolega
// ;   - rea lõpetamiseks (pole kohustuslik)
// ,   - array sees elementide eristamiseks
// .   - kutsun selle muutuja funktsionaalsuse välja
// =   - annan muutujale väärtust


export default Poed;
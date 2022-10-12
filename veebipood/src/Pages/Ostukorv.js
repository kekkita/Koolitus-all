import {useState} from "react"

function Ostukorv() {
    const [ostukorv, uuendaOstukorv] = useState (JSON.parse(localStorage.getItem("ostukorv")) || [] );
    
    const kustuta = (index) => {
        ostukorv.splice(index,1); 
        uuendaOstukorv(ostukorv.slice()); // salvestus HTML/is
        localStorage.setItem("ostukorv", JSON.stringify(ostukorv)); // salvestus LocalStorages
    }

    const tyhjenda = () => {
        uuendaOstukorv([]);
        localStorage.setItem("ostukorv", JSON.stringify([]));
    }

    const arvutaOstukorviKogusumma = () => {
        let kogusumma = 0;
        // {nimi: "", hind 5} => 5 = 0 + 5
        // {nimi: "", hind 2} => 7 = 5 + 2
        // {nimi: "", hind 10} => 17 = 7 + 10
        ostukorv.forEach(element => kogusumma = kogusumma + element.hind );
        return kogusumma.toFixed(2); //HTMLi
    }

    return (  
        <div>
            { ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} eset</div>}
            { ostukorv.length === 0 && <div>Ostukov on tühi</div>}
            { ostukorv.length > 0 && <button onClick={tyhjenda}>Tyhjenda</button>}
            {ostukorv.map((element,index) => 
              <div key={index}>
                <img src={element.pilt} alt=""/>
                <div>{element.nimi}</div>
                <div>{element.hind} €</div>
                <button onClick={() => kustuta(index)}>x</button>
              </div>)}
              <div>Kokku {arvutaOstukorviKogusumma()} €</div>
        </div>
    );
}

export default Ostukorv;
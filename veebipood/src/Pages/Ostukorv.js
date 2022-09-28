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

    return (  
        <div>

            { ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} eset</div>}
            { ostukorv.length === 0 && <div>Ostukov on tühi</div>}

            <button onClick={tyhjenda}>Tühjenda</button>
            {ostukorv.map((element,index) => 
              <div key={index}>
                <span>{element}</span>
                <button onClick={() => kustuta(index)}>x</button>
              </div>)}
        </div>
    );
}

export default Ostukorv;
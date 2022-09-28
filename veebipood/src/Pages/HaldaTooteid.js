import {useState} from 'react'

function HaldaTooteid() {
    const [tooted, uuendaTooted] = useState (JSON.parse (localStorage.getItem("tooted")))  || [];

    const kustuta = (J2rjekorraNumber) => {
        tooted.splice(J2rjekorraNumber,1);
        uuendaTooted(tooted.slice()); // salvestus HTML/is
        localStorage.setItem("tooted", JSON.stringify(tooted));
    }


    return ( 
    <div>

        {tooted.map((element, index) => 
        <div key = {element}>
            <div>{element}</div>
            <button onClick={() => kustuta(index)}>Kustuta</button>
            <button>Muuda</button>
        </div>)}




    </div> );


}

export default HaldaTooteid;
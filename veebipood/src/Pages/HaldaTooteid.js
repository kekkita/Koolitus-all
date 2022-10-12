import {useState} from 'react'
import { Link } from 'react-router-dom';


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
        <div key = {element.nimi}>
            <img src={element.pilt} alt=""/>
            <div>{element.nimi}</div>
            <div>{element.hind} €</div>
            <button onClick={() => kustuta(index)}>Kustuta</button>
            <Link to={"/muuda/" + index}>
            <button>Muuda</button>
            </Link>
        </div>)}




    </div> );


}

export default HaldaTooteid;
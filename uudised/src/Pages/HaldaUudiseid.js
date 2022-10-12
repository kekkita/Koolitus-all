import {useState} from 'react';
import { Link } from 'react-router-dom';

function HaldaUudiseid() {

    const [uudised, muudaUudised] = useState (JSON.parse (localStorage.getItem("uudised"))) || [];


    const kustuta = (index) => {
        uudised.splice(index,1);
        muudaUudised(uudised.slice()); // salvestus HTML/is
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }


    return ( 
    <div className="uudispage">

        <div>{uudised.map((element, index) => 
        <div key = {element}>
            <br />
            <div>{element}</div> 
            <button onClick={() => kustuta(index)}> X</button>
            <Link to={"/muudaUudis/" + index}>
            <button>Muuda</button>
            </Link>
            </div>)}
            </div>


    </div>);
}

export default HaldaUudiseid;
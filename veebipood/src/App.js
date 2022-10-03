// ctrl + ä on kommentaaride lisamiseks
// (saan edit -> toggle line comment)
// kommentaarid ei m]juta koodi
// alt= "" <--- alternative text
// 1. kui pildi aadress (src="") on vigane, siis n'idatakse pildi asemel
// alternative texti
// 2. pimedad ei näe pilte
// 3. arendajad (server ei tööta) näevad ka

import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import {useState} from "react";
import { useRef } from 'react';
import Avaleht from './Pages/Avaleht';
import LisaToode from './Pages/LisaToode';
import Meist from './Pages/Meist';
import Ostukorv from './Pages/Ostukorv';
import Seaded from './Pages/Seaded';
import Poed from './Pages/Poed';
import HaldaTooteid from './Pages/HaldaTooteid';
import MuudaToode from './Pages/MuudaToode';
import YksikToode from './Pages/YksikToode';


function App() {

  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef(123);

  const logiSisse = () => {
    if (paroolRef.current.value === "123") {
    muudaSisselogitud("jah");
    muudaSonum("Oled sisse logitud");
    muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud")
    } else {
    muudaSonum("Vale parool");
    }
  }


  return (
<div>
<br />
<div className="App">
<div>{sonum}</div>
{sisselogitud === "ei" && <div >
  <label>Kasutajanimi </label> 
  <input ref={kasutajaNimiRef} type="text"/>
  <br />
  <label >Parool </label>
  <input ref={paroolRef} type="password"/>
  <br /> 
</div>}

{sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
{sisselogitud === "jah" && <button onClick={() => muudaSisselogitud("ei")}>Logi välja</button>}

<br />
<br />
<img className="pilt" alt="Nobe auto pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg"/>
<br />
<button className="nupp">Vajuta mind</button>
<Link to="/">
  <button>Avalehele</button>
</Link>
<Link to="/LisaToode">
  <button>Lisa toode</button>
</Link>
<Link to="/meist">
  <button>Meist</button>
</Link>
<Link to="/ostukorv">
  <button>Ostukorv</button>
</Link>
<Link to="/seaded">
  <button>Seaded</button>
</Link>
<Link to="/poed">
  <button>Poed</button>
</Link>
<Link to="/halda">
  <button>Halda tooteid</button>
</Link>

<Routes>
<Route path="" element={<Avaleht/>} />
<Route path="LisaToode" element={<LisaToode/>} />
<Route path="meist" element={<Meist/>} />
<Route path="ostukorv" element={<Ostukorv/>} />
<Route path="seaded" element={<Seaded/>} />
<Route path="poed" element={<Poed/>} />
<Route path="halda" element={<HaldaTooteid/>} />
<Route path="muuda/:index" element={<MuudaToode/>} />
<Route path="toode/:j2rjekorraNumber" element={<YksikToode/>} />
<Route path="*" element={ <div>Lehekülge ei leitud</div> } />
</Routes>

<div></div>
<div></div>
</div>
</div>
  );
}
export default App;

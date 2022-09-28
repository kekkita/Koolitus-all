import { useState } from "react";


function Meist() {
const [kontakt, n2itakontakt] = useState("");

const [msg, m22raMSG] = useState("Vali tegevus");


    return (<div>
 <div className="headertext"> See on meist leht, nähtav http://localhost:3000/meist </div> 

 <div className="pagetextgroup">
    <br />
    <br />
    <div> <h1>Meie töötajad:</h1></div>
    <br />
    <div>Töötaja A</div>
    <div>positsioon A</div>
    <button className="nupp" onClick={() => n2itakontakt("email1@fakenews.com, +372 0000 0001")}>Võta ühendust</button>
    <br />     <br />      <br /> 
    <div >Töötaja B</div>
    <div>positsioon B</div>
    <button className="nupp" onClick={() => n2itakontakt("email2@fakenews.com, +372 0000 0002")}>Võta ühendust</button>
    <br />     <br />      <br /> 
    <div>Töötaja C</div>
    <div>positsioon C</div>
    <button className="nupp" onClick={() => n2itakontakt("email3@fakenews.com, +372 0000 0003")}>Võta ühendust</button>
    <br />     <br />      <br /> 
    <div>Töötaja D</div>
    <div>positsioon D</div>
    <button className="nupp" onClick={() => n2itakontakt("email4@fakenews.com, +372 0000 0004")}>Võta ühendust</button>
    <br />     <br />      <br /> 
    {kontakt !== "" &&  <div> Tema kontakt: {kontakt} </div> }
</div>

<div className="headertext"> <h3>HOMEWORK BELOW</h3> </div>
<div className="pagetextgroup">
<div> {msg} </div>
<button onClick={() => m22raMSG("Selleks saada meile email email@email.com")}>Kandideeri tööle</button>
<button onClick={() => m22raMSG("Meil on X meeskonnaliiget, kelle info ilmub siia peatselt")}>Vaata meie töötajaid</button>
<button onClick={() => m22raMSG("Selleks mine lehele Kontakt")}>Võta meiega ühendust</button>
</div>

    <br />
    <br />
    <br />
    <br />
    </div>);
}

export default Meist;
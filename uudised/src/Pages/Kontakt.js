import {useState} from "react";


function Kontakt() {
    const [n2itaTelA, muudaN2itaTelA] = useState (false)
    const [n2itaTelB, muudaN2itaTelB] = useState (false)
    const [n2itaTelC, muudaN2itaTelC] = useState (false)

    const [aadress, m22raAadress] = useState("AADRESS");
    const [telefon, m22raTelefon] = useState("+372 0000 0000");
    const [email, m22raEmail] = useState("email@email.com");
    const [ingliseKeelne, m22raInglisekeelne] = useState("ei");
    const ingliseks = () => {
        m22raAadress ("London");
        m22raTelefon ("+44 0000 0000")
        m22raEmail ("london@london.uk.co")
        m22raInglisekeelne ("jah")
    }


return (  <div>
<div className="headertext"> See on kontaktide leht, nähtav http://localhost:3000/kontakt </div>
<br />
<br />
<div className="pagetextgroup">
<br />
<br />
    <div className="leftpagetext">Võta meiega ühendust:</div>
    <br />
    <div onClick={() => muudaN2itaTelA(!n2itaTelA)} className="leftpagetext">Keskus A</div>
    { n2itaTelA && <div className="leftpagetext">+372 0000 0000</div> }
    <div className="leftpagetext">Aadress 1, Linn 66666</div>
    <br />
    <div onClick={() => muudaN2itaTelB(!n2itaTelB)} className="leftpagetext">Keskus B</div>
    { n2itaTelB && <div className="leftpagetext">+372 0000 0000</div> }
    <div className="leftpagetext">Aadress 2, Linn 66666</div>
    <br />
    <div  onClick={() => muudaN2itaTelC(!n2itaTelC)} className="leftpagetext">Keskus C</div>
    { n2itaTelC && <div className="leftpagetext">+372 0000 0000</div> }
    <div className="leftpagetext">Aadress 3, Linn 66666</div>
    
    <br />
    <br />
    <br />
    <br />
    <br />

<div > <h3>HOMEWORK BELOW</h3> </div>
    <div>{aadress}</div>
    <div>{telefon}</div>
    <div>{email}</div>
    <button onClick={ingliseks}>Muuda Inglise keelseks</button>
    {ingliseKeelne === "jah" && <div>Leht on inglise keelne</div>}
    {/* kui |ingliseKeelne| v6rdub |"jah"| siis n2ita  |Leht on inglise keelne| */}
</div>
    </div> );

    

}

export default Kontakt;
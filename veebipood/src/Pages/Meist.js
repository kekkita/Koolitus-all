import {useState} from "react"

function Meist() {
    const [tel, uuendaTel] = useState(localStorage.getItem("tel") || " numbrit ei ole veel sisestatud");
    const email = localStorage.getItem("email") || " emaili ei ole veel sisestatud";
    const [n2itaEmail, uuendaN2itaEmail] = useState(false);

    return (  
    <div>   
        <div>Meie telefoninumber:  {tel}  
            { tel.startsWith("+372") === false && localStorage.getItem("tel") &&
                <button onClick={() => uuendaTel("+372" + tel)}>
                    Lisa Eesti suunakood 
                </button>}
           </div>
        <div>Meie e-mail:   { n2itaEmail === true && email} 
                            { n2itaEmail === false && localStorage.getItem("email") === "" && email}
            {n2itaEmail === false && localStorage.getItem("email") &&
            <button onClick={() => uuendaN2itaEmail(true)}> Näita emaili </button>}
            </div>




    </div>);
}

export default Meist;

// const [n2itaEmail, uuendaN2itaEmail] = useState(false);
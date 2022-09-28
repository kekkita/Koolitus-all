import {useState} from "react"
import {useRef} from "react"

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("veebilehe_keel")  || "est" );
    const telRef = useRef ();
    const emailRef = useRef ();

  
    const muudaKeelEst = () => {
        uuendaKeel("est");
        localStorage.setItem("veebilehe_keel", "est");
    }
    const muudaKeelEng = () => {
        uuendaKeel("eng");
        localStorage.setItem("veebilehe_keel", "eng");
    }
    const muudaKeelRus = () => {
        uuendaKeel("rus");
        localStorage.setItem("veebilehe_keel", "rus");
    }
    const sisestaTel = () => {
        localStorage.setItem("tel", telRef.current.value);
    }
    const sisestaEmail = () => {
        localStorage.setItem("email", emailRef.current.value);
    }

    // |kujundus| on muutuv v22rtus
    const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus"));
    const tumeLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "dark_mode");
        muudaKujundus("dark_mode")
    } 
    const heleLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "light_mode");
        muudaKujundus("light_mode")
    }
    const colorLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "color_mode");
        muudaKujundus("color_mode")
    }

    return ( 
    <div>
        <label>Meie telefoninumber </label>
        <input ref={telRef} defaultValue={localStorage.getItem("tel")} type="text" />
        <button onClick={sisestaTel}>Sisesta</button>
        <br />
        <label>Meie email </label>
        <input ref={emailRef} defaultValue={localStorage.getItem("email")} type="text" />
        <button onClick={sisestaEmail}>Sisesta</button>
        <br />


        <button onClick={muudaKeelEst} > est </button>
        <button onClick={muudaKeelEng} > eng </button>
        <button onClick={muudaKeelRus} > rus </button>
        { keel === "est" && <div>Leht on eesti keelne</div>}
        { keel === "eng" && <div> leht on inglise keelne</div>}
        { keel === "rus" && <div>leht on vene keelne</div>}

        <button onClick={tumeLeht}>Tume leht</button>
        <button onClick={heleLeht}>Hele leht</button>
        <button onClick={colorLeht}>Color leht</button>
        {kujundus === "dark_mode" && <div>TUME LEHT</div> }
        {kujundus === "light_mode" && <div>HELE LEHT</div> }
        {kujundus === "color_mode" && <div>COLOR LEHT</div> }
        {/* kui |kujundus| SISU v6rdub |dark_mode| siis n2ita |TUME LEHT| */}
    </div> );
}

export default Seaded;
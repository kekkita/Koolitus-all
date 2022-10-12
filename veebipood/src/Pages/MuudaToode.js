import { useRef } from "react";
import { useParams } from "react-router-dom";
// import {useState, useRef} from "react"; <-- HTMLi lugemine, k2sitlus
// import {Link, Route, Routers, useParams} from "react-router-dom"; <-- navigeerimisega seotud 

function MuudaToode() {
    // Route path="muuda:INDEX"
    // const {INDEX } = useParams();
    const { index } = useParams();
    const tooted = JSON.parse (localStorage.getItem("tooted"))  || [];  // votan koik tooted
    const leitudToode = tooted[index];                                  // ja otsin selle j2rjekorranumbriga yles
    // const muutujaKuhuV6etavToodeL2heb = ["chicken", "cats", "dogs"][0];
    // console.log(muutujaKuhuV6etavToodeL2heb)     expected output: "chicken"
    const nimiRef = useRef();
    const hindRef = useRef();
    const piltRef = useRef();

    const uuendaToode = () => {
// ["chicken", "cats", "dogs"][0] = "bison";
// console.log() --> ["bison", "cats", "dogs"]
    tooted[index] = {
        "nimi": nimiRef.current.value,
        "hind": Number(hindRef.current.value),
        "pilt": piltRef.current.value
        };
    localStorage.setItem("tooted", JSON.stringify(tooted));
    }

    return ( 
        <div><br/>
        <label>Toote nimi</label> <br/>
        <input ref={nimiRef} type="text" defaultValue={leitudToode.nimi} /> <br/>
        <label>Toote hind</label> <br/>
        <input ref={hindRef} type="number" defaultValue={leitudToode.hind} /> <br/>
        <label>Toote pilt</label> <br/>
        <input ref={piltRef} type="text" defaultValue={leitudToode.pilt} /> <br/>
        <button onClick={uuendaToode}>Muuda toode</button> <br/>
        </div> );
}

export default MuudaToode;
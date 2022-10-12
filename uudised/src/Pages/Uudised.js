import {Link} from "react-router-dom";

function Uudised() {

    const uudised = JSON.parse (localStorage.getItem("uudised")) || [];

    return (<div>
        <div className="headertext"> See on uudiste leht, nähtav http://localhost:3000/uudised </div>
                <br/>
                <br/>
            <div className="pagetextgroup">
                 {uudised < 1 && <div className="pagetext">Hetkel uudiseid ei ole, lisame õige pea.</div>}
            </div>
                <br/>
            {uudised.map((element,index) => 
                    <div className="pagetext" key = {element}><br/><br/>
                        <Link to={"/uudis/" + index}>
                        <div >{element}</div></Link>
                        </div>)}
                        

    </div>);
}
export default Uudised;
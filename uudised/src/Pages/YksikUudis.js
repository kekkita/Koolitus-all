import { useParams } from "react-router-dom";

function YksikUudis() {
const {index} = useParams();
const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
const leitudUudis = uudisedLS[index];

    return ( <div>
    
    <br/>
    <div className="pagetext">{leitudUudis}</div>
   
    
    </div> );
}

export default YksikUudis;
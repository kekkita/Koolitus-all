
import { Routes } from 'react-router-dom';
import {Link, Route} from 'react-router-dom';
import './App.css';
import Avaleht from './Pages/Avaleht';
import Kontakt from './Pages/Kontakt';
import Meist from './Pages/Meist';
import Uudised from './Pages/Uudised';
import LisaUudis from './Pages/LisaUudis';
import HaldaUudiseid from './Pages/HaldaUudiseid';


function App() {



  return (
    <div>

<Link to="/">
<img className="banner" src="https://thumbs.dreamstime.com/b/fake-news-show-logo-template-bubble-speech-blue-background-fragments-particles-vector-illustration-111766511.jpg" alt=""/>
</Link>

<div className="nav-buttons">
<Link to="/">
  <button className="nupp">Avaleht</button>
</Link>
<Link to="/uudised">
  <button className="nupp">Uudised</button>
</Link>
<Link to="/kontakt">
  <button className="nupp">Kontakt</button>
</Link>
<Link to="/meist">
  <button className="nupp">Meist</button>
</Link>
<Link to="/lisauudis">
  <button className="nupp">Lisa uudis</button>
</Link>
<Link to="/halda">
  <button className="nupp">Halda uudiseid</button>
</Link>

</div>


      <Routes>
      <Route path="" element={<Avaleht/>} />
      <Route path="Uudised" element={<Uudised/>} />
      <Route path="Kontakt" element={<Kontakt/>} />
      <Route path="Meist" element={<Meist/>} />
      <Route path="lisauudis" element={<LisaUudis/>} />
      <Route path="halda" element={<HaldaUudiseid/>} />
      {/* <Route path="muuda/:index" element={<MuudaUudis/>} /> */}
      </Routes>
    </div>
  );
}

export default App;

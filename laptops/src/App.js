import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuteid from './pages/VaataArvuteid';


function App() {
  return (
    <div>


  <Link to="/">
  <button className="nupp">Avalehele</button>
  </Link>
  <Link to="/all">
  <button className="nupp">Vaata sülearvuteid</button>
  </Link>
  <Link to="/add">
  <button className="nupp">Lisa sülearvuti</button>
  </Link>




  <Routes>
      <Route path="" element={ <Avaleht/>}/>
      <Route path="all" element={<VaataArvuteid/>}/>
      <Route path="add" element={<LisaArvuti/>}/>
  </Routes>




    </div>
  );
}

export default App;

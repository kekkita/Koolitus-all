import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaTegelane from './pages/LisaTegelane';
import ValitudTegelased from './pages/ValitudTegelased';


function App() {
  return (
    <div>

        <div>
          <Link to="/">
          <button>Avalehele</button>
          </Link>
          <Link to="/LisaTegelane">
          <button>Lisa tegelane</button>
          </Link>
          <Link to="/ValitudTegelased">
          <button>Valitud tegelased</button>
          </Link>

          <Routes>
              <Route path="/" exact element={<Avaleht/>}/>
              <Route path="/LisaTegelane" exact element={<LisaTegelane/>}/>
              <Route path="/ValitudTegelased" exact element={<ValitudTegelased/>}/>
          </Routes>
        </div>

    </div>
  );
}

export default App;

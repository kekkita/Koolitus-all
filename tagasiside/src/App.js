import {Link, Route, Routes} from 'react-router-dom'
import './App.css';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';


function App() {
  return (
    <div>
 <Link to="/">
  <button>Avalehele</button>
  </Link>
  <Link to="/tagasiside">
  <button>Tagasiside lehele</button>
  </Link>
  <Link to="/tagasisideAndjad">
  <button>Tagasiside andjad</button>
  </Link>

  <Routes>
      <Route path="/" exact element={<div>Tere</div>}/>
      <Route path="/tagasiside" exact element={<Tagasiside/>}/>
      <Route path="/tagasisideAndjad" exact element={<TagasisideAndjad/>}/>
  </Routes>
    </div>
  );
}

export default App;

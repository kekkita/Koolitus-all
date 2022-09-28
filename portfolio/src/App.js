import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';

// tuleks avada ctrl + shift + p abil avada menüü
// Open User Settings (JSON)

function App() {
  return (
    <div className="App">
     <img className="main-picture" src="https://cache.desktopnexus.com/thumbseg/2352/2352263-bigthumbnail.jpg" alt="fantasy art with starry sky"/>
     
     <div className="nav-pics">
      <Link to="work">
      <img className="moon" src="https://c4.wallpaperflare.com/wallpaper/3/715/623/crescent-moon-fantasy-girl-moon-fantasy-art-wallpaper-preview.jpg" alt=""/>
      </Link>
      <Link to="hobbies">
      <img className="sun" src="https://artfiles.alphacoders.com/111/111123.jpg" alt=""/>
      </Link>
      <Link to="courses">
      <img className="water" src="https://images.hdqwalls.com/download/girl-waterfall-fantasy-art-1600x1200.jpg" alt=""/>
      </Link>
     </div>




    <Routes>
      <Route path="Work" element={<Work />}/>
      <Route path="Hobbies" element={<Hobbies />}/>
      <Route path="Courses" element={<Courses />}/>
    </Routes>


    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div className="social-button" href="https://www.linkedin.com/in/ellake/">
      <img src="/linkedin.png" alt=""/>
      <span>LinkedIn</span>
     </div>
     <div className="social-button" href="https://www.facebook.com/Drupsu/">
      <img src="/facebook.png" alt=""/>
      <span>Facebook</span>
     </div>
     <br />
    </div>
 
  );
}

export default App;

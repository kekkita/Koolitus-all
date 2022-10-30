import { Routes, Route } from "react-router-dom";
import './App.css';
import Cart from './pages/Cart';
import Contacts from './pages/Contact';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div> 
      <NavigationBar />
      
      <Routes>
        <Route path="" element = { <HomePage/> } />
        <Route path="tooted" element = { <Products/> } />
        <Route path="kontakt" element = { <Contacts/> } />
        <Route path="ostukorv" element = { <Cart/> } />
      </Routes>
    </div>
  );
}

export default App;

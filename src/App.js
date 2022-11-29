import './App.css';
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Header from './Header';
import NavBar from './NavBar';
import Butterflies from './pages/Butterflies';
import ButterflyList from './pages/ButterflyList';
import Butterfly from './pages/Butterfly';
import NewButterfly from './pages/NewButterfly';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  const [showNav, setShowNav] = useState(false);

  return (
  <BrowserRouter>
  <div className="App">
  {showNav && <NavBar /> }
  <div id="page-body">
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/:id" element={<NewButterfly  />} />
    <Route path="/" element={<Login />}  />
    <Route path="/butterflies" element={<Butterflies />} />
    <Route path="/butterfly/:id" element={<Butterfly />} />    
    <Route path="/list" element={<ButterflyList />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
  </div>
  </div>
</BrowserRouter>
  );
}

export default App;

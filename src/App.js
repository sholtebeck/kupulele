import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Header from './Header';
import Butterflies from './pages/Butterflies';
import ButterflyList from './pages/ButterflyList';
import NewButterfly from './pages/NewButterfly';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/butterflies" element={<Butterflies />} />
    <Route path="/list" element={<ButterflyList />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/:id" element={<NewButterfly />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;

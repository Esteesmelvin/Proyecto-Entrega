import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/Login';
import Feed from './componentes/Feed';
import Amigos from './componentes/amigos';
import Guardados from './componentes/Guardados';
import './index.css';
import Favoritos from './componentes/Favoritos';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/amigos" element={<Amigos />} />
          <Route path="/Guardados" element={<Guardados/>} />
          <Route path="/Favoritos" element={<Favoritos/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Habitat from './components/Habitat';
import Alimentacao from './components/Alimentacao';
import Comportamento from './components/Comportamento';
import Curiosidades from './components/Curiosidades';
import Conservacao from './components/Conservacao';
import Galeria from './components/Galeria';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/habitat" element={<Habitat />} />
          <Route path="/alimentacao" element={<Alimentacao />} />
          <Route path="/comportamento" element={<Comportamento />} />
          <Route path="/curiosidades" element={<Curiosidades />} />
          <Route path="/conservacao" element={<Conservacao />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Capivaras</h1>
      <nav className="header-nav">
        <ul>
          <li> <Link to="/home">Home</Link> </li>
          <li> <Link to="/habitat">Habitat</Link> </li>
          <li> <Link to="/alimentacao">Alimentação</Link> </li>
          <li> <Link to="/comportamento">Comportamento</Link> </li>
          <li> <Link to="/curiosidades">Curiosidades</Link> </li>
          <li> <Link to="/conservacao">Conservação</Link> </li>
          <li> <Link to="/galeria">Galeria</Link> </li>
          <li> <Link to="/quiz">Quiz</Link> </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

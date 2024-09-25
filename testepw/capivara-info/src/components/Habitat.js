import React from 'react';

function Habitat() {
  return (
    <div>
      <h2>Habitat Natural das Capivaras</h2>
      <div className="card">
        <p>As capivaras são encontradas em diversos habitats na América do Sul, principalmente em áreas próximas a corpos d'água como rios, lagos e pântanos. Sua distribuição inclui:</p>
        <ul>
          <li>Florestas tropicais</li>
          <li>Savanas</li>
          <li>Áreas alagadas</li>
          <li>Margens de rios e lagos</li>
        </ul>
        <img src="https://capivarainfo.com/images/capivara-habitat.jpg" alt="Capivaras em seu habitat natural próximo a um rio com vegetação exuberante" className="capivara-img" width="800" height="500" />
      </div>
    </div>
  );
}

export default Habitat;
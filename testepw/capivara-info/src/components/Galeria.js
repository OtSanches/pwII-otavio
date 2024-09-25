import React from 'react';

function Galeria() {
  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div className="card">
        <p>Explore nossa coleção de imagens encantadoras de capivaras em diferentes situações e habitats.</p>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          <img src="https://capivarainfo.com/images/capivara-1.jpg" alt="Capivara descansando à beira d'água" className="capivara-img" width="300" height="200" />
          <img src="https://capivarainfo.com/images/capivara-2.jpg" alt="Filhotes de capivara brincando" className="capivara-img" width="300" height="200" />
          <img src="https://capivarainfo.com/images/capivara-3.jpg" alt="Capivara nadando em um lago" className="capivara-img" width="300" height="200" />
          <img src="https://capivarainfo.com/images/capivara-4.jpg" alt="Capivara interagindo com pássaros" className="capivara-img" width="300" height="200" />
        </div>
      </div>
    </div>
  );
}

export default Galeria;

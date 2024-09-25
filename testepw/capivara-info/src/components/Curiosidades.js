import React from 'react';

function Curiosidades() {
  return (
    <div>
      <h2>Curiosidades Fascinantes sobre Capivaras</h2>
      <div className="card">
        <ul>
          <li>São os maiores roedores do mundo, podendo pesar até 65 kg</li>
          <li>Possuem membranas entre os dedos, sendo excelentes nadadoras</li>
          <li>Podem ficar submersas na água por até 5 minutos</li>
          <li>Têm uma relação simbiótica com pássaros que se alimentam de seus carrapatos</li>
          <li>São consideradas "sofás vivos" da natureza devido à sua tolerância com outros animais</li>
        </ul>
        <img src="https://capivarainfo.com/images/capivara-curiosa.jpg" alt="Capivara com expressão curiosa olhando diretamente para a câmera" className="capivara-img" width="800" height="500" />
      </div>
    </div>
  );
}

export default Curiosidades;

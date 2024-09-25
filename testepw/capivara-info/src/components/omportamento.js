import React from 'react';

function Comportamento() {
  return (
    <div>
      <h2>Comportamento Social das Capivaras</h2>
      <div className="card">
        <p>As capivaras são animais altamente sociais, apresentando comportamentos interessantes como:</p>
        <ul>
          <li>Vivem em grupos de 10 a 100 indivíduos</li>
          <li>Comunicam-se através de vocalizações e linguagem corporal</li>
          <li>Praticam allogrooming (limpeza mútua) para fortalecer laços sociais</li>
          <li>Demonstram hierarquia social bem definida</li>
          <li>Cuidado parental compartilhado entre membros do grupo</li>
        </ul>
        <img src="https://capivarainfo.com/images/capivara-grupo.jpg" alt="Grupo de capivaras interagindo e descansando juntas" className="capivara-img" width="800" height="500" />
      </div>
    </div>
  );
}

export default Comportamento;

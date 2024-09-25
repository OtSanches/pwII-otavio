import React from 'react';

function Alimentacao() {
  return (
    <div>
      <h2>Hábitos Alimentares das Capivaras</h2>
      <div className="card">
        <p>As capivaras são herbívoras e têm uma dieta variada que inclui:</p>
        <ul>
          <li>Gramíneas e plantas aquáticas</li>
          <li>Brotos e folhas de árvores</li>
          <li>Casca de árvores</li>
          <li>Frutas e legumes (ocasionalmente)</li>
        </ul>
        <p>Curiosidade: As capivaras praticam cecotrofia, ingerindo suas próprias fezes para absorver nutrientes adicionais!</p>
        <img src="https://capivarainfo.com/images/capivara-comendo.jpg" alt="Capivara comendo grama em um campo verde" className="capivara-img" width="800" height="500" />
      </div>
    </div>
  );
}

export default Alimentacao;

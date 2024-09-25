import React from 'react';

function Conservacao() {
  return (
    <div>
      <h2>Conservação e Proteção das Capivaras</h2>
      <div className="card">
        <p>Embora não estejam atualmente ameaçadas de extinção, as capivaras enfrentam desafios. Medidas de conservação incluem:</p>
        <ul>
          <li>Proteção de áreas úmidas e habitats ribeirinhos</li>
          <li>Regulamentação da caça e controle populacional em áreas urbanas</li>
          <li>Educação ambiental sobre a importância ecológica das capivaras</li>
          <li>Pesquisas sobre o impacto das mudanças climáticas nas populações</li>
          <li>Criação de corredores ecológicos para facilitar o deslocamento</li>
        </ul>
        <img src="https://capivarainfo.com/images/capivara-conservacao.jpg" alt="Capivara em área de preservação ambiental com placa de proteção" className="capivara-img" width="800" height="500" />
      </div>
    </div>
  );
}

export default Conservacao;

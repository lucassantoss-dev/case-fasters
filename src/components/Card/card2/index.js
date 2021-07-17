import React from 'react';
import './style.css'
import foto2 from "../../../assets/foto2.png"

function Card2() {
 return (
<div className="card2-container">
  <div className="card2">
      <div className="img">
         <img class="imgcard2" align="left" src={foto2} alt="Foto" />
      </div>
      <div className="info">
         <p>“Faço roupas com o Renee Trajar há mais de duas décadas, o
            serviço é impecável em todos os detalhes, desde a costura ao
            caimento. O Renee tem uma equipe de mestre!”
      </p>
         <h2>Nelson Garey</h2>
         <h3>Advogado | Nelson Garey Advogados Associados</h3>
      </div>
  </div>
</div>
 );
}

export default Card2;
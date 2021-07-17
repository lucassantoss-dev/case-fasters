import React from "react";
import "./style.css";
import foto6 from "../../../assets/foto6.png";
import  Button  from "../../Button";

function Card6() {
  return (
    <div className="card6-container">
      <div className="cards">
        <div className="info3">
          <div className="container">
            <h2>ALFAIATARIA</h2><br></br>
            <h4>- TOTALMENTE FEITO A MÃO SOB MEDIDA</h4><br></br>
            <div className="container">
                <li>Fio Super 120 e 130</li>
                <li>Lã fria Australiana</li>
                <li>Botões Importados</li>
                <li>Ternos e Calças</li>
                <li>Paletós e Smokings</li>
                <li>Sociais e Esportivosv</li>
                <Button>Quero um orçamento</Button>
            </div>
          </div>
        </div>
        <div className="imgcard6">
          <img src={foto6} alt="Foto" />
        </div>
      </div>
    </div>
  );
}

export default Card6;

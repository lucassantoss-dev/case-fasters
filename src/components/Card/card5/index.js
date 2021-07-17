import React from "react";
import "./style.css";
import foto5 from "../../../assets/foto5.png";
import  Button  from "../../Button";

function Card5() {
  return (
    <div className="card5-container">
      <div className="cards">
      <div className="imgcard5">
          <img src={foto5} alt="Foto" />
        </div>
        <div className="info2">
          <div className="container">
            <h2>CAMISARIA</h2><br></br>
            <h4>CONFECCIONADAS ARTESANALMENTE</h4><br></br>
            <div className="container">
              <ul>
                <li>100% Algodão</li>
                <li>Monograma</li>
                <li>Slim</li>
              </ul>
              <ul>
                <li>Nacionais e Importadas</li>
                <li>Tradicionais e Esportivas</li>
                <li>Casamentos</li>
              </ul>  
                <Button>Quero um orçamento</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card5;

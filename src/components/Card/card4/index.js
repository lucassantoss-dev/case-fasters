import React from "react";
import "./style.css";
import foto4 from "../../../assets/foto4.png";

function Card4() {
  return (
    <div className="card4-container">
      <div className="cards">
        <div className="info1">
          <div className="container">
            <h2>CONDIÇÃO IMPERDÍVEL</h2>
            <h3>Compre hoje e garanta:</h3>
            <div className="container">
              <p>
                - 12% de desconto e pagamento em até{" "}
                <strong>3x sem juros;</strong>
              </p>
              <p>
                - Até <strong>10 meses</strong> para confeccionar sua roupa. Não
                se preocupe se suas medidas aumentaram ou diminuíram, estará
                sempre elegante;
              </p>
              <p>
                - Condição muito especial por <strong>tempo limitado;</strong>
              </p>
              <p>
                - 12% de desconto e pagamento em até{" "}
                <strong>3x sem juros;</strong>
              </p>
              <p>
                - Poder presentear alguém com uma roupa de alta costura,{" "}
                <strong>exclusiva.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="imgcard4">
          <img src={foto4} alt="Foto" />
        </div>
      </div>
    </div>
  );
}

export default Card4;

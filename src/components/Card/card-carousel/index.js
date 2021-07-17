import React from "react";
import fundo from "../../../assets/fundo.jpg"
import carousel1 from "../../../assets/carousel1.png";
import carousel2 from "../../../assets/carousel2.png";
import carousel3 from "../../../assets/carousel3.png";
import carousel4 from "../../../assets/carousel4.png";
import { Carousel } from "react-bootstrap";

function CardCarousel() {
  return (
    <div className="containerCar">
      <div>
        {/* <div class="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div class="col-sm-12 btn btn-warning">
              How To Use Bootstrap Carousel In ReactJS
            </div>
          </div>
        </div> */}

        <div className="fluid">
          <Carousel>
            <Carousel.Item style={{ height: "470px" }}>
              <img
                style={{ height: "470px" }}
                className="d-block w-100"
                src={fundo}
              />

              <Carousel.Caption>
                <img 
                    className="imagem"
                    src={carousel1}
                />
                <p>"Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de</p>
                <p>meu pai, que já tem uma história de décadas com o querido Renee.</p>
                <p>O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados</p>
                <p>Colocam o Renee Trajar em um patamar acima dos demais no ramo."</p>
                <h3>William H. M. Garey</h3>
                <h3>Advogado | Nelson Garey Advogados e Associados</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "470px" }}>
              <img
                style={{ height: "470px" }}
                className="d-block w-100"
                src={fundo}
              />

              <Carousel.Caption>
                <img 
                    className="imagem"
                    src={carousel2}
                />
                <p>"Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos</p>
                <p>meus amigos tem elogiado a vestimenta.</p>
                <p>Recomendo para quem gosta de perfeição. Estamos nos servido do trabalho do</p>
                <p>Renee Trajar há mais de vinte anos."</p>
                <h3>Domingos Orestes Chiomento</h3>
                <h3>DOC Contabilidade Empresarial</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "470px" }}>
              <img
                style={{ height: "470px" }}
                className="d-block w-100"
                src={fundo}
              />

              <Carousel.Caption>
                <img 
                    className="imagem"
                    src={carousel3}
                />
                <p>"Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito</p>
                <p>é sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional</p>
                <p>competente e idôneo, sempre pontual, atencioso e preocupado em atender da</p>
                <p>melhor maneira os anseios de seus clientes, incluindo esse signatário."</p>
                <h3>José Mauro Marques</h3>
                <h3>Advogado</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "470px" }}>
              <img
                style={{ height: "470px" }}
                className="d-block w-100"
                src={fundo}
              />

              <Carousel.Caption>
                <img 
                    className="imagem"
                    src={carousel4}
                />
                <p>"Coneheço o excelente e qualificado trabalho de Renee Trajar e sua equipe há décadas. Para</p>
                <p>camisas e ternos, o Renee é imbatível, sempre com preços justos, produtos de excelente</p>
                <p>qualidade e especialmente tudo é feito com muito cuidado e qualidade. Cumpre os prazos</p>
                <p>com atendimentos de alto nível. O Renee Trabalha com perfeição nos detalhes"</p>
                <h3>Custódio Pereira</h3>
                <h3>Membro do CONSOCIAL-Conselho Superior de Responsabilidade Social da FIESP-SP</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;

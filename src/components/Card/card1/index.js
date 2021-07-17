import React from 'react';
import './style.css'
import foto1 from "../../../assets/foto1.png"
import Button from '../../Button';

function Card1() {
 return (
<div className="card-container">
  <div className="teste">
      <div className="img">
         <img class="imgcard1" align="left" src={foto1} alt="Foto" />
      </div>
   <h1>Renee Trajar</h1>
   <p>Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, 
       possuímos profissionais experientes e altamente qualificados.</p>
   <p>Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através 
       das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.</p>
    <p class="frase">“Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação 
        ao usar nossos produtos, aliado a um relacionamento franco e honesto, 
        valorizando o ser humano.”</p>
    <p class="ass">Renee Trajar</p>
    <Button>Agende uma visita!</Button>
  </div>
</div>
 );
}

export default Card1;
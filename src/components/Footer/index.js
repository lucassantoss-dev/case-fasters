import React from 'react';
import footer from '../../assets/footer.png'
import './style.css'

function Footer() {
  return (
    
      <div className="footer">
        <div>
          <img src={footer} /><br></br>
          <p>CNPJ:04.487.685/0001-01</p>
        </div>
        <p>
        Copyright: 2021 © Renee Trajar – Todos os direitos reservados.
        </p>
      </div>
  );
}

export default Footer;
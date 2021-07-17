import React from 'react';
import Header from '../Header';
import Card1 from '../Card/card1';
import Card2 from '../Card/card2';
import Card3 from '../Card/card3';
import Card4 from '../Card/card4';
import Card5 from '../Card/card5';
import Card6 from '../Card/card6';
import Carousel from '../Card/card-carousel';
import Contato from '../../pages/contato/PaginaContato';
import './style.css';
import Footer from '../Footer';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Carousel />
      <strong>Contato</strong>
      <Contato />
      <Footer />
    </div>
  );
}

export default HomePage;
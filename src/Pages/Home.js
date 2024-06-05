import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Home.css"
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import RightImage from '../images/rightIcon.svg';  

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      
      <div className='HomeCenter'>
      <div className='LeftSize'>
        <h2>Nosso diferencial é Agilidade, Confiabilidade e Respeito !</h2>
        <button type="button" class="btn btn-outline-dark btn-lg">Conhecer mais</button>
      </div>
      <img src={RightImage} alt="logo" className='rightImage'/>
      </div>
    
    </div>
    
  );
}

export default Home;

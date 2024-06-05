import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Login.css'
import LoginForm from '../components/LoginForm'
import Vetor1 from '../images/vetor1.svg';
import Vetor2 from '../images/vetor2.svg';


function Cadastro() {
  return (
    
    <div className='LoginAll'>
      

    <div className='conteudoLogin'>
      
      <div className='LoginLeft'>
      <Link to="/"><p className='backArrow'>&#8617;</p></Link>
      <img src={Vetor2} alt="logo" className='leftVetor'/>
      </div>
      <LoginForm />
      <div className='LoginRight'> 
      </div>
      
    </div>
    <img src={Vetor1} alt="logo" className='rightVetor'/>
    </div>
  );
}

export default Cadastro;

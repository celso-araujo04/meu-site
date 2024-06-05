import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadUserForm from '../components/CadUserForm'
import "./CadastroUser.css"


function Cadastro() {
  return (
    
    <div className='CadastroUser'>
      <Link to="/Login"><p className='backArrow'>&#8617;</p></Link>
        <CadUserForm />
    </div>
  );
}

export default Cadastro;

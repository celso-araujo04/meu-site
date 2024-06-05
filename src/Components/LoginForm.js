import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './LoginForm.css';
import logo from '../images/logoipsum-254.svg';  

function LoginForm() {
  return (
    <div className="login-container">
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <h1 className="login-title">Contrato Digital</h1>
      <form className="login-form">
        <div className="form-group mb-4">
          <label htmlFor="username" className="form-label visually-hidden">Usuário</label>
          <div className="input-group">
            <span className="input-group-text bg-white border-0"><i className="bi bi-person"></i></span>
            <input type="text" id="username" className="form-control border-0" placeholder="USUÁRIO" />
          </div>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="form-label visually-hidden">Senha</label>
          <div className="input-group">
            <span className="input-group-text bg-white border-0"><i className="bi bi-lock"></i></span>
            <input type="password" id="password" className="form-control border-0" placeholder="SENHA" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">LOGIN</button>
      </form>
      <div className="login-links mt-3">
        <a href="#" className="d-block mb-2">Esqueci minha senha</a>
        <Link to="/Cadastro"><a href="#" className="d-block">Criar conta</a></Link>
      </div>
    </div>
  );
}

export default LoginForm;
 
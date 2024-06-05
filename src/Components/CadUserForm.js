import React from 'react';
import './CadUserForm.css';
import logo from '../images/logoipsum-254.svg';  

function CadastroForm() {
  return (
    <div className="form-container">
      <div className="form-header">
        <img src={logo} alt="Form Icon" className="form-icon" />
        <h2>Cadastro</h2>
      </div>
      <form className="form">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Nome" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="CPF" />
          <input type="date" className="form-control" placeholder="Data de Nascimento" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="E-mail" />
        </div>
        <div className="form-group">
          <input type="tel" className="form-control" placeholder="Telefone" />
          <input type="text" className="form-control" placeholder="Gênero" />
        </div>
        <div className="form-group">
          <input type="tel" className="form-control" placeholder="Telefone" />
          <input type="text" className="form-control" placeholder="Tipo da Conta" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Agência" />
          <input type="text" className="form-control" placeholder="Conta" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Titular" />
          <input type="text" className="form-control" placeholder="Chave PIX" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Senha" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Confirmar senha" />
        </div>
        <button type="submit" className="btn btn-primary">Criar conta</button>
      </form>
    </div>
  );
}

export default CadastroForm;

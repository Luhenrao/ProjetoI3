
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import './Botoes.css';
import './BotoesLC.css';
import './BotaoCadastro.css';





const Header = () => {
    return(
      
            <div>
        <nav className="nav">
            <img src="./img/logo.png" />
            <h1 className="CSlogo">Cidade segura</h1>
            <Link to ="/" className="botoesLC">Início</Link>
            <Link to="/Desafio" className="Botoes">Desafio</Link>
            <Link to="/Solucao" className="Botoes">Solução</Link>
            <Link to="/Sobrenos"className="Botoes">Sobre Nós</Link>
            <Link to="/Login"className="botoesLC">Entrar</Link>
            <Link to="/Cadastrar"className="BotaoCadastro">Cadastrar</Link>
            
        </nav>
        </div>
  
    );
};

export default Header;
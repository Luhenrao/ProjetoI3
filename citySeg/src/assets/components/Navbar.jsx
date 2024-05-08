
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Header = () => {
    return(
      
            <div className="header">
        <nav className="nav">
            <Link to = "/"> Home </Link>
            <Link to="/Desafio">Desafio</Link>
            <Link to="/Solucao">Solução</Link>
            <Link to="/Sobrenos">Sobre Nós</Link>
        </nav>
        </div>
  
    );
};

export default Header;